import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactCrop, { type Crop, type PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Hint } from '../types';
import { supabase } from '../lib/supabase';
import { regions, pages } from '../content';
import { getCroppedImg } from '../utils/cropImage';

interface ContributeFormProps {
    hintToEdit?: Hint | null;
    onCancelEdit?: () => void;
}

const CATEGORIES = [
    { id: 'language', label: 'Language' },
    { id: 'sign', label: 'Sign' },
    { id: 'bollard', label: 'Bollard' },
    { id: 'chevron', label: 'Chevron' },
    { id: 'guardrail', label: 'Guardrail' },
    { id: 'pole', label: 'Pole' },
    { id: 'road-markings', label: 'Road Markings' },
    { id: 'vegetation', label: 'Vegetation' },
    { id: 'pavement', label: 'Pavement' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'road-numbering', label: 'Road Numbering' },
    { id: 'place-name', label: 'Place Name' },
    { id: 'telephone', label: 'Telephone' },
    { id: 'company', label: 'Company' },
    { id: 'license-plate', label: 'License Plate' },
    { id: 'car-meta', label: 'Car Meta' },
];

const ALL_COUNTRIES = Array.from(new Set(regions.flatMap(r => r.pages)))
    .map(pageId => ({
        id: pageId,
        label: (pages[pageId]?.title || pageId).replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/g, '')
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

export default function ContributeForm({ hintToEdit, onCancelEdit }: ContributeFormProps) {
    const [title, setTitle] = useState('');
    const [categoryId, setCategoryId] = useState(CATEGORIES[0].id);
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);
    const [imageSize, setImageSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    // Crop States
    const [isCropping, setIsCropping] = useState(false);
    const [originalImageSrc, setOriginalImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const imgRef = useRef<HTMLImageElement>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (hintToEdit) {
            setTitle(hintToEdit.title);
            setCategoryId(hintToEdit.categoryId);
            setCountry(hintToEdit.country || '');
            setDescription(hintToEdit.description || '');
            setImagePreview(hintToEdit.image);
            setImageSize(hintToEdit.imageSize || 'medium');
        } else {
            handleReset();
        }
    }, [hintToEdit]);

    const handleReset = () => {
        setTitle('');
        setCategoryId(CATEGORIES[0].id);
        setCountry('');
        setDescription('');
        setImageFile(null);
        setImagePreview(undefined);
        setImageSize('medium');
        setOriginalImageSrc(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const processFile = useCallback((file: File) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a supported image format (JPG, PNG, WebP).');
            if (fileInputRef.current) fileInputRef.current.value = '';
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            alert('Image must be less than 10MB.');
            if (fileInputRef.current) fileInputRef.current.value = '';
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setOriginalImageSrc(reader.result as string);
            setIsCropping(true);
        };
        reader.readAsDataURL(file);
        if (fileInputRef.current) fileInputRef.current.value = '';
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) processFile(file);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingOver(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) processFile(file);
    };

    // Not needed with react-image-crop natively handling this
    // const onCropComplete = ...

    const handleCropConfirm = async () => {
        if (!originalImageSrc || !completedCrop || !imgRef.current) return;

        setIsProcessing(true);
        try {
            const image = imgRef.current;
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            const actualCrop = {
                x: completedCrop.x * scaleX,
                y: completedCrop.y * scaleY,
                width: completedCrop.width * scaleX,
                height: completedCrop.height * scaleY,
            };

            const croppedFile = await getCroppedImg(originalImageSrc, actualCrop, 'cropped_hint.webp');
            if (croppedFile) {
                setImageFile(croppedFile);
                setImagePreview(URL.createObjectURL(croppedFile));
                setIsCropping(false);
            }
        } catch (e) {
            console.error(e);
            alert('Failed to process and compress the image.');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleCropCancel = () => {
        setIsCropping(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!categoryId || !country || isSubmitting) return;

        setIsSubmitting(true);
        try {
            let imageUrl = imagePreview;

            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const safeCountryStr = country.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase();
                const filePath = `${categoryId}/${safeCountryStr}/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('hints')
                    .upload(filePath, imageFile);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('hints')
                    .getPublicUrl(filePath);

                imageUrl = publicUrl;
            }

            const hintData = {
                title,
                description,
                category_id: categoryId,
                country: country,
                image_url: imageUrl,
                image_size: imageSize,
                updated_at: new Date().toISOString()
            };

            if (hintToEdit) {
                const { error } = await supabase
                    .from('hints')
                    .update(hintData)
                    .eq('id', hintToEdit.id);
                if (error) throw error;
                onCancelEdit?.();
            } else {
                const { error } = await supabase
                    .from('hints')
                    .insert([{ ...hintData, created_at: new Date().toISOString() }]);
                if (error) throw error;
            }

            handleReset();
        } catch (error: any) {
            console.error('Error submitting hint:', error);
            alert(`Error saving hint: ${error.message || error.error_description || JSON.stringify(error)}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!hintToEdit || !window.confirm('Are you sure you want to delete this hint?')) return;

        setIsSubmitting(true);
        try {
            const { error } = await supabase
                .from('hints')
                .delete()
                .eq('id', hintToEdit.id);
            if (error) throw error;
            onCancelEdit?.();
            handleReset();
        } catch (error) {
            console.error('Error deleting hint:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {isCropping && originalImageSrc && (
                <div className="crop-modal-overlay">
                    <div className="crop-container-wrapper" style={{ overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent' }}>
                        <ReactCrop
                            crop={crop}
                            onChange={(_, percentCrop) => setCrop(percentCrop)}
                            onComplete={(c) => setCompletedCrop(c)}
                        >
                            <img
                                ref={imgRef}
                                src={originalImageSrc}
                                alt="Crop me"
                                style={{ maxHeight: '60vh', maxWidth: '100%', objectFit: 'contain' }}
                            />
                        </ReactCrop>
                    </div>
                    <div className="crop-controls">
                        <button type="button" className="cancel-btn" onClick={handleCropCancel} disabled={isProcessing}>Cancel</button>
                        <button type="button" className="confirm-btn" onClick={handleCropConfirm} disabled={isProcessing}>
                            {isProcessing ? 'Processing...' : 'Confirm Crop'}
                        </button>
                    </div>
                </div>
            )}

            <form className="contribute-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="form-input"
                        required
                    >
                        {CATEGORIES.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title (Optional)</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Estonian Bollard"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country/Region</label>
                    <select
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-input"
                        required
                    >
                        <option value="">Select a country...</option>
                        {ALL_COUNTRIES.map((c) => (
                            <option key={c.id} value={c.label}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description (Optional)</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the hint or clue..."
                        className="form-input"
                        rows={5}
                    />
                </div>

                <div className="form-group">
                    <label>Image (Optional)</label>
                    {/* Hidden native file input */}
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    {/* Drag-and-drop zone */}
                    <div
                        className={`dropzone${isDraggingOver ? ' dropzone--active' : ''}`}
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        role="button"
                        tabIndex={0}
                        aria-label="Upload image by clicking or dragging and dropping"
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                    >
                        <svg className="dropzone-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 16 12 12 8 16" />
                            <line x1="12" y1="12" x2="12" y2="21" />
                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                        </svg>
                        <p className="dropzone-text">
                            {isDraggingOver ? 'Drop image here' : 'Drag & drop an image here'}
                        </p>
                        <p className="dropzone-subtext">or <span className="dropzone-link">click to browse</span></p>
                        <p className="dropzone-formats">JPG, PNG, WebP · max 10 MB</p>
                    </div>
                    {imagePreview && (
                        <div className="image-preview-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                            <div className="form-group">
                                <label>Image Size</label>
                                <div className="size-toggle">
                                    {(['small', 'medium', 'large'] as const).map(size => (
                                        <button
                                            key={size}
                                            type="button"
                                            className={`size-toggle-btn${imageSize === size ? ' active' : ''}`}
                                            onClick={() => setImageSize(size)}
                                        >
                                            {size.charAt(0).toUpperCase() + size.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="image-preview" style={{ margin: 0 }}>
                                <img src={imagePreview} alt="Preview" />
                            </div>
                            {originalImageSrc && (
                                <button type="button" className="cancel-button" style={{ maxWidth: '120px' }} onClick={() => setIsCropping(true)}>
                                    Recrop Image
                                </button>
                            )}
                        </div>
                    )}
                </div>

                <div className="form-buttons">
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? 'Saving...' : (hintToEdit ? 'Update Hint' : 'Submit Hint')}
                    </button>
                    {hintToEdit && (
                        <>
                            <button
                                type="button"
                                className="delete-btn"
                                onClick={handleDelete}
                                disabled={isSubmitting}
                                style={{
                                    marginLeft: '10px',
                                    border: '1px solid #cc0000',
                                    color: '#cc0000',
                                    padding: '10px 20px',
                                    borderRadius: '4px',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className="cancel-button"
                                onClick={onCancelEdit}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                        </>
                    )}
                </div>
            </form>
        </>
    );
}
