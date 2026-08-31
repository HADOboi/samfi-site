import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Compass,
  Cpu,
  Flame,
  Network,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";
import ImageCard from "../components/ImageCard";
import { BrandName } from "../components/BrandName";
import { ServicePlanet } from "../components/ServicePlanet";
import { galleryImages } from "../data/gallery";

const services = [
  {
    title: "Business & Management Consultancy",
    description: "Strategic counsel to identify growth opportunities, solve complex operational challenges, and navigate market shifts.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Organizational Development",
    description: "Structuring teams, clarifying roles, and designing organizational architectures for long-term scalability and agility.",
    icon: Network,
  },
  {
    title: "Operational Excellence & Process Improvement",
    description: "Applying lean principles, quality benchmarks, and operational standards to maximize output and value creation.",
    icon: TrendingUp,
  },
  {
    title: "Business Process Optimization",
    description: "Re-engineering core workflows, eliminating operational waste, and optimizing resource allocation across departments.",
    icon: Cpu,
  },
  {
    title: "Leadership Consulting",
    description: "Developing executive capability, visionary leadership, and sound decision-making frameworks for leadership teams.",
    icon: Compass,
  },
  {
    title: "HR Strategy & Workforce Development",
    description: "Designing talent acquisition, retention, workforce capability building, and succession planning frameworks.",
    icon: UsersRound,
  },
  {
    title: "Performance Management Systems",
    description: "Building data-driven performance metrics, evaluation models, key performance indicators (KPIs), and accountability structures.",
    icon: Target,
  },
  {
    title: "Change Management",
    description: "Managing organizational transitions seamlessly while maintaining employee morale, trust, and business continuity.",
    icon: RefreshCw,
  },
  {
    title: "Quality & Continuous Improvement",
    description: "Establishing total quality management (TQM) protocols, regulatory compliance, and sustainable operational standards.",
    icon: ShieldCheck,
  },
  {
    title: "Organizational Culture Transformation",
    description: "Cultivating high-trust, high-performance, and resilient workplace cultures that empower teams and attract top talent.",
    icon: Flame,
  },
];

export default function BusinessSolutions() {
  return (
    <main className="about-page sector-page clay">
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
          <p className="eyebrow">Business Solutions</p>
          <h1 className="about-hero-title">
            Driving Organizational Excellence Through Strategy, People, and Performance
          </h1>
          <p>
            We help organizations improve performance by optimizing people, processes, and systems. Our Business Solutions combine operational excellence, strategic consulting, leadership development, and organizational psychology to build high-performing, future-ready organizations.
          </p>
          <p>
            Our solutions are practical, measurable, and tailored to meet the unique needs of businesses across industries.
          </p>
        </div>
        <div className="about-hero-image-wrap">
          <ServicePlanet
            color="var(--clay)"
            glow="rgba(176, 93, 68, 0.35)"
            name="Business Solutions"
          />
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <section className="about-purpose-section about-vision">
        <div className="about-purpose-container">
          <Reveal className="purpose-card purpose-card-vision">
            <p className="eyebrow">Our Philosophy</p>
            <h2>Strategy with substance. <em>Execution with impact.</em></h2>
            <p>
              <BrandName /> works alongside business leaders to turn complex questions into clear choices, shared direction, and executable plans. We bridge strategy, structure, delivery, and culture to build resilient, high-trust organizations.
            </p>
          </Reveal>
          <Reveal className="about-visual-card">
            <ImageCard
              src={galleryImages[5].src}
              alt="SAMFI Enterprise Solutions Architecture and Strategy Briefing"
              aspectRatio="16 / 9"
              className="about-purpose-image"
            >
              <div className="about-image-overlay">
                <strong>Connecting vision with operational excellence.</strong>
              </div>
            </ImageCard>
          </Reveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow">Our Services Include</p>
          <h2>Comprehensive Business Solutions</h2>
          <p>
            Practical, measurable, and tailored services to optimize leadership, process efficiency, and organizational growth.
          </p>
        </div>
        <div className="values-grid">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <Reveal className="value-card" delay={index * 0.04} key={s.title}>
                <span className="value-number">{index < 9 ? `0${index + 1}` : index + 1}</span>
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
