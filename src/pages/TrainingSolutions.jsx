import { motion } from "framer-motion";
import {
  BookOpen,
  Building,
  Clock,
  GraduationCap,
  Heart,
  Layers,
  MessageSquare,
  School,
  Shield,
  ThumbsUp,
  UserPlus,
  Users,
} from "lucide-react";
import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";
import ImageCard from "../components/ImageCard";
import { BrandName } from "../components/BrandName";
import { ServicePlanet } from "../components/ServicePlanet";
import { galleryImages } from "../data/gallery";

const services = [
  {
    title: "Leadership Development",
    description: "Executive workshops and leadership immersion programs designed to cultivate decisive, inspirational, and empathetic leaders.",
    icon: GraduationCap,
  },
  {
    title: "Professional Skills Development",
    description: "Core workplace competencies, critical thinking, analytical problem-solving, and professional workplace etiquette.",
    icon: BookOpen,
  },
  {
    title: "Supervisory & Management Training",
    description: "Practical toolkits and management essentials for first-time managers, department heads, and operational supervisors.",
    icon: Layers,
  },
  {
    title: "Emotional Intelligence at Work",
    description: "Fostering workplace empathy, constructive conflict resolution, emotional regulation, and positive team dynamics.",
    icon: Heart,
  },
  {
    title: "Communication & Interpersonal Skills",
    description: "Mastering high-impact verbal, written, presentation, cross-cultural, and stakeholder communication.",
    icon: MessageSquare,
  },
  {
    title: "Team Building",
    description: "Interactive workshops and experiential exercises designed to strengthen workplace cohesion, trust, and collaboration.",
    icon: Users,
  },
  {
    title: "Customer Service Excellence",
    description: "Elevating customer touchpoints, satisfaction standards, service delivery excellence, and client-first mindsets.",
    icon: ThumbsUp,
  },
  {
    title: "Workplace Ethics & Professionalism",
    description: "Instilling organizational integrity, compliance standards, ethical decision-making, and professional conduct.",
    icon: Shield,
  },
  {
    title: "Time & Productivity Management",
    description: "Actionable prioritization frameworks, focus strategies, task optimization, and workflow management for individuals and teams.",
    icon: Clock,
  },
  {
    title: "Train-the-Trainer Programs",
    description: "Empowering internal facilitators with adult learning methodologies, instructional design, and compelling delivery techniques.",
    icon: UserPlus,
  },
  {
    title: "Educational Institution Development",
    description: "Institutional capacity building, quality assurance, curriculum development, and strategic alignment for schools and colleges.",
    icon: Building,
  },
  {
    title: "School Leadership & Teacher Mentoring",
    description: "Specialized mentoring programs and pedagogical training to empower academic leaders, principals, and educators.",
    icon: School,
  },
];

export default function TrainingSolutions() {
  return (
    <main className="about-page sector-page ochre">
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
          <p className="eyebrow">Training Solutions</p>
          <h1 className="about-hero-title">
            Building Knowledge, Skills, and Leadership for Sustainable Success
          </h1>
          <p>
            Learning is the foundation of growth. We design and deliver engaging, practical, and outcome-focused training programs that enhance professional competence, leadership capability, workplace effectiveness, and organizational performance.
          </p>
          <p>
            Our programs are customized for educational institutions, healthcare institutions, businesses, government organizations, and community groups.
          </p>
        </div>
        <div className="about-hero-image-wrap">
          <ServicePlanet
            color="var(--ochre)"
            glow="rgba(191, 150, 64, 0.35)"
            name="Training Solutions"
          />
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <section className="about-purpose-section about-vision">
        <div className="about-purpose-container">
          <Reveal className="purpose-card purpose-card-vision">
            <p className="eyebrow">Our Philosophy</p>
            <h2>Learning that makes <em>a real difference.</em></h2>
            <p>
              From classrooms to corporate boardrooms, <BrandName /> brings expert learning design, interactive methodologies, and real-world relevance together. Every program is shaped around real people, real context, and measurable improvement.
            </p>
          </Reveal>
          <Reveal className="about-visual-card">
            <ImageCard
              src={galleryImages[0].src}
              alt="SAMFI Executive Training and Engagement Workshop"
              aspectRatio="16 / 9"
              className="about-purpose-image"
            >
              <div className="about-image-overlay">
                <strong>Capability that lifts the whole organization.</strong>
              </div>
            </ImageCard>
          </Reveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow">Our Training Areas Include</p>
          <h2>Comprehensive Capability & Training Programs</h2>
          <p>
            Customized learning experiences designed to elevate skills, workplace effectiveness, and institutional leadership.
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
