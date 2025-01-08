import "./ItRobot.css";
import { motion } from "framer-motion";

export const ItRobot = () => {
  return (
    <section className="floating-robot-section">
      <motion.div
        className="floating-robot-container"
        animate={{
          y: ["0px", "-20px", "0px"],  // Mueve la imagen de arriba a abajo
        }}
        transition={{
          duration: 2,   // Duración de un ciclo completo (sube y baja)
          repeat: Infinity,  // Repite infinitamente
          repeatType: "loop",  // Tipo de repetición (bucle)
          ease: "easeInOut",  // Tipo de transición (suave)
        }}
      >
        <img
          src="/robotIt.png"
          className="floating-robot"
        />
      </motion.div>
    </section>
  );
};
