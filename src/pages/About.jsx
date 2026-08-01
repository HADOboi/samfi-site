import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  ArrowUpRight,
  BookOpen,
  HandHeart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { Header, Footer, SocialDock } from "../components/Layout";
import ImageCard from "../components/ImageCard";
import Reveal from "../components/Reveal";
import { BrandName } from "../components/BrandName";
import logo from "../assets/samfi-gold-head-logo.png";
import ignetseal from "../assets/ignet-seal.png";
import isoseal from "../assets/iso-seal.png";
import ignetCertification from "../assets/ignet-certification.png";

const values = [
  [
    "Excellence",
    "High standards, thoughtful delivery, and continual improvement.",
    Sparkles,
  ],
  [
    "Integrity",
    "Honesty, confidentiality, and ethical practice in every relationship.",
    ShieldCheck,
  ],
  [
    "Innovation",
    "Creative, research-informed methods built for what comes next.",
    Lightbulb,
  ],
  [
    "Empowerment",
    "Helping people and organisations recognise strengths and act on them.",
    Target,
  ],
  [
    "Compassion",
    "Empathy, respect, and human dignity at the centre of our work.",
    HandHeart,
  ],
  [
    "Collaboration",
    "Lasting progress through partnership, teamwork, and shared purpose.",
    UsersRound,
  ],
  [
    "Lifelong Learning",
    "Curiosity, self-development, and adaptability in a changing world.",
    BookOpen,
  ],
  [
    "Social Responsibility",
    "A positive contribution to education, wellbeing, and responsible leadership.",
    UsersRound,
  ],
];

export default function About() {
  const { hash } = useLocation();
  const lenis = useLenis();

  const scrollToContact = (event) => {
    event.preventDefault();
    const target = document.querySelector("#contact .contact-card");
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1.2,
        offset: (target.offsetHeight - window.innerHeight) / 2,
      });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    if (hash) {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="about-page">
      <Header />
      <SocialDock />

      <motion.section
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <h1 className="about-hero-title">
            About <BrandName />
          </h1>
          <p>
            <BrandName /> Global Academy is a multidisciplinary consulting and
            development organization committed to transforming individuals,
            organisations, and communities through the integration of Applied
            Psychology, Professional Mentoring, Leadership Development &amp;
            Trainings, Operational Excellence, and Future-Focused Digital
            Solutions.
          </p>
          <p>
            We - at <BrandName /> - believe that meaningful transformation
            begins with people and extends to organizations, communities, and
            the world of technology by delivering practical, integrated, and
            impactful solutions that empower growth, enhance performance, and
            create long lasting positive change.
          </p>
        </div>
        <div className="about-hero-image-wrap">
          <img src={logo} alt="Samfi Logo" className="about-hero-logo" />
        </div>
      </motion.section>

      <section id="vision" className="about-purpose-section about-vision">
        <div className="about-purpose-container">
          <Reveal className="purpose-card purpose-card-vision">
            <p className="eyebrow">Our vision</p>
            <h2>
              A trusted global <em>Center of Excellence.</em>
            </h2>
            <p>
              To become the globally trusted center for human development,
              organisational transformation, leadership mentoring, training
              and digital innovation.
            </p>
          </Reveal>
          <Reveal className="about-visual-placeholder page-visual-placeholder landscape-placeholder">
            <span>LANDSCAPE PLACEHOLDER</span>
            <strong>Growth is never a solo journey.</strong>
            <small>
              Suggested resolution: 16:9 · 1920x1080 px (Intergenerational
              workshop)
            </small>
          </Reveal>
        </div>
      </section>

      <section id="mission" className="about-purpose-section about-mission">
        <div className="about-purpose-container reverse">
          <Reveal className="about-visual-placeholder page-visual-placeholder landscape-placeholder">
            <span>LANDSCAPE PLACEHOLDER</span>
            <strong>Potential, turned into purposeful progress.</strong>
            <small>
              Suggested resolution: 16:9 · 1920x1080 px (Collaborative strategy
              session)
            </small>
          </Reveal>
          <Reveal className="purpose-card purpose-card-mission">
            <p className="eyebrow">Our mission</p>
            <h2>Empowerment grounded in purpose.</h2>
            <p>
              We empower individuals, organisations, and communities to achieve
              their highest potential through knowledge, innovation, and
              leadership grounded in purpose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow">What guides us</p>
          <h2>Our core values</h2>
          <p>
            These principles shape how we listen, build, and show up for the
            people we serve.
          </p>
        </div>
        <div className="values-grid">
          {values.map(([title, description, Icon], index) => (
            <Reveal className="value-card" delay={index * 0.04} key={title}>
              <span className="value-number">0{index + 1}</span>
              <Icon aria-hidden="true" size={22} />
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="affiliation" className="about-affiliation">
        <div className="affiliation-copy">
          <Reveal>
            <p className="eyebrow">Our affiliation</p>
            <h2>Connected to credible learning.</h2>
          </Reveal>
          <Reveal>
            <p>
              <strong>
                <BrandName /> Global Academy
              </strong>{" "}
              is proudly affiliated with
              <strong> IGNET (Indira Gandhi National Education Trust)</strong>,
              an ISO 9001:2015-certified national development agency and
              autonomous HRD educational organisation registered under the{" "}
              <strong>Government of India</strong>.
            </p>
            <p>
              Since 2004, IGNET has supported skill education, professional
              development, research, and industry-oriented learning. The
              affiliation strengthens our commitment to credible, practical, and
              future-ready opportunities for learners, institutions, businesses,
              and communities.
            </p>
          </Reveal>
          <Reveal className="affiliation-stamps-container">
            <div className="affiliation-stamps">
              <img
                src={ignetseal}
                alt="IGNET Seal"
                className="affiliation-stamp"
              />

              <img
                src={isoseal}
                alt="ISO 9001:2015 Certification"
                className="affiliation-stamp"
              />
            </div>
          </Reveal>
        </div>
        <Reveal className="certification-visual">
          <ImageCard
            src={ignetCertification}
            alt="IGNET certification"
          />
        </Reveal>
      </section>

      <section className="about-team">
        <Reveal className="team-visual page-visual-placeholder landscape-placeholder">
          <span>LANDSCAPE PLACEHOLDER</span>
          <strong>
            Many disciplines.
            <br />
            One shared standard.
          </strong>
          <small>
            Suggested resolution: 16:9 · 1920x1080 px (Multidisciplinary working
            session)
          </small>
        </Reveal>
        <div className="team-copy">
          <Reveal>
            <p className="eyebrow">Our team</p>
            <h2>Built for the whole picture.</h2>
          </Reveal>
          <Reveal>
            <p>
              Our multidisciplinary team includes operations specialists,
              applied psychologists, medical professionals, leadership mentors,
              educators, and IT experts from premier institutions and leading
              universities.
            </p>
            <p>
              Together, we combine evidence, experience, and ethical practice to
              create solutions that are grounded, useful, and made to last.
            </p>
            <a
              className="outline-button"
              href="#contact"
              onClick={scrollToContact}
            >
              Work with us <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
