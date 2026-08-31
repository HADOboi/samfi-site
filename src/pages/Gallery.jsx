import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";
import ImageCard from "../components/ImageCard";
import VideoCard from "../components/VideoCard";
import { BrandName } from "../components/BrandName";
import { galleryImages } from "../data/gallery";
import { galleryVideos } from "../data/videos";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [isVideosVisible, setIsVideosVisible] = useState(false);
  const videosSectionRef = useRef(null);
  const lenis = useLenis();
  const touchStartRef = useRef(null);

  const isImageOpen = selectedIndex !== null;
  const currentImage = isImageOpen ? galleryImages[selectedIndex] : null;

  const isVideoOpen = selectedVideoIndex !== null;
  const currentVideo = isVideoOpen ? galleryVideos[selectedVideoIndex] : null;

  // Preload all gallery images immediately on mount for 0ms instant display
  useEffect(() => {
    galleryImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  // IntersectionObserver to only load video cards when scrolling to the videos section
  useEffect(() => {
    if (!videosSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideosVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "250px", // Trigger slightly ahead of scrolling into view
        threshold: 0.01,
      }
    );

    observer.observe(videosSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Image Lightbox Handlers
  const handleNextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryImages.length));
  }, []);

  const handlePrevImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const handleCloseImage = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Video Modal Handlers
  const handleNextVideo = useCallback(() => {
    setSelectedVideoIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryVideos.length));
  }, []);

  const handlePrevVideo = useCallback(() => {
    setSelectedVideoIndex((prev) =>
      prev === null ? 0 : (prev - 1 + galleryVideos.length) % galleryVideos.length
    );
  }, []);

  const handleCloseVideo = useCallback(() => {
    setSelectedVideoIndex(null);
  }, []);

  // Lock background scroll & Lenis when either lightbox or video modal is active
  const isAnyModalOpen = isImageOpen || isVideoOpen;
  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isAnyModalOpen, lenis]);

  // Keyboard navigation for both modals
  useEffect(() => {
    if (!isAnyModalOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isImageOpen) handleCloseImage();
        if (isVideoOpen) handleCloseVideo();
      } else if (e.key === "ArrowRight") {
        if (isImageOpen) handleNextImage();
        if (isVideoOpen) handleNextVideo();
      } else if (e.key === "ArrowLeft") {
        if (isImageOpen) handlePrevImage();
        if (isVideoOpen) handlePrevVideo();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    isAnyModalOpen,
    isImageOpen,
    isVideoOpen,
    handleCloseImage,
    handleCloseVideo,
    handleNextImage,
    handleNextVideo,
    handlePrevImage,
    handlePrevVideo,
  ]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      if (isImageOpen) handleNextImage();
      if (isVideoOpen) handleNextVideo();
    } else if (diff < -45) {
      if (isImageOpen) handlePrevImage();
      if (isVideoOpen) handlePrevVideo();
    }
    touchStartRef.current = null;
  };

  return (
    <main className="gallery-page">
      <Header />
      <SocialDock />

      <motion.section
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <p className="eyebrow">GALLERY</p>

          <h1>
            Our work.
            <br />
            <em>Our journey.</em>
          </h1>

          <p>
            A visual record of our projects, executive workshops, milestone
            assemblies, and on-site consultations. This collection continues to
            grow as <BrandName /> expands across sectors.
          </p>
        </div>

        <div className="hero-mark" />
      </motion.section>

      {/* Images Section */}
      <section className="gallery-images-section" aria-label="Image gallery">
        <div className="gallery-section-heading">
          <Reveal>
            <h2>Images</h2>
          </Reveal>
        </div>

        <div className="gallery-masonry">
          {galleryImages.map((image, index) => (
            <div
              key={image.id || image.src}
              className="gallery-masonry-item"
              role="button"
              tabIndex={0}
              aria-label={`Open full size view for ${image.title || image.alt}`}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
            >
              <ImageCard src={image.src} alt={image.alt} aspectRatio={image.aspectRatio}>
                <div className="gallery-item-overlay">
                  <div className="gallery-item-overlay-content">
                    <p className="gallery-item-title">{image.title || "View Photograph"}</p>
                    <div className="gallery-item-zoom" aria-hidden="true">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </ImageCard>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section
        id="videos"
        className="gallery-videos-section"
        ref={videosSectionRef}
        aria-label="Video gallery"
      >
        <div className="gallery-section-heading">
          <Reveal>
            <h2>Videos</h2>
          </Reveal>
        </div>

        {/* Shorts Grid */}
        <div className="gallery-shorts-grid">
          {galleryVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              isVisible={isVideosVisible}
              onClick={() => setSelectedVideoIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {isImageOpen && currentImage && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseImage}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Top Bar: Counter & Close */}
            <div
              className="gallery-lightbox-topbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gallery-lightbox-counter">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(galleryImages.length).padStart(2, "0")}
              </div>

              <button
                type="button"
                className="gallery-lightbox-btn"
                onClick={handleCloseImage}
                aria-label="Close image lightbox"
              >
                <X size={22} />
              </button>
            </div>

            {/* Main Lightbox Content Area */}
            <div
              className="gallery-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                className="gallery-lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Centered Image */}
              <div className="gallery-lightbox-image-container">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage.fullSrc || currentImage.src}
                    src={currentImage.fullSrc || currentImage.src}
                    alt={currentImage.alt}
                    className="gallery-lightbox-image"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                type="button"
                className="gallery-lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Bar: Title Caption */}
            <div
              className="gallery-lightbox-bottombar"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="gallery-lightbox-title">{currentImage.title || currentImage.alt}</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Video Modal Player */}
      <AnimatePresence>
        {isVideoOpen && currentVideo && (
          <motion.div
            className="gallery-lightbox-backdrop gallery-video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseVideo}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Video player modal"
          >
            {/* Top Bar: Counter, Badge & Close */}
            <div
              className="gallery-lightbox-topbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gallery-lightbox-counter">
                {String(selectedVideoIndex + 1).padStart(2, "0")} /{" "}
                {String(galleryVideos.length).padStart(2, "0")}
              </div>

              <button
                type="button"
                className="gallery-lightbox-btn"
                onClick={handleCloseVideo}
                aria-label="Close video player"
              >
                <X size={22} />
              </button>
            </div>

            {/* Center Video Content */}
            <div
              className="gallery-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                className="gallery-lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevVideo();
                }}
                aria-label="Previous video"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Video Player Container with Proper Aspect Ratio */}
              <div
                className={`gallery-video-player-container ${
                  currentVideo.type === "short" ? "is-short-player" : "is-landscape-player"
                }`}
              >
                <iframe
                  key={currentVideo.id}
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                  title={currentVideo.title}
                  className="gallery-video-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                className="gallery-lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextVideo();
                }}
                aria-label="Next video"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Bar: Title Caption */}
            <div
              className="gallery-lightbox-bottombar"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="gallery-lightbox-title">{currentVideo.title}</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}


