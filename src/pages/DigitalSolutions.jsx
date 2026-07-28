import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  Workflow,
  GraduationCap,
  Sparkles,
  Palette,
  Zap,
  Compass,
} from "lucide-react";
import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";
import { BrandName } from "../components/BrandName";
import { ServicePlanet } from "../components/ServicePlanet";

const services = [
  {
    title: "Website Design and Development",
    description: "Purposeful, responsive, and performance-optimized websites that articulate your brand story and convert visitors into active clients.",
    icon: Globe,
  },
  {
    title: "Mobile and Web Applications Development",
    description: "Native and cross-platform mobile and web applications built with modern frameworks for seamless, high-engagement user experiences.",
    icon: Smartphone,
  },
  {
    title: "Custom Software Development",
    description: "Tailored software systems engineered to solve operational bottlenecks, streamline core workflows, and support long-term organizational scale.",
    icon: Code,
  },
  {
    title: "Business Automation Solutions",
    description: "Automating repetitive processes, integrating software platforms, and reducing manual effort to maximize operational efficiency.",
    icon: Workflow,
  },
  {
    title: "Learning Management Systems (LMS)",
    description: "Interactive, scalable LMS platforms designed for educational institutions and corporate learning environments to track, deliver, and elevate education.",
    icon: GraduationCap,
  },
  {
    title: "AI-Powered Productivity Solutions",
    description: "Leveraging smart AI integrations, predictive workflows, and automated decision-support tools to supercharge team productivity.",
    icon: Sparkles,
  },
  {
    title: "Branding and Digital Identity",
    description: "Crafting cohesive visual brand identities, design systems, UI/UX aesthetics, and digital touchpoints that command trust and clarity.",
    icon: Palette,
  },
  {
    title: "Digital Transformation Consulting",
    description: "Strategic guidance to transition legacy operations, adopt modern cloud infrastructures, and cultivate a digital-first organization.",
    icon: Zap,
  },
  {
    title: "Technology Advisory Services",
    description: "Independent IT architecture auditing, tech stack evaluation, security assessment, and long-term digital roadmap planning.",
    icon: Compass,
  },
];

export default function DigitalSolutions() {
  return (
    <main className="about-page sector-page slate">
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
          <p className="eyebrow">Digital Solutions</p>
          <h1 className="about-hero-title">
            Transforming Ideas into Innovative Digital Experiences
          </h1>
          <p>
            Technology is a powerful enabler of development. Our Digital Solutions help individuals and organizations embrace digital transformation through innovative, user-focused, and scalable technology solutions.
          </p>
          <p>
            From digital presence to intelligent business solutions, we help clients leverage technology to improve efficiency, visibility, and long-term success.
          </p>
        </div>
        <div className="about-hero-image-wrap">
          <ServicePlanet
            color="#61e4c5"
            glow="rgba(97, 228, 197, 0.35)"
            name="Digital Solutions"
          />
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <section className="about-purpose-section about-vision">
        <div className="about-purpose-container">
          <Reveal className="purpose-card purpose-card-vision">
            <p className="eyebrow">Our Philosophy</p>
            <h2>User-centered design. <em>Scalable execution.</em></h2>
            <p>
              Technology should be an accelerator, not a barrier. <BrandName /> combines strategic clarity, sleek design, and robust architecture to deliver digital products that make an immediate impact and scale effortlessly over time.
            </p>
          </Reveal>
          <Reveal className="about-visual-placeholder page-visual-placeholder landscape-placeholder">
            <span>LANDSCAPE PLACEHOLDER</span>
            <strong>Connecting human intent with digital capability.</strong>
            <small>Suggested resolution: 16:9 · 1920x1080 px (Digital transformation & software development)</small>
          </Reveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow">Our Services Include</p>
          <h2>End-to-End Digital Capability</h2>
          <p>
            From web platforms and bespoke apps to business automation and AI integrations, we deliver modern technology tailored for growth.
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
