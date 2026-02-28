import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Hint } from '../types';
import { pages } from '../content';

export function useHints(activePage: string, isCategoryPage: boolean) {
    const [hints, setHints] = useState<Hint[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchHints = async () => {
        if (activePage === 'home') {
            setHints([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        let query = supabase
            .from('hints')
            .select(`
        id,
        title,
        description,
        image_url,
        image_size,
        category_id,
        country,
        created_at
      `);

        if (activePage !== 'contribute' && activePage !== 'home') {
            if (isCategoryPage) {
                query = query.eq('category_id', activePage);
            } else {
                const countryTitle = pages[activePage]?.title || activePage;
                const strippedCountry = countryTitle.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/g, '');
                query = query.eq('country', strippedCountry);
            }
        }

        const { data, error } = await query.order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching hints:', error);
        } else if (data) {
            const formattedHints: Hint[] = (data as any[]).map(hint => ({
                id: hint.id,
                categoryId: hint.category_id,
                title: hint.title,
                description: hint.description || '',
                country: hint.country || undefined,
                image: hint.image_url || undefined,
                imageSize: (hint.image_size as 'small' | 'medium' | 'large') || 'medium',
                timestamp: hint.created_at
            }));
            setHints(formattedHints);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchHints();

        const channel = supabase
            .channel('hints-changes')
            .on(
                'postgres_changes',
                { event: '*', table: 'hints', schema: 'public' },
                () => {
                    fetchHints();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [activePage, isCategoryPage]);

    return { hints, loading, refresh: fetchHints };
}
