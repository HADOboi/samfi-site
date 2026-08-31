import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

export default function VideoCard({ video, isVisible, onClick }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    video.type === "landscape"
      ? `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`
      : `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
  );
  const imgRef = useRef(null);

  // Fallback to hqdefault if maxresdefault fails for landscape
  const handleImageError = () => {
    setThumbSrc(`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`);
  };

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setImgLoaded(true);
    }
  }, [thumbSrc, isVisible]);

  const isShort = video.type === "short";

  return (
    <div
      className={`gallery-video-card ${isShort ? "is-short" : "is-landscape"} ${
        imgLoaded ? "is-loaded" : "is-loading"
      }`}
      style={{ aspectRatio: video.aspectRatio }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${video.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Skeleton Shimmer until visible & loaded */}
      {!imgLoaded && (
        <div className="video-card-skeleton" aria-hidden="true" />
      )}

      {/* Only attach src if section is visible / scrolled to */}
      {isVisible && (
        <img
          ref={imgRef}
          src={thumbSrc}
          alt={video.title}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
          onLoad={() => setImgLoaded(true)}
          className={`video-card-thumb ${imgLoaded ? "is-visible" : "is-hidden"}`}
        />
      )}

      {/* Play Button Indicator */}
      <div className="video-card-play-btn" aria-hidden="true">
        <Play size={22} className="play-icon" />
      </div>

      {/* Title Overlay */}
      <div className="video-card-overlay">
        <p className="video-card-title">{video.title}</p>
      </div>
    </div>
  );
}
