import React from "react";
import { motion } from "framer-motion"; // No es necesario AnimatePresence
import { useInView } from "react-intersection-observer";
import "./CloudProjectsPage.css";

const CloudProjectsPage: React.FC = () => {
  // Hooks para controlar la visibilidad de cada sección
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="cloud-projects-container">
      {/* Segunda sección: Texto 1 */}
      <motion.div
        className="text-section"
        ref={ref2}
        initial={{ opacity: 0, x: -100 }}
        animate={inView2 ? { opacity: 1, x: 0 } : {}}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>Proyecto 1: Solución en la Nube</h2>
        <p>
          En este proyecto, utilizamos la infraestructura en la nube para
          almacenar y procesar grandes volúmenes de datos, mejorando la
          eficiencia y la seguridad.
        </p>
      </motion.div>

      {/* Primera sección: Imagen 1 */}
      <motion.div
        className="image-section"
        ref={ref1}
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={inView1 ? { opacity: 1, scale: 1, y: 0 } : {}}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src="/CloudAWS.png"
          alt="Proyecto 1"
          className="project-image"
        />
      </motion.div>

      {/* Cuarta sección: Texto 2 */}
      <motion.div
        className="text-section"
        ref={ref4}
        initial={{ opacity: 0, x: -100 }}
        animate={inView4 ? { opacity: 1, x: 0 } : {}}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>Proyecto 2: Escalabilidad y Rendimiento</h2>
        <p>
          Este proyecto está diseñado para escalar dinámicamente según la
          demanda, garantizando un alto rendimiento en todo momento, todo
          gestionado a través de la nube.
        </p>
      </motion.div>

      {/* Tercera sección: Imagen 2 */}
      <motion.div
        className="image-section"
        ref={ref3}
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={inView3 ? { opacity: 1, scale: 1, y: 0 } : {}}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src="/CloudAWS.png"
          alt="Proyecto 2"
          className="project-image"
        />
      </motion.div>
    </div>
  );
};

export default CloudProjectsPage;
