import "./Infrastucture.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Infrastructure = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Obtén el progreso del scroll
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Definir las transformaciones para la animación de los textos
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7], [50, 0, 0, -50]);

  return (
    <section ref={targetRef} className="infrastructure-section">
      <div className="image-container">
        <motion.div className="motion-div">
          <img
            src="/Infrastucture.png"
            alt="Infraestructura"
            className="fixed-image"
          />
        </motion.div>
      </div>
      <div className="content-container">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="content-box"
        >
          <h2>Primer Título</h2>
          <p>
            Este es el contenido de la primera caja. Aquí puedes explicar algo
            relacionado con la infraestructura.
          </p>
        </motion.div>
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="content-box"
        >
          <h2>Segundo Título</h2>
          <p>
            Este es el contenido de la segunda caja. Más información aparece al
            hacer scroll.
          </p>
        </motion.div>
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="content-box"
        >
          <h2>Tercer Título</h2>
          <p>
            Este es el contenido de la tercera caja. Continúa desplazándote para
            ver más detalles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
