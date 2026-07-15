import { motion } from "framer-motion";
import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";

export default function Gallery() {
  return (
    <main className="gallery-page">
      <Header />
      <SocialDock />

      <motion.section
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <p className="eyebrow">GALLERY</p>

          <h1>
            Our work.
            <br />
            <em>Our journey.</em>
          </h1>

          <p>
            A collection of our projects, events, workshops and milestones.
            This gallery will continue to grow as SAMFI grows.
          </p>
        </div>

        <div className="hero-mark" />
      </motion.section>

      <section className="detail-intro">
        <Reveal>
          <p className="eyebrow">Coming Soon</p>

          <h2>
            Photos.
            <br />
            Videos.
            <br />
            Stories.
          </h2>
        </Reveal>

        <Reveal>
          <div>
            <p>
              This page will showcase our workshops, consultancy sessions,
              community initiatives and digital projects through carefully
              curated photos and videos.
            </p>

            <p>
              New content will be added as our journey continues.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-visual-section">
        <Reveal className="page-visual-placeholder gallery-visual-placeholder">
          <span>GALLERY PREVIEW</span>
          <strong>Your next story starts here.</strong>
          <small>Suggested format: wide event, project or workshop photograph</small>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
