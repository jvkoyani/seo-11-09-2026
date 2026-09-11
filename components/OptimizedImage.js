import Image from 'next/image';
import { useMemo } from 'react';

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  containerClassName = '',
  quality = 85,
  isLCP = false, // Mark if this is Largest Contentful Paint image
}) {
  // Calculate aspect ratio for CLS prevention
  const aspectRatio = useMemo(() => {
    if (width && height) {
      return `${width} / ${height}`;
    }
    return 'auto';
  }, [width, height]);

  return (
    <div
      className={containerClassName}
      style={{
        position: 'relative',
        aspectRatio,
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill={!width || !height}
        width={width}
        height={height}
        priority={priority || isLCP}
        quality={quality}
        loading={isLCP ? 'eager' : 'lazy'}
        className={className}
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 90vw,
               1200px"
      />
    </div>
  );
}
