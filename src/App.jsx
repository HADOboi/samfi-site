import { useLayoutEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { sectors } from "./data/sectors";
import { BackToTop } from "./components/Layout";
import { PageSkeleton } from "./components/PageSkeleton";

// Dynamic code-splitting: only load routes when requested
const Home = lazy(() => import("./pages/Home"));
const SectorPage = lazy(() => import("./pages/SectorPage"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));

function ScrollReset() {
  const location = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (location.hash) {
      let frame;
      let attempts = 0;
      const scrollToTarget = () => {
        const target = document.querySelector(location.hash);
        if (target) {
          if (lenis) {
            lenis.scrollTo(target, { immediate: true });
          } else {
            target.scrollIntoView({ behavior: "auto" });
          }
          return;
        }
        if (attempts++ < 12) frame = requestAnimationFrame(scrollToTarget);
      };
      frame = requestAnimationFrame(scrollToTarget);
      return () => cancelAnimationFrame(frame);
    }
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, lenis]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollReset />
      <Suspense fallback={<PageSkeleton />}>
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
      </Suspense>
      <BackToTop />
    </>
  );
}

