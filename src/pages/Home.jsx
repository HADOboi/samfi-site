import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, X } from 'lucide-react'
import { sectors } from '../data/sectors'
import { Header, Footer, SocialDock } from '../components/Layout'
import Reveal from '../components/Reveal'

const heroPlanets = [
  {
    label: "Management Consultancy",
    number: "01",
    path: "/consultancy",
    color: "var(--clay)",
    glow: "rgba(176, 93, 68, 0.25)",
    left: "66.5%",
    top: "78.6%",
    size: "10%"
  },
  {
    label: "Personal Empowerment",
    number: "02",
    path: "/empowerment",
    color: "var(--sage)",
    glow: "rgba(124, 145, 105, 0.25)",
    left: "11.7%",
    top: "82.1%",
    size: "14%"
  },
  {
    label: "Training & Development",
    number: "03",
    path: "/training",
    color: "var(--ochre)",
    glow: "rgba(191, 150, 64, 0.25)",
    left: "88.3%",
    top: "17.9%",
    size: "22%"
  },
  {
    label: "SAMFI Solutions",
    number: "04",
    path: "/solutions",
    color: "#61e4c5",
    glow: "rgba(97, 228, 197, 0.35)",
    left: "33.5%",
    top: "21.4%",
    size: "12%"
  }
];

export default function Home() {
  const [active, setActive] = useState(null);
  const sector = sectors.find(s => s.slug === active);
  const ModalIcon = sector?.icon;

  return (
    <main>
      <Header />
      <SocialDock />
      
      <section className="hero">
        <motion.div 
          className="hero-intro" 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: [.16, 1, .3, 1] }}
        >
          <h1>Clean what blocks.<br /><em>Elevate what moves.</em></h1>
          <a className="scroll-cue" href="#sectors">
            <span>Explore our services</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>
        
        <div className="hero-orbit">
          {heroPlanets.map((p) => (
            <Link
              key={p.number}
              to={p.path}
              className="hero-planet"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                '--glow-color': p.glow,
                '--planet-color': p.color
              }}
              aria-label={`${p.number} - ${p.label}`}
            >
              <span className="planet-dot" />
              <span className="planet-tooltip">
                <span className="tooltip-num">{p.number}</span>
                <span className="tooltip-text">{p.label}</span>
              </span>
            </Link>
          ))}
          <div className="orbit-inner-ring" />
          <div className="orbit-mid-ring" />
          <div className="orbit-outer-ring" />
          <div className="orbit-axis-h" />
          <div className="orbit-axis-v" />
        </div>
      </section>

      <section id="sectors" className="sectors">
        <div className="section-head">
          <p className="eyebrow">What SAMFI does</p>
          <p>Four ways to<br />clean and elevate.</p>
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
                onClick={() => setActive(s.slug)}
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

      <section className="manifesto">
        <Reveal>
          <p className="eyebrow">The SAMFI approach</p>
          <h2>Clear the noise.<br /><em>Raise the standard.</em></h2>
        </Reveal>
        <Reveal className="manifesto-copy">
          <p>“Clean and elevate” is our way of working: remove what prevents progress, then strengthen what helps people and organisations flourish.</p>
          <Link to="/empowerment">How we work <ArrowUpRight size={17} /></Link>
        </Reveal>
      </section>

      <section className="principles">
        <Reveal>
          <p className="eyebrow">Built around what lasts</p>
        </Reveal>
        <div>
          {[['01', 'Clarity before action'], ['02', 'Progress with proof'], ['03', 'Capability, not dependency']].map(([n, t]) => (
            <Reveal key={n} className="principle">
              <span>{n}</span>
              <h3>{t}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {sector && (
          <motion.div 
            className="sector-modal-backdrop" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setActive(null)}
          >
            <motion.article 
              className={`sector-modal ${sector.color}`} 
              initial={{ y: 35, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: 25, opacity: 0 }} 
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">
                <X size={18} />
              </button>
              
              <div className="modal-header-badge">
                <span className="modal-num">{sector.number}</span>
                <span className="modal-icon-container">
                  {ModalIcon && <ModalIcon size={20} />}
                </span>
              </div>

              <p className="eyebrow">{sector.label}</p>
              <h2>{sector.title}</h2>
              <p className="modal-preview">{sector.preview}</p>

              {sector.offerings && sector.offerings.length > 0 && (
                <div className="modal-offerings">
                  <h4>Core Offerings</h4>
                  <ul>
                    {sector.offerings.map((offering, idx) => (
                      <li key={idx}>
                        <span className="bullet">✦</span>
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-footer">
                <Link to={sector.slug} className="modal-link" onClick={() => setActive(null)}>
                  More details <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
