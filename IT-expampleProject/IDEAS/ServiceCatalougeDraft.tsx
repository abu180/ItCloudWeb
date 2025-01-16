import { motion } from "framer-motion";
import { useRef } from "react";
import "./ServiceCatalogue.css";

export default function ServiceCatalogue() {
  const radius = 150; // Radio del círculo

  return (
    <div className="ServiceCatalogueWrapper">
      <div className="StickyContainer">
        <div className="ServiceCatalogue-Cloud">
          <img src="/cloudServiceCatalogue.png" alt="Cloud Service Catalogue" />
        </div>

        {/* Elemento único en trayectoria circular */}
        <motion.div
          className="Circle Circle1"
          animate={{
            rotate: [0, 360], // Animar el ángulo de 0 a 360 grados
          }}
          transition={{
            duration: 5, // Duración de la animación
            repeat: Infinity, // Repetir indefinidamente
            ease: "linear", // Movimiento uniforme
          }}
          style={{
            position: "absolute",
            left: `calc(50% - ${radius}px)`, // Centrar horizontalmente y aplicar radio
            top: `calc(50% - ${radius}px)`, // Centrar verticalmente y aplicar radio
            transformOrigin: `${radius}px ${radius}px`, // Definir el origen de la rotación
          }}
        >
          <h3>Securing know-how</h3>
          <p>Business-critical expertise remains within the Group</p>
        </motion.div>

        <div className="TitleContainer">
          <h1>SERVICE CATALOGUE</h1>
          <h4>OUR COMPETITIVE ADVANTAGES</h4>
        </div>
      </div>
    </div>
  );
}
