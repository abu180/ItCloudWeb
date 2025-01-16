import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./ServiceCatalogue.css";

export default function ServiceCatalogue() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const cards = ["Card1", "Card2", "Card3"];

  const radius = 300;
  const angle = 360;
  const x = radius * Math.cos((angle * Math.PI) / 180); 
  const y = radius * Math.sin((angle * Math.PI) / 180); 
  
  return (
    <div className="ServiceCatalogueWrapper">
      <div ref={targetRef} className="StickyContainer">
        <div className="ServiceCatalogue-Cloud">
            <img src="/cloudServiceCatalogue.png" />
        </div>

          <motion.div
            animate={{rotate: [0, 360] }}
            transition={{duration: 5, repeat: Infinity, ease: "linear"}}
            style={{
              position: "absolute",
              left: `calc(50% - ${radius}px)`,
              top: `calc(50% - ${radius}px)`, 
              transformOrigin: `${radius}px ${radius}px`, 
            }}
          >
            <motion.div 
              className="Circle Circle1"
            >
              <h3>Securing know-how</h3>
              <p>Business-critical expertise remains within the Group</p>
            </motion.div>
          </motion.div>





          <motion.div className="Circle Circle2">
            <h3>Continuity through coperation</h3>
            <p>Long-term project commitment and joint development oportuinities</p>
          </motion.div>

          <motion.div className="Circle Circle3">
            <h3>High Flexibility</h3>
            <p>Diverse service portfolio and fast implementation by experienced specialist staff</p>
          </motion.div>

          <motion.div className="Circle Circle4">
            <h3>Securing Know-how</h3>
            <p>Business-critical expertise remains within the Group</p>
          </motion.div>

          <motion.div className="Circle Circle5">
            <h3>Securing Know-how</h3>
            <p>Business-critical expertise remains within the Group</p>
          </motion.div>



        <div className="TitleContianer">
            <h1>SERVICE CATALOGUE</h1>
            <h4>OUR COMPETITIVE ADVANTAGES</h4>
        </div>
      </div>
    </div>
  );
}