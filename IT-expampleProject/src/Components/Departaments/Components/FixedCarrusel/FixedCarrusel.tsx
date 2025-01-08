import './FixedCarrusel.css';
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Image {
    src: string;
    title: string;
}

interface CarouselProps {
    images: Image[];
}

const FixedCarousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice actual
    const totalImages = images.length; // Número total de imágenes

    // Función para avanzar a la siguiente imagen
    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) < totalImages ? prevIndex + 1 : prevIndex
        );
    };

    // Función para retroceder a la imagen anterior
    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1) >= 0 ? prevIndex - 1 : prevIndex
        );
    };

    if (!images || !Array.isArray(images)) {
        console.log("No se han proporcionado imágenes");
    }

    return (
   
            <div className="carousel">
                <motion.div
                    className="carousel-track"
                    initial={{ x: "0%" }}
                    animate={{ x: `-${(currentIndex) * 100}%` }} // Movimiento por cada imagen
                    transition={{
                        duration: 0.5, // Tiempo para el cambio de imagen
                        ease: "easeInOut",
                    }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="carousel-item-container">
                            <div className='carousel-item'>
                                <img src={image.src}  />
                            </div>
                            <div className='carousel-item-title'>
                                <h4>{image.title}</h4>
                            </div>
                        </div>
                    ))}
                </motion.div>
                <button className="prev-button" onClick={prevImage}>
                    Anterior
                </button>
                <button className="next-button" onClick={nextImage}>
                    Siguiente
                </button>
            </div>
        
    );
};

export default FixedCarousel;
