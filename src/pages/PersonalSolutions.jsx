import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Compass,
  Eye,
  HeartHandshake,
  Sun,
  Target,
  Zap,
  Sparkles,
} from "lucide-react";
import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";
import ImageCard from "../components/ImageCard";
import { BrandName } from "../components/BrandName";
import { ServicePlanet } from "../components/ServicePlanet";
import { galleryImages } from "../data/gallery";

const services = [
  {
    title: "Professional Mentoring & Coaching",
    description: "Tailored one-on-one guidance to navigate career milestones, build leadership clarity, and achieve long-term personal goals.",
    icon: Compass,
  },
  {
    title: "Applied Psychology & Behavioural Development",
    description: "Evidence-based psychological frameworks to understand behavior patterns, resolve mental blocks, and foster positive habits.",
    icon: Brain,
  },
  {
    title: "Emotional Intelligence Development",
    description: "Building deep self-awareness, emotional regulation, empathy, and constructive interpersonal skills for daily life and work.",
    icon: Eye,
  },
  {
    title: "Career Guidance & Career Transition Support",
    description: "Strategic career direction, skills assessment, and pathway navigation for professional advancement and seamless transitions.",
    icon: Target,
  },
  {
    title: "Leadership & Personality Development",
    description: "Cultivating executive presence, self-confidence, authentic expression, and personal leadership capability.",
    icon: Award,
  },
  {
    title: "Family & Relationship Guidance",
    description: "Constructive communication strategies and interpersonal guidance to foster healthy, fulfilling relationships and family harmony.",
    icon: HeartHandshake,
  },
  {
    title: "Stress Management & Well-being",
    description: "Practical stress-reduction tools, burnout prevention strategies, and holistic mental well-being practices.",
    icon: Sun,
  },
  {
    title: "Personal Performance Enhancement",
    description: "Focus enhancement, goal alignment techniques, and actionable strategies to maximize daily productivity.",
    icon: Zap,
  },
  {
    title: "Therapeutic Hypnosis & Mind Performance",
    description: "Advanced mind-training techniques and therapeutic hypnosis to align subconscious patterns with personal excellence.",
    icon: Sparkles,
  },
];

export default function PersonalSolutions() {
  return (
    <main className="about-page sector-page sage">
      <Header />
      <SocialDock />

      {/* Hero Section */}
      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <p className="eyebrow">Personal Solutions</p>
          <h1 className="about-hero-title">
            Empowering Individuals to Unlock Their Full Potential
          </h1>
          <p>
            Personal growth begins with understanding yourself. Our Personal Solutions are designed to help individuals overcome challenges, develop essential life skills, and achieve personal and professional success through evidence-based approaches.
          </p>
          <p>
            We provide practical guidance, mentoring, and psychological interventions that strengthen confidence, resilience, emotional intelligence, and overall well-being.
          </p>
        </div>
        <div className="about-hero-image-wrap">
          <ServicePlanet
            color="var(--sage)"
            glow="rgba(124, 145, 105, 0.35)"
            name="Personal Solutions"
          />
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <section className="about-purpose-section about-vision">
        <div className="about-purpose-container">
          <Reveal className="purpose-card purpose-card-vision">
            <p className="eyebrow">Our Philosophy</p>
            <h2>Clean the noise. <em>Elevate the person.</em></h2>
            <p>
              Personal growth is not about pushing harder. <BrandName /> creates a considered, confidential space to recognize what is getting in the way, clear the mental noise, and build the self-awareness and agency needed to move forward with confidence.
            </p>
          </Reveal>
          <Reveal className="about-visual-card">
            <ImageCard
              src={galleryImages[1].src}
              alt="SAMFI Leadership Cohort and Collaborative Session"
              aspectRatio="16 / 9"
              className="about-purpose-image"
            >
              <div className="about-image-overlay">
                <strong>Grounded, capable, and purpose-driven growth.</strong>
              </div>
            </ImageCard>
          </Reveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow">Our Services Include</p>
          <h2>Tailored Personal Development</h2>
          <p>
            Evidence-based interventions designed to cultivate clarity, confidence, resilience, and personal performance.
          </p>
        </div>
        <div className="values-grid">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <Reveal className="value-card" delay={index * 0.04} key={s.title}>
                <span className="value-number">0{index + 1}</span>
                <Icon aria-hidden="true" size={24} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
