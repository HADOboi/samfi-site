import { motion } from "framer-motion";
import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";
import { BrandName } from "../components/BrandName";

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
          <p className="eyebrow">ABOUT <BrandName /></p>

          <h1>
            To empower
            <br />
            <em>your brain & business.</em>
          </h1>

          <p>
            <BrandName /> exists to help people and organisations think better,
            grow stronger and create lasting impact through consultancy,
            learning and technology.
          </p>
        </div>

        <div className="hero-mark" />
      </motion.section>

      <section className="detail-intro">
        <Reveal>
          <p className="eyebrow">Who We Are</p>

          <h2>
            Building better
            <br />
            decisions.
          </h2>
        </Reveal>

        <Reveal>
          <div>
            <p>
              <BrandName /> is a multidisciplinary organisation focused on empowering
              individuals, professionals and businesses through strategic
              consultancy, practical training and innovative digital solutions.
            </p>

            <p>
              Every service we provide is guided by one purpose:
              <strong> to empower your brain & business.</strong>
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-visual-section">
        <Reveal className="page-visual-placeholder about-visual-placeholder">
          <span>IMAGE AREA</span>
          <strong>People, purpose and progress.</strong>
          <small>Suggested format: wide team, workshop or community photograph</small>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
