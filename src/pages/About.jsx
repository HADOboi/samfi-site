import { Header, Footer, SocialDock } from "../components/Layout";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <main className="about-page">
      <Header />
      <SocialDock />

      <section className="page-hero">
        <div>
          <p className="eyebrow">ABOUT SAMFI</p>

          <h1>
            To empower
            <br />
            <em>your brain & business.</em>
          </h1>

          <p>
            SAMFI exists to help people and organisations think better,
            grow stronger and create lasting impact through consultancy,
            learning and technology.
          </p>
        </div>

        <div className="hero-mark" />
      </section>

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
              SAMFI is a multidisciplinary organisation focused on empowering
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
        <div className="page-visual-placeholder about-visual-placeholder">
          <span>IMAGE AREA</span>
          <strong>People, purpose and progress.</strong>
          <small>Suggested format: wide team, workshop or community photograph</small>
        </div>
      </section>

      <Footer />
    </main>
  );
}
