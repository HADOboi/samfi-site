import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { Header, Footer, SocialDock } from '../components/Layout'
import { renderBrandName } from '../components/BrandName'
import Reveal from '../components/Reveal'
import PersonalSolutions from './PersonalSolutions'
import BusinessSolutions from './BusinessSolutions'
import TrainingSolutions from './TrainingSolutions'
import DigitalSolutions from './DigitalSolutions'

const solutionDetails = [
  'Purposeful, fast websites that turn your story, service or platform into an experience people want to use.',
  'Native-feeling mobile experiences designed for the moments your customers are actually on the move.',
  'Robust, tailored systems that make your operations simpler, smarter and ready for what comes next.',
]

function SolutionsPage({ sector: s }) {
  return (
    <main className="solutions-page">
      <Header />
      <SocialDock />
      <motion.section
        className="solutions-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="solutions-copy">
          <p className="eyebrow">Digital Solutions</p>
          <h1>Technology that<br /><em>gets to work.</em></h1>
          <p>We design and build clear, capable digital products for businesses with real work to do.</p>
          <a className="solution-button" href="#services">
            Explore capabilities <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="code-window" aria-label="Product visual placeholder">
          <div className="window-bar">
            <i /><i /><i />
            <span>digital-solutions / product</span>
          </div>
          <div className="code-lines">
            <b>01</b><span>build for people,</span>
            <b>02</b><span>then scale with confidence.</span>
            <b>03</b><span className="code-accent">// your product placeholder</span>
          </div>
        </div>
      </motion.section>

      <section id="services" className="solution-services">
        <div className="solution-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>From first idea<br />to reliable release.</h2>
          <p>One focused technology team, shaped around your product and your goals.</p>
        </div>
        <div className="solution-grid">
          {s.offerings.map((o, i) => (
            <Reveal key={o} className="solution-card" delay={i * 0.1}>
              <span>0{i + 1}</span>
              <h3>{o}</h3>
              <p>{solutionDetails[i]}</p>
              <ArrowUpRight size={22} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="build-strip">
        <Reveal>
          <p className="eyebrow">What comes next</p>
          <h2>Your next useful<br /><em>thing starts here.</em></h2>
          <a className="solution-button" href="#contact">
            Start a project <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}

export default function SectorPage({ sector: s }) {
  if (s.slug === '/services/personal-solutions') return <PersonalSolutions />
  if (s.slug === '/services/business-solutions') return <BusinessSolutions />
  if (s.slug === '/services/training-solutions') return <TrainingSolutions />
  if (s.slug === '/services/digital-solutions') return <DigitalSolutions />
  if (s.template === 'solutions') return <SolutionsPage sector={s} />

  const Icon = s.icon

  return (
    <main className={`sector-page ${s.color}`}>
      <Header />
      <SocialDock />
      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <p className="eyebrow">{s.number} · {s.eyebrow}</p>
          <h1>{s.title}</h1>
          <p>{renderBrandName(s.description)}</p>
        </div>
        <div className="hero-mark">
          <Icon strokeWidth={1.15} />
        </div>
      </motion.section>

      <section className="sector-story">
        <Reveal className="sector-image-placeholder">
          <span>PORTRAIT / LANDSCAPE PLACEHOLDER</span>
          <strong>{s.imageLabel}</strong>
          <small>Suggested resolution: 16:9 · 1920x1080 px or 4:5 · 1200x1500 px</small>
        </Reveal>
        <Reveal className="story-copy" delay={0.15}>
          <p className="eyebrow">Clean and elevate</p>
          <h2>Space to see what matters.<br /><em>Support to move with confidence.</em></h2>
          <p>{s.preview}</p>
          <p>Our work is practical, respectful and designed around the people involved—not a one-size-fits-all process.</p>
        </Reveal>
      </section>

      <section className="offerings">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2>Built for your<br /><em>real context.</em></h2>
        </Reveal>
        <div>
          {s.offerings.map((o, i) => (
            <Reveal key={o} className="offering" delay={i * 0.1}>
              <span>0{i + 1}</span>
              <h3>{o}</h3>
              <Check size={19} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case-strip">
        <Reveal>
          <p className="eyebrow">A place for your story</p>
          <h2>What could change<br /><em>with the right support?</em></h2>
          <div className="case-image-placeholder">
            <span>LANDSCAPE PLACEHOLDER</span>
            <small>Wide 16:9 project or programme image (1920x1080 px)</small>
          </div>
          <a className="dark-button" href="#contact">
            Talk to our team <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
