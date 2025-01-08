import './Carrusel.css';
import React from "react";
import { motion } from "framer-motion";

interface Image {
    src: string;
    title: string;
}

interface CarouselProps {
    images: Image[];
}


const Carousel: React.FC<CarouselProps> = ({images}) => {
    if(!images || !Array.isArray(images)) {
        console.log("No se han proporcionado imagenes");
    }

  return (
    <div className="carousel">
      <motion.div
        className="carousel-track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 5, // Tiempo para un ciclo completo
          ease: "linear",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.src} alt={image.title} />
            <h3>{image.title}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
