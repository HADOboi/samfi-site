import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUp, ArrowUpRight, Menu, Share2, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import blacklogo from "../assets/samfi-black-logo.png";
import { BrandName } from "./BrandName";
import { sectors } from "../data/sectors";

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { pathname } = useLocation();
  const lenis = useLenis();

  const navigate = useNavigate();

  const navigateHome = () => {
    setOpen(false);

    if (pathname === "/") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1 });
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }

    navigate("/");
  };

  const navigateToContact = (event) => {
    event.preventDefault();
    setOpen(false);
    const target = document.getElementById("contact");
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`site-header ${compact ? "compact" : ""} ${open ? "menu-open" : ""}`}
    >
      <div className="header-container">
        <Link
          className="brand-logo"
          to="/"
          onClick={(event) => {
            event.preventDefault();
            navigateHome();
          }}
          aria-label="SAMFI home"
        >
          <img src={blacklogo} alt="SAMFI — to empower your brain and business" />
        </Link>

        <nav className={`header-nav ${open ? "open" : ""}`}>
          <button
            type="button"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
            onClick={(e) => {
              setOpen(false);
              navigateHome(e);
            }}
          >
            Home
          </button>

          <Link
            to="/about"
            className={pathname === "/about" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>

          <div className="nav-services has-dropdown">
            <Link
              to="/#services"
              className="nav-services-trigger"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <ul className="nav-dropdown">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.slug}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/gallery"
            className={pathname === "/gallery" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Gallery
          </Link>

          <a
            className="nav-contact mobile-only-contact"
            href="#contact"
            onClick={(e) => {
              setOpen(false);
              navigateToContact(e);
            }}
          >
            Contact <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="nav-contact desktop-only-contact"
            href="#contact"
            onClick={(e) => {
              setOpen(false);
              navigateToContact(e);
            }}
          >
            Contact <ArrowUpRight size={15} />
          </a>
          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function SocialDock() {
  const [open, setOpen] = useState(false);
  const dockRef = useRef(null);
  const { pathname } = useLocation();

  const socialLinks = [
    ["YouTube", FaYoutube, "https://youtube.com/@samfiglobal"],
    ["Instagram", FaInstagram, "https://instagram.com/samfiglobal"],
    ["Facebook", FaFacebookF, "https://facebook.com/samfiglobal"],
    ["X", FaXTwitter, "https://x.com/SamfiGlobal"],
    ["LinkedIn", FaLinkedinIn, "https://linkedin.com/in/samfiglobal"],
    ["WhatsApp", FaWhatsapp, "https://wa.me/+918606863175"],
  ];
  // Close the mobile cluster on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside tap (mobile only relies on this; harmless on desktop).
  useEffect(() => {
    const onClick = (event) => {
      if (dockRef.current && !dockRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onClick);
    return () => document.removeEventListener("pointerdown", onClick);
  }, []);

  return (
    <aside
      ref={dockRef}
      className={`social-dock ${open ? "expanded" : ""}`}
      aria-label="Social media links"
    >
      <div className="dock-items">
        {socialLinks.map(([name, Icon, url], i) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
            className="dock-item"
            style={{
              transitionDelay: open
                ? `${i * 35}ms`
                : `${(socialLinks.length - i) * 25}ms`,
            }}
            tabIndex={open ? 0 : -1}
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>

      <button
        type="button"
        className="dock-hub"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close social links" : "Open social links"}
        aria-expanded={open}
      >
        {open ? <X size={17} /> : <Share2 size={16} />}
      </button>
    </aside>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollUp}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={18} />
    </button>
  );
}

export function Footer() {
  return (
    <footer id="contact">
      <div className="contact-card">
        <div>
          <p className="eyebrow">Let’s make room for what is next</p>
          <h2>
            Ready to{" "}
            <em>
              clean
              <br />
              and elevate?
            </em>
          </h2>
        </div>
        <div className="contact-action">
          <p>
            Tell us where you are today. We’ll start with a thoughtful
            conversation.
          </p>
          <div className="contact-buttons">
            <a
              className="contact-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samfiglobal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Us<ArrowUpRight size={17} />
            </a>
            <a
              className="contact-button contact-whatsapp"
              href="https://wa.me/+918606863175"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Samfi on WhatsApp"
            >
              <FaWhatsapp size={17} /><ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} <BrandName />. All rights reserved.</span>
      </div>
    </footer>
  );
}
