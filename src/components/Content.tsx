import { useState } from 'react';
import { Page, Hint } from '../types';
import ContributeForm from './ContributeForm';
import { supabase } from '../lib/supabase';

interface ContentProps {
  page: Page;
  hints: Hint[];
  isCategoryPage: boolean;
  loading?: boolean;
}

export default function Content({ page, hints, isCategoryPage, loading }: ContentProps) {
  const [hintToEdit, setHintToEdit] = useState<Hint | null>(null);
  const isContributePage = page.id === 'contribute';

  const handleEditClick = (hint: Hint) => {
    setHintToEdit(hint);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = async (hint: Hint) => {
    if (!window.confirm('Are you sure you want to delete this hint?')) return;
    try {
      const { error } = await supabase.from('hints').delete().eq('id', hint.id);
      if (error) throw error;
      if (hintToEdit?.id === hint.id) setHintToEdit(null);
    } catch (error) {
      console.error('Error deleting hint:', error);
      alert('Failed to delete hint.');
    }
  };

  return (
    <main className="content">
      <article>
        <h1>{page.title.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/g, '')}</h1>

        {page.description && (
          <p className="category-description">{page.description}</p>
        )}

        {/* Divider removed as requested */}

        {loading && <div className="loading">Loading hints...</div>}

        <div className="content-body">
          {/* Dynamic Contributions Section - Grouped by Country for Categories, direct for Countries */}
          {!isContributePage && !loading && hints.length > 0 && (
            <section className="contributions-section">
              {isCategoryPage ? (
                <div className="country-group-wrapper">
                  <div className="country-group">
                    <div className="entries-grid">
                      {hints.map((hint) => (
                        <div key={hint.id} className="hint-card">
                          {hint.title && (
                            <div className="hint-card-content hint-header">
                              <h4>{hint.title}</h4>
                            </div>
                          )}
                          {hint.image && (
                            <div className={`hint-card-image hint-img-${hint.imageSize || 'medium'}`}>
                              <img src={hint.image} alt={hint.title} loading="lazy" />
                            </div>
                          )}
                          {hint.description && (
                            <div className="hint-card-content hint-description">
                              <p>{hint.description}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="country-group-wrapper">
                  <div className="country-group">
                    <div className="entries-grid">
                      {hints.map((hint) => (
                        <div key={hint.id} className="hint-card">
                          {hint.image && (
                            <div className={`hint-card-image hint-img-${hint.imageSize || 'medium'}`}>
                              <img src={hint.image} alt={hint.title} loading="lazy" />
                            </div>
                          )}
                          {hint.description && (
                            <div className="hint-card-content hint-description">
                              <p>{hint.description}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Page Content (Supplementary info like websites or instructions) */}
          {page.content}

          {/* Form only on contribute page */}
          {isContributePage && (
            <>
              <ContributeForm
                hintToEdit={hintToEdit}
                onCancelEdit={() => setHintToEdit(null)}
              />

              {hints.length > 0 && (
                <section className="my-contributions">
                  <h2>My Contributions</h2>
                  <div className="hints-grid">
                    {hints.map(hint => (
                      <div key={hint.id} className="contribution-item">
                        <div className="contribution-info">
                          <span className="contribution-cat">{hint.categoryId}</span>
                          {hint.title && <strong>{hint.title}</strong>}
                        </div>
                        <div className="contribution-actions">
                          <button type="button" onClick={() => handleEditClick(hint)}>Edit</button>
                          <button type="button" className="delete-btn" onClick={() => handleDeleteClick(hint)}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </article>

      <footer className="footer-meta">
        <p>Proudly developed by Krishna</p>
        <p>Last updated: February 28, 2026</p>
        <p><a href="https://github.com/blurryface027/geo-tips" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a></p>
      </footer>
    </main >
  );
}
