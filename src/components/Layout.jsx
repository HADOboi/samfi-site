import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";
import logo from "../assets/samfi-gold-logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const navigateHome = () => {
    setOpen(false);

    if (pathname === "/") {
      window.scrollTo(0, 0);
      return;
    }

    navigate("/");
  };

  const navigateToSectors = (event) => {
    event.preventDefault();
    setOpen(false);
    if (pathname !== "/") {
      navigate("/#sectors");
      return;
    }
    document.getElementById("sectors")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${compact ? "compact" : ""}`}>
      <Link className="brand-logo" to="/" onClick={(event) => { event.preventDefault(); navigateHome(); }} aria-label="SAMFI home">
        <img src={logo} alt="SAMFI — to empower your brain and business" />
      </Link>
      <nav className={open ? "open" : ""}>
        <button
          type="button"
          className={`nav-link ${pathname === "/" ? "active" : ""}`}
          onClick={navigateHome}
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

        <a href="/#sectors" onClick={navigateToSectors}>
          Services
        </a>

        <Link
          to="/gallery"
          className={pathname === "/gallery" ? "active" : ""}
          onClick={() => setOpen(false)}
        >
          Gallery
        </Link>

        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Contact <ArrowUpRight size={15} />
        </a>
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export function SocialDock() {
  const socialLinks = [
    ["WhatsApp", FaWhatsapp],
    ["Facebook", FaFacebookF],
    ["Instagram", FaInstagram],
    ["X", FaXTwitter],
    ["YouTube", FaYoutube],
    ["LinkedIn", FaLinkedinIn],
  ];

  return (
    <aside className="social-dock" aria-label="Social media links">
      {socialLinks.map(([name, Icon]) => (
        <button type="button" key={name} aria-label={name} title={name}>
          <Icon aria-hidden="true" />
        </button>
      ))}
    </aside>
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
          <a className="contact-button" href="mailto:samfiglobal@gmail.com">
            hello@samfi.org <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <img className="footer-logo" src={logo} alt="SAMFI" />
        <span>© {new Date().getFullYear()} SAMFI. All rights reserved.</span>
        <span>To empower your brain &amp; business.</span>
      </div>
    </footer>
  );
}
