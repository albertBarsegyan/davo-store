import type { ImgHTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import './lazy-image.css';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export const LazyImage = ({
  src,
  alt,
  wrapperClassName,
  className = '',
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 1. IntersectionObserver for Lazy Loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 2. MutationObserver as requested
    // We observe the 'src' attribute mutation to handle the loading state
    if (!imgRef.current) return;

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
          // When src changes (e.g., from empty to actual URL), reset loaded state
          setIsLoaded(false);
        }
      });
    });

    mutationObserver.observe(imgRef.current, {
      attributes: true,
      attributeFilter: ['src'],
    });

    return () => mutationObserver.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`lazyImageWrapper ${wrapperClassName ?? ''} `}>
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        onLoad={handleLoad}
        className={`lazyImage ${className} ${isLoaded ? 'loaded' : 'loading'}`}
        {...props}
      />
    </div>
  );
};
