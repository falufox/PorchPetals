import React, { useState, useRef, useEffect } from 'react';

interface HouseplantImageProps {
  plantName: string;
  alt: string;
  size: 'thumbnail' | 'main' | 'large';
  className?: string;
  fallbackEmoji?: string;
  loading?: 'lazy' | 'eager';
}

export const HouseplantImage: React.FC<HouseplantImageProps> = ({
  plantName,
  alt,
  size,
  className = '',
  fallbackEmoji = '🌿',
  loading = 'lazy'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  // Generate image paths - normalize plant names to folder structure
  const getImagePath = (format: 'webp' | 'jpg') => {
    let normalizedName = plantName.toLowerCase().replace(/\s+/g, '-');
    let folderName = normalizedName;
    
    // Handle specific plant name mappings
    if (plantName.toLowerCase().includes('rubber')) {
      folderName = 'rubber-plant';
      normalizedName = 'rubberplant';
    } else if (plantName.toLowerCase().includes('philodendron')) {
      folderName = 'philodendron-birkin';
      normalizedName = 'philodendron birkin';
    } else if (plantName.toLowerCase().includes('pothos')) {
      folderName = 'pothos';
      normalizedName = 'pothos';
    }
    
    return `/images/houseplants/${folderName}/${normalizedName}-${size}.${format}`;
  };

  const webpPath = getImagePath('webp');
  const jpgPath = getImagePath('jpg');

  // Handle image load success
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  // Handle image load error
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  // Size configurations
  const sizeClasses = {
    thumbnail: 'w-full h-48',
    main: 'w-full h-48',
    large: 'w-full h-64'
  };

  // Loading placeholder component
  const LoadingPlaceholder = () => (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-sage-100 via-sage-50 to-kraft-100 rounded-organic flex items-center justify-center relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 paper-texture opacity-20"></div>
      <div className="animate-pulse">
        <span className="text-4xl text-sage-400/60">{fallbackEmoji}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
    </div>
  );

  // Error fallback component  
  const ErrorFallback = () => (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-sage-100 via-sage-50 to-kraft-100 rounded-organic flex items-center justify-center relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 paper-texture opacity-20"></div>
      <span className="text-6xl animate-gentle-bounce">{fallbackEmoji}</span>
    </div>
  );

  // If image failed to load, show fallback
  if (imageError) {
    return <ErrorFallback />;
  }

  // If not in view yet (for lazy loading), show placeholder
  if (!isInView) {
    return (
      <div ref={containerRef}>
        <LoadingPlaceholder />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-organic group ${className}`}
    >
      {/* Loading placeholder while image loads */}
      {!imageLoaded && <LoadingPlaceholder />}
      
      {/* Optimized image with WebP and JPEG fallback */}
      <picture className={imageLoaded ? 'block' : 'hidden'}>
        <source srcSet={webpPath} type="image/webp" />
        <source srcSet={jpgPath} type="image/jpeg" />
        <img
          ref={imgRef}
          src={jpgPath}
          alt={alt}
          className={`
            ${sizeClasses[size]} 
            object-cover 
            transition-all 
            duration-500
            group-hover:scale-105
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={loading}
        />
      </picture>

      {/* Decorative elements that match the original design */}
      {imageLoaded && (
        <div className="absolute inset-0 paper-texture opacity-10"></div>
      )}
    </div>
  );
};