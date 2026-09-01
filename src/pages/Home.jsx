import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Play, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { sectors } from '../data/sectors'
import { Header, Footer, SocialDock } from '../components/Layout'
import { BrandName } from '../components/BrandName'
import ImageCard from '../components/ImageCard'
import { galleryImages } from '../data/gallery'
import { galleryVideos } from '../data/videos'

const goldLogo =
  "https://res.cloudinary.com/iiww9i7d/image/upload/f_auto,q_auto,w_360,c_limit/v1788152477/samfi-gold-logo.png";

const planetAppearance = {
  "/services/personal-solutions": {
    color: "var(--sage)",
    glow: "rgba(124, 145, 105, 0.25)",
    left: "11.7%",
    top: "82.1%",
    size: "12.5%"
  },
  "/services/business-solutions": {
    color: "var(--clay)",
    glow: "rgba(176, 93, 68, 0.25)",
    left: "66.5%",
    top: "78.6%",
    size: "14%"
  },
  "/services/training-solutions": {
    color: "var(--ochre)",
    glow: "rgba(191, 150, 64, 0.25)",
    left: "88.3%",
    top: "17.9%",
    size: "12%"
  },
  "/services/digital-solutions": {
    color: "#61e4c5",
    glow: "rgba(97, 228, 197, 0.35)",
    left: "33.5%",
    top: "21.4%",
    size: "9%"
  }
};

const heroPlanets = sectors.map((sector) => ({
  ...sector,
  ...planetAppearance[sector.slug],
}));

// Curated featured media sequence referencing existing centralized gallery data
const featuredMedia = [
  {
    id: 'film-1',
    type: 'image',
    data: galleryImages[5], // Enterprise Solutions Architecture (4:3, landscape)
  },
  {
    id: 'film-2',
    type: 'image',
    data: galleryImages[0], // Executive Training & Engagement (3:4, portrait)
  },
  {
    id: 'film-3',
    type: 'video',
    data: galleryVideos[4], // Leadership training program (9:16, portrait video)
  },
  {
    id: 'film-4',
    type: 'image',
    data: galleryImages[4], // Project Collaboration & Review (4:3, landscape)
  },
  {
    id: 'film-5',
    type: 'video',
    data: galleryVideos[0], // Excessive doubt - control your mind (9:16, portrait video)
  },
  {
    id: 'film-6',
    type: 'image',
    data: galleryImages[2], // Operations & On-Site Consultation (20:9, panoramic)
  },
];

