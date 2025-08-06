import React, { useState, useRef, useEffect } from 'react';

interface BouquetImageProps {
  bouquetName: string;
  alt: string;
  size: 'thumbnail' | 'main' | 'large';
  className?: string;
  showZoom?: boolean;
  fallbackEmoji?: string;
  loading?: 'lazy' | 'eager';
}

export const BouquetImage: React.FC<BouquetImageProps> = ({
  bouquetName,
  alt,
  size,
  className = '',
  showZoom = false,
  fallbackEmoji = '🌼',
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

  // Generate image paths
  const getImagePath = (format: 'webp' | 'jpg') => {
    const normalizedName = bouquetName.toLowerCase().replace(/\s+/g, '-');
    return `/images/bouquets/${normalizedName}/${normalizedName}-${size}.${format}`;
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

  // Zoom functionality
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomToggle = () => {
    if (showZoom) {
      setIsZoomed(!isZoomed);
    }
  };

  // Size configurations
  const sizeClasses = {
    thumbnail: 'w-full h-48',
    main: 'w-full h-64',
    large: 'w-full h-96'
  };

  // Loading placeholder component
  const LoadingPlaceholder = () => (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-petal-100 via-petal-50 to-rosewood-100 rounded-organic flex items-center justify-center relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 paper-texture opacity-20"></div>
      <div className="animate-pulse">
        <span className="text-4xl text-petal-400/60">{fallbackEmoji}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
    </div>
  );

  // Error fallback component  
  const ErrorFallback = () => (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-petal-100 via-petal-50 to-rosewood-100 rounded-organic flex items-center justify-center relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 paper-texture opacity-20"></div>
      <span className="text-6xl animate-gentle-bounce">{fallbackEmoji}</span>
      <div className="absolute top-3 right-3 text-lg text-petal-400/60">❦</div>
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
      className={`relative overflow-hidden rounded-organic group ${showZoom ? 'cursor-zoom-in' : ''} ${className}`}
      onClick={handleZoomToggle}
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
            ${showZoom && isZoomed ? 'scale-150' : 'group-hover:scale-105'}
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={loading}
        />
      </picture>

      {/* Hover overlay for interactive images */}
      {showZoom && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-sage-800">
              {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
            </div>
          </div>
        </div>
      )}

      {/* Decorative elements that match the original design */}
      {imageLoaded && (
        <>
          <div className="absolute top-3 right-3 text-lg text-petal-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">❦</div>
          <div className="absolute inset-0 paper-texture opacity-10"></div>
        </>
      )}
    </div>
  );
};

// Utility function to check if image exists (for development)
export const checkImageExists = (bouquetName: string, size: 'thumbnail' | 'main' | 'large'): Promise<boolean> => {
  const normalizedName = bouquetName.toLowerCase().replace(/\s+/g, '-');
  const webpPath = `/images/bouquets/${normalizedName}/${normalizedName}-${size}.webp`;
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = webpPath;
  });
};