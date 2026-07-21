import { motion } from "framer-motion";
import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";
import { BrandName } from "../components/BrandName";

const gallerySections = [
  ["01", "Images", "A visual record of our workshops, projects, events and the people behind the work.", "gallery-images"],
  ["02", "Videos", "Stories, conversations and ideas brought to life through motion.", "gallery-videos"],
  ["03", "Testimonials", "Words from the people and organisations who have shared the journey with us.", "gallery-testimonials"],
];

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
            This gallery will continue to grow as <BrandName /> grows.
          </p>
        </div>

        <div className="hero-mark" />
      </motion.section>

      <section className="gallery-collections" aria-label="Gallery collections">
        {gallerySections.map(([number, label, description, className], index) => (
          <Reveal className={`gallery-collection ${className}`} delay={index * 0.08} key={label}>
            <div className="gallery-collection-copy">
              <p className="eyebrow">{number} · Collection</p>
              <h2>{label}</h2>
              <p>{description}</p>
            </div>
            <div className="gallery-collection-preview" aria-label={`${label} preview`}>
              <span>{label} collection</span>
              <strong>{label === "Testimonials" ? "Shared experiences, in their own words." : "New stories coming soon."}</strong>
            </div>
          </Reveal>
        ))}
      </section>

      <Footer />
    </main>
  );
}
