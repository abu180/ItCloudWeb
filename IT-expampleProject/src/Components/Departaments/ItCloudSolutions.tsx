import './ItCloudSolutions.css';
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import OrgChart from "./Components/OrganizationChart/OrganizationChart";
import Navbar from "../Navbar/Navbar";
import ITCloudSolutionsIntro from './Components/ITCloudSolutionsIntro/ITCloudSolutionsIntro';
import ServiceCatalogue from './Components/ServiceCatalogue/ServiceCatalogue';
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import { ItRobot } from "./Components/ItRobot/ItRobot";
import AnimatedText from '../AboutUs/textanimation';
import FixedCarousel from './Components/FixedCarrusel/FixedCarrusel';
import { Collaboration } from '../../Pages/AboutUsComponents/Collaboration/Collaboration';
import { FirstPage } from '../../Pages/AboutUsComponents/FirstPage/FirstPage';
import ItCloudCompetences from './Components/ItCloudCompetences/ItCloudCompetences';


const FirstPartInfrastuctureCarrouselContent = [
    { src: "/ArchitectureDesign.jpeg", title: "Consulting" },
    { src: "/Suport&Maintenance.jpg", title: "Support & Maintenance" },
    { src: "/MigrationCloud.jpeg", title: "Migrations" },
    { src: "/Azure.jpeg", title: "Azure Collaborations" },
    { src: "CloudAWS.png", title: "Own Cloud AWS" },
    { src: "image3.jpg", title: "GITC (VW Group Cloud" },

];

const DevelopmentSolutionContent = [
    { src: "/ArchitectureDesign.jpeg", title: "Deploy across cloud or on premises infrastucture" },
    { src: "/Suport&Maintenance.jpg", title: "FullStack (frontend & backend) developments" },
    { src: "/MigrationCloud.jpeg", title: "Any Lenguage" },
    { src: "/Azure.jpeg", title: "Use of IA" },
    { src: "CloudAWS.png", title: "Support, maintenance, new developments" },
]
  

interface ScrollAnimationProps {
    threshold: number; // Porcentaje de visibilidad
}

const ItCloudSolutions: React.FC<ScrollAnimationProps> = ({ threshold }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            {
                threshold: 0, // Usa el threshold dinámico aquí
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);


    return (
        
        <div>
            <Navbar />
            <div className="WhoWeAre-Container">
                <ITCloudSolutionsIntro />
            </div>
            <div className='ServiceCatalogue-Container'>
                <ServiceCatalogue />
            </div>

        


           


        </div>
    )
}

export default ItCloudSolutions;