import { motion } from "framer-motion";
import './CarruselBrand.css';

export const CarruselBrand = () => {
    return (
      <section className="carrusel-section">
        <div className="carrusel-container">
          <motion.div
            className="carrusel-track"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 10, // Duración de la animación en segundos
              repeat: Infinity, // Animación infinita
              ease: "linear", // Movimiento constante
            }}
          >
            <img src="/VolkswagenGroupServicesBrand.png" alt="Carrusel" className="carrusel-image" />
            <img src="/VolkswagenGroupServicesBrand.png" alt="Carrusel" className="carrusel-image" />
            <img src="/VolkswagenGroupServicesBrand.png" alt="Carrusel" className="carrusel-image" />
            <img src="/VolkswagenGroupServicesBrand.png" alt="Carrusel" className="carrusel-image" />
          </motion.div>
        </div>
      </section>
    );
  };