export default function Home() {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollFilmstrip = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.clientWidth * 0.7;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Close modal on Escape key press
  useEffect(() => {
    if (!selectedVideo && !selectedImage) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVideo, selectedImage]);

  return (
    <main className="home-page">
      <Header />
      <SocialDock />
      
      <section className="hero">
        <motion.div 
          className="hero-intro" 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: [.16, 1, .3, 1] }}
        >
          <h1>to empower your<br /><em>brain &amp; business...</em></h1>
        </motion.div>
        
        <div className="hero-orbit">
          <div className="orbit-inner-ring" />
          <div className="orbit-mid-ring" />
          <div className="orbit-outer-ring" />
          <div className="orbit-axis-h" />
          <div className="orbit-axis-v" />
          <img className="orbit-logo" src={goldLogo} alt="Samfi" />
          {heroPlanets.map((p) => {
            return (
              <Link
                key={p.slug}
                to={p.slug}
                className="hero-planet"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  '--glow-color': p.glow,
                  '--planet-color': p.color
                }}
                aria-label={p.label}
              >
                <span className="planet-dot" />
                <span className="planet-tooltip">
                  <span className="tooltip-text">{p.label}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-content">
          <div className="home-section-heading">
            <div className="home-about-header">
              <h2>About us</h2>
              <Link className="home-link home-about-readmore" to="/about">
                Read more <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="home-about-text">
              <p>
                <BrandName /> Global Academy is a multidisciplinary consulting and development
                organization committed to transforming individuals, organisations, and
                communities through the integration of Applied Psychology, Professional
                Mentoring, Leadership Development &amp; Trainings, Operational Excellence, and
                Future-Focused Digital Solutions.
              </p>
              <p>
                We - at <BrandName /> - believe that meaningful transformation begins with
                people and extends to organizations, communities, and the world of
                technology by delivering practical, integrated, and impactful solutions that
                empower growth, enhance performance, and create long lasting positive change.
              </p>
            </div>
          </div>
          
          <div className="home-about-nav-buttons">
            <Link className="outline-button home-nav-btn" to="/about#vision">
              Vision <ArrowUpRight size={15} />
            </Link>
            <Link className="outline-button home-nav-btn" to="/about#mission">
              Mission <ArrowUpRight size={15} />
            </Link>
            <Link className="outline-button home-nav-btn" to="/about#affiliation">
              Affiliation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="sectors">
        <div className="home-section-heading">
          <h2>Services</h2>
        </div>
        <div className="sector-grid">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.button 
                type="button" 
                initial={{ opacity: 0, y: 45 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: .2 }} 
                transition={{ delay: i * .12, duration: .7, ease: [.16, 1, .3, 1] }} 
                key={s.slug} 
                className={`sector-wrap ${s.color}`} 
                onClick={() => navigate(s.slug)}
              >
                <span className="sector-card">
                  <span className="card-top">
                    <span className="card-num">{s.number}</span>
                    <Icon size={19} className="card-icon" />
                  </span>
                  <span className="card-body">
                    <span className="card-title">{s.label}</span>
                    <p className="card-desc">{s.short}</p>
                  </span>
                  <span className="card-footer">
                    <span className="card-action">Learn more</span>
                    <ArrowUpRight size={16} className="card-arrow" />
                  </span>
                </span>
              </motion.button>
            )
          })}
        </div>
      </section>

      {/* Curated Mixed-Media Film-Strip Showcase */}
      <section className="home-gallery">
        <div className="home-gallery-heading">
          <h2>Gallery</h2>
          <div className="home-gallery-actions">
            <div className="filmstrip-controls" aria-label="Gallery navigation controls">
              <button
                type="button"
                className="filmstrip-nav-btn"
                onClick={() => scrollFilmstrip('left')}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="filmstrip-nav-btn"
                onClick={() => scrollFilmstrip('right')}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <Link className="home-link" to="/gallery">
              View all <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="home-filmstrip-wrapper">
          <div className="home-filmstrip-track" ref={trackRef} aria-label="Curated media film strip">
            {featuredMedia.map((item) => {
              if (item.type === 'video') {
                const video = item.data;
                return (
                  <div
                    key={item.id}
                    className="filmstrip-card filmstrip-video-card"
                    style={{ aspectRatio: video.aspectRatio || '9 / 16' }}
                    onClick={() => setSelectedVideo(video)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play video: ${video.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedVideo(video);
                      }
                    }}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      decoding="async"
                      className="filmstrip-thumb"
                    />
                    <div className="video-card-play-btn" aria-hidden="true">
                      <Play size={22} className="play-icon" />
                    </div>
                    <div className="video-card-overlay">
                      <p className="video-card-title">{video.title}</p>
                    </div>
                  </div>
                );
              }

              const image = item.data;
              return (
                <div
                  key={item.id}
                  className="filmstrip-card filmstrip-image-card"
                  style={{ aspectRatio: image.aspectRatio || '4 / 3' }}
                  onClick={() => setSelectedImage(image)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photograph: ${image.title || image.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImage(image);
                    }
                  }}
                >
                  <ImageCard
                    src={image.src}
                    alt={image.alt}
                    aspectRatio={image.aspectRatio}
                    className="filmstrip-image-card-inner"
                  >
                    <div className="gallery-item-overlay">
                      <div className="gallery-item-overlay-content">
                        <p className="gallery-item-title">{image.title || image.alt}</p>
                        <div className="gallery-item-zoom" aria-hidden="true">
                          <Maximize2 size={18} />
                        </div>
                      </div>
                    </div>
                  </ImageCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal Player (Loads YouTube iframe ONLY when active) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="gallery-lightbox-backdrop gallery-video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedVideo(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Video player modal"
          >
            <div className="gallery-lightbox-topbar" onClick={(e) => e.stopPropagation()}>
              <div className="gallery-lightbox-counter">Featured Video</div>
              <button
                type="button"
                className="gallery-lightbox-btn"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video player"
              >
                <X size={22} />
              </button>
            </div>

            <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="gallery-lightbox-media-wrapper">
                <div className="gallery-video-player-container is-short-player">
                  <iframe
                    key={selectedVideo.id}
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                    title={selectedVideo.title}
                    className="gallery-video-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="gallery-lightbox-bottombar">
                  <h2 className="gallery-lightbox-title">{selectedVideo.title}</h2>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview modal"
          >
            <div className="gallery-lightbox-topbar" onClick={(e) => e.stopPropagation()}>
              <div className="gallery-lightbox-counter">Featured Photograph</div>
              <button
                type="button"
                className="gallery-lightbox-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close photograph view"
              >
                <X size={22} />
              </button>
            </div>

            <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="gallery-lightbox-media-wrapper">
                <div className="gallery-lightbox-image-container">
                  <img
                    src={selectedImage.fullSrc || selectedImage.src}
                    alt={selectedImage.alt}
                    className="gallery-lightbox-image"
                  />
                </div>

                <div className="gallery-lightbox-bottombar">
                  <h2 className="gallery-lightbox-title">{selectedImage.title || selectedImage.alt}</h2>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="home-about home-why">
        <div className="home-about-content">
          <div className="home-section-heading">
            <div className="home-about-header">
              <h2>Why <BrandName />?</h2>
            </div>
            <div className="home-about-text">
              <p>
                What makes <BrandName /> unique is our integrated approach. We bridge human development, organizational excellence, professional learning, and digital innovation to deliver practical, evidence-based solutions that create lasting impact.
              </p>
              <p>
                Whether you are an individual, seeking personal growth, or an organization pursuing operational excellence, or an institution preparing for the future, we partner with you to achieve meaningful and sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
