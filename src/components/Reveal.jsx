import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Reveal({ children, className = "", delay = 0, y = 28, duration = 0.85 }) {
  const ref = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(
      () =>
        gsap.fromTo(
          ref.current,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 88%" },
          },
        ),
      ref,
    );
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
