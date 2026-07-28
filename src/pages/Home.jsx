import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { sectors } from '../data/sectors'
import { Header, Footer, SocialDock } from '../components/Layout'
import { BrandName } from '../components/BrandName'
import goldLogo from '../assets/samfi-gold-logo.png'

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

export default function Home() {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const galleryItems = [
    ['Image', 'People, purpose and progress'], ['Video', 'Ideas in motion'],
    ['Image', 'Learning in action'], ['Video', 'Stories worth sharing'],
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    const loopWidth = () => carousel.scrollWidth / 3;
    const keepInLoop = () => {
      const width = loopWidth();
      if (carousel.scrollLeft >= width * 2) carousel.scrollLeft -= width;
      if (carousel.scrollLeft <= 0) carousel.scrollLeft += width;
    };
    const advance = () => {
      if (dragging) return;
      const slide = carousel.querySelector('.gallery-slide');
      const step = slide ? slide.offsetWidth + 20 : 0;
      const width = loopWidth();
      if (carousel.scrollLeft + step >= width * 2) carousel.scrollLeft -= width;
      carousel.scrollBy({ left: step, behavior: 'smooth' });
    };
    const onPointerDown = (event) => {
      dragging = true; startX = event.clientX; startScroll = carousel.scrollLeft;
      carousel.setPointerCapture(event.pointerId); carousel.classList.add('is-dragging');
    };
    const onPointerMove = (event) => {
      if (!dragging) return;
      carousel.scrollLeft = startScroll - (event.clientX - startX); keepInLoop();
    };
    const onPointerUp = (event) => {
      dragging = false; carousel.releasePointerCapture?.(event.pointerId); carousel.classList.remove('is-dragging');
    };
    carousel.scrollLeft = loopWidth();
    const timer = window.setInterval(advance, 5000);
    carousel.addEventListener('pointerdown', onPointerDown);
    carousel.addEventListener('pointermove', onPointerMove);
    carousel.addEventListener('pointerup', onPointerUp);
    carousel.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.clearInterval(timer);
      carousel.removeEventListener('pointerdown', onPointerDown);
      carousel.removeEventListener('pointermove', onPointerMove);
      carousel.removeEventListener('pointerup', onPointerUp);
      carousel.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

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

      <section className="home-gallery">
        <div className="home-gallery-heading">
          <div>
            <h2>Gallery</h2>
            <p className="section-tagline">Moments that move us forward.</p>
          </div>
          <Link className="home-link" to="/gallery">Show more <ArrowUpRight size={17} /></Link>
        </div>
        <div className="gallery-carousel" ref={carouselRef} aria-label="Gallery preview">
          {[...galleryItems, ...galleryItems, ...galleryItems].map(([type, title], index) => (
            <article className={`gallery-slide gallery-slide-${(index % galleryItems.length) + 1}`} key={`${title}-${index}`}>
              <span>{type} · 0{index + 1}</span>
              {type === 'Video' && <i className="gallery-play">▶</i>}
              <strong>{title}</strong>
            </article>
          ))}
        </div>
      </section>

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
