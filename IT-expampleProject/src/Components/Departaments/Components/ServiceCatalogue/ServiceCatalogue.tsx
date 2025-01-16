import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./ServiceCatalogue.css";

export default function ServiceCatalogue() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef, 
    offset: ["start end", "end start"], 
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="ServiceCatalogueWrapper">
        <div ref={targetRef} className="StickyContainer">
          <motion.div
            className="CircleContainer"
            style={{ rotate: rotation }}
          >
            <div className="Circle Circle1">
              <h3>Securing know-how</h3>
              <p>Business-critical expertise remains within the Group</p>
            </div>

            <div className="Circle Circle2">
              <h3>Continuity through cooperation</h3>
              <p>Long-term project commitment and joint development opportunities</p>
            </div>

            <div className="Circle Circle3">
              <h3>High Flexibility</h3>
              <p>Diverse service portfolio and fast implementation by experienced specialist staff</p>
            </div>

            <div className="Circle Circle4">
              <h3>Securing Know-how</h3>
              <p>Business-critical expertise remains within the Group</p>
            </div>

            <div className="Circle Circle5">
              <h3>Securing Know-how</h3>
              <p>Business-critical expertise remains within the Group</p>
            </div>
          </motion.div>

          <div className="TitleContainer">
            <h1>SERVICE CATALOGUE</h1>
            <h4>OUR COMPETITIVE ADVANTAGES</h4>
          </div>
      </div>
    </div>
  );
}