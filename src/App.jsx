import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import SectorPage from "./pages/SectorPage";
import { sectors } from "./data/sectors";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function ScrollReset() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      let frame;
      let attempts = 0;
      const scrollToTarget = () => {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "auto" });
          return;
        }
        if (attempts++ < 12) frame = requestAnimationFrame(scrollToTarget);
      };
      frame = requestAnimationFrame(scrollToTarget);
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}


export default function App() {
  return (
    <>
      <ScrollReset />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />

          {sectors.map((sector) => (
            <Route
              key={sector.slug}
              path={sector.slug}
              element={<SectorPage sector={sector} />}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}
