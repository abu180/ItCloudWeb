import './AboutUs.css'
import React from "react";
import { motion } from "framer-motion";
import { useEffect } from 'react';
import AboutUsPage from '../../Pages/AboutUsPage'
import Navbar from '../Navbar/Navbar';
import Map from './Map/Map';
import AnimatedText from './textanimation';

function AboutUs() { 

    useEffect(() => {
        const handleScroll = () => {
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
          window.removeEventListener("wheel", handleScroll); // Limpiar el evento
        };
    }, []);

    return (
        <div>
            <Navbar />
                <AboutUsPage />
        </div>
    )
}


export default AboutUs