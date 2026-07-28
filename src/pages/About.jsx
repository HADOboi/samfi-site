import { motion } from "framer-motion";
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
import Reveal from "../components/Reveal";
import { BrandName } from "../components/BrandName";

const values = [
  ["Excellence", "High standards, thoughtful delivery, and continual improvement.", Sparkles],
  ["Integrity", "Honesty, confidentiality, and ethical practice in every relationship.", ShieldCheck],
  ["Innovation", "Creative, research-informed methods built for what comes next.", Lightbulb],
  ["Empowerment", "Helping people and organisations recognise strengths and act on them.", Target],
  ["Compassion", "Empathy, respect, and human dignity at the centre of our work.", HandHeart],
  ["Collaboration", "Lasting progress through partnership, teamwork, and shared purpose.", UsersRound],
  ["Lifelong Learning", "Curiosity, self-development, and adaptability in a changing world.", BookOpen],
  ["Social Responsibility", "A positive contribution to education, wellbeing, and responsible leadership.", UsersRound],
];

export default function About() {
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
          <p className="eyebrow">About <BrandName /></p>
          <h1 className="about-hero-title">About <em>Samfi</em></h1>
          <p>
            Samfi Global Academy is a multidisciplinary consulting and development
            organisation committed to transforming individuals, organisations, and
            communities through practical, integrated, and impactful solutions.
          </p>
        </div>
        <div className="hero-mark" aria-hidden="true"><Sparkles /></div>
      </motion.section>

      <section className="about-intro">
        <Reveal className="about-intro-heading">
          <p className="eyebrow">Who we are</p>
          <h2>
            Integrated solutions for<br />
            meaningful transformation.
          </h2>
        </Reveal>
        <Reveal className="about-intro-panel">
          <div className="about-intro-copy">
            <p>
              Samfi brings together <strong>Applied Psychology</strong>,
              <strong> Professional Mentoring</strong>, <strong>Leadership Development
              &amp; Training</strong>, <strong>Operational Excellence</strong>, and
              <strong> Future-Focused Digital Solutions</strong> to support growth
              that is human, capable, and sustainable.
            </p>
            <p>
              We believe meaningful transformation starts with people, then reaches
              organisations, communities, and technology. Every engagement is shaped
              to enhance performance, empower growth, and create lasting positive change.
            </p>
          </div>
          <div className="about-intro-pillars" aria-label="Our areas of focus">
            <span>People</span>
            <span>Organisations</span>
            <span>Communities</span>
            <span>Technology</span>
          </div>
        </Reveal>
      </section>

      <section className="about-vision-mission">
        <Reveal className="about-visual-placeholder page-visual-placeholder">
          <span>PLACEHOLDER IMAGE</span>
          <strong>Growth is never a solo journey.</strong>
          <small>Suggested image: an intergenerational group in a facilitated workshop</small>
        </Reveal>
        <div className="vision-mission-grid">
          <Reveal className="purpose-card purpose-card-vision">
            <p className="eyebrow">Our vision</p>
            <h2>A trusted global <em>Center of Excellence.</em></h2>
            <p>
              To become the globally trusted center for human development,
              organisational transformation, leadership mentoring and training,
              and digital innovation.
            </p>
          </Reveal>
          <Reveal className="purpose-card purpose-card-mission">
            <p className="eyebrow">Our mission</p>
            <h2>Potential, turned into purposeful progress.</h2>
            <p>
              We empower individuals, organisations, and communities to achieve
              their highest potential through knowledge, innovation, and leadership
              grounded in purpose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow">What guides us</p>
          <h2>Our core values</h2>
          <p>These principles shape how we listen, build, and show up for the people we serve.</p>
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

      <section className="about-affiliation">
        <div className="affiliation-copy">
          <Reveal>
            <p className="eyebrow">Our affiliation</p>
            <h2>Connected to credible learning.</h2>
          </Reveal>
          <Reveal>
            <p>
              <strong><BrandName /> Global Academy</strong> is proudly affiliated with
              <strong> IGNET (Indira Gandhi National Education Trust)</strong>, an ISO 9001:2015-certified
              national development agency and autonomous HRD educational organisation
              registered under the <strong>Government of India</strong>.
            </p>
            <p>
              Since 2004, IGNET has supported skill education, professional
              development, research, and industry-oriented learning. The affiliation
              strengthens our commitment to credible, practical, and future-ready
              opportunities for learners, institutions, businesses, and communities.
            </p>
          </Reveal>
        </div>
        <Reveal className="affiliation-visual">
          <span>PARTNERSHIP PLACEHOLDER</span>
          <strong>Education with<br />real-world relevance.</strong>
          <small>Suggested image: learners collaborating in a modern classroom</small>
        </Reveal>
      </section>

      <section className="about-team">
        <Reveal className="team-visual">
          <span>TEAM PLACEHOLDER</span>
          <strong>Many disciplines.<br />One shared standard.</strong>
          <small>Suggested image: the Samfi team or a multidisciplinary working session</small>
        </Reveal>
        <div className="team-copy">
          <Reveal>
            <p className="eyebrow">Our team</p>
            <h2>Built for the whole picture.</h2>
          </Reveal>
          <Reveal>
            <p>
              Our multidisciplinary team includes operations specialists, applied
              psychologists, medical professionals, leadership mentors, educators,
              and IT experts from premier institutions and leading universities.
            </p>
            <p>
              Together, we combine evidence, experience, and ethical practice to
              create solutions that are grounded, useful, and made to last.
            </p>
            <a className="outline-button" href="mailto:samfiglobal@gmail.com">
              Work with us <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
