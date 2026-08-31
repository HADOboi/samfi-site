import { useState, useRef, useEffect } from "react";

export default function ImageCard({
  src,
  alt,
  className = "",
  aspectRatio = "4 / 3",
  priority = false,
  onClick,
  children,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && (imgRef.current.complete || imgRef.current.naturalWidth > 0)) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`image-card ${isLoaded ? "is-loaded" : "is-loading"} ${className}`.trim()}
      style={aspectRatio ? { aspectRatio } : undefined}
      onClick={onClick}
      {...props}
    >
      {!isLoaded && <div className="image-card-skeleton" aria-hidden="true" />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`image-card-img ${isLoaded ? "is-visible" : "is-hidden"}`}
      />
      {children}
    </div>
  );
}





