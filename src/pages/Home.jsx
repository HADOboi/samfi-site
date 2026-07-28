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
    size: "22%"
  },
  "/services/business-solutions": {
    color: "var(--clay)",
    glow: "rgba(176, 93, 68, 0.25)",
    left: "66.5%",
    top: "78.6%",
    size: "17%"
  },
  "/services/training-solutions": {
    color: "var(--ochre)",
    glow: "rgba(191, 150, 64, 0.25)",
    left: "88.3%",
    top: "17.9%",
    size: "14%"
  },
  "/services/digital-solutions": {
    color: "#61e4c5",
    glow: "rgba(97, 228, 197, 0.35)",
    left: "33.5%",
    top: "21.4%",
    size: "10%"
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
          <div className="orbit-inner-ring" />
          <div className="orbit-mid-ring" />
          <div className="orbit-outer-ring" />
          <div className="orbit-axis-h" />
          <div className="orbit-axis-v" />
          <img className="orbit-logo" src={goldLogo} alt="Samfi" />
        </div>
      </section>

      <section className="home-about">
        <div className="home-section-copy home-section-heading">
          <h2>About us</h2>
          <p className="section-tagline">
            <BrandName /> helps people and organisations clear the noise, build
            capability and move forward with purpose — bringing consultancy,
            learning and digital solutions together into practical, lasting
            change.
          </p>
          <Link className="home-link" to="/about">Read more <ArrowUpRight size={17} /></Link>
        </div>
        <div className="vm-grid">
          <motion.div
            className="vm-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow">Our Vision</p>
            <h3>Vision statement</h3>
            <p>
              Placeholder — the vision statement will be provided by the client.
              This space describes the future <BrandName /> is working towards
              and the change it hopes to create.
            </p>
          </motion.div>
          <motion.div
            className="vm-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow">Our Mission</p>
            <h3>Mission statement</h3>
            <p>
              Placeholder — the mission statement will be provided by the
              client. This space describes how <BrandName /> delivers on that
              vision through its everyday work.
            </p>
          </motion.div>
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

      <Footer />
    </main>
  )
}
