import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./ServiceCatalogue.css";

export default function ServiceCatalogue() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  // Define circular path for the first circle
  const radius = 100; // Adjust the radius as needed
  const circle1X = useTransform(scrollYProgress, [0, 1], [0, 2 * Math.PI]);
  const circle1Y = useTransform(scrollYProgress, [0, 1], [0, 2 * Math.PI]);

  const x = useTransform(circle1X, (value) => radius * Math.cos(value));
  const y = useTransform(circle1Y, (value) => radius * Math.sin(value));

  return (
    <div className="ServiceCatalogue" ref={targetRef}>
      <div className="CloudContainer">
        {/* Animated Circle */}
        <motion.div
          className="Circle Circle1"
          style={{ x, y }}
        >
          <h3>Continuity through cooperation</h3>
          <p>Long-term project commitment and joint development opportunities</p>
        </motion.div>

        {/* Central Cloud */}
        <div className="Cloud">
          <img src="/cloud-icon.png" alt="Cloud Icon" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="CatalogueText">
        <h1>SERVICE CATALOGUE</h1>
        <h2>OUR COMPETITIVE ADVANTAGES</h2>
      </div>
    </div>
  );
}