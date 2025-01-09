import './ItCloudSolutions.css';
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import OrgChart from "./Components/OrganizationChart/OrganizationChart";
import Navbar from "../Navbar/Navbar";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import { ItRobot } from "./Components/ItRobot/ItRobot";
import AnimatedText from '../AboutUs/textanimation';
import FixedCarousel from './Components/FixedCarrusel/FixedCarrusel';
import { Collaboration } from '../../Pages/AboutUsComponents/Collaboration/Collaboration';
import { FirstPage } from '../../Pages/AboutUsComponents/FirstPage/FirstPage';
import ScrollTrigeredAnimation from './Components/ScrollTrigeredAnimation/ScrollTrigeredAnimation';

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
                <WhoWeAre />
            </div>
            <div className="WhoWeAre">
                <motion.div 
                    className="Column"
                    ref={ref}
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: isInView ? 0 : 1, y: isInView ? 60 : 0 }} // Controla la animación según el estado de visibilidad
                    transition={{ duration: 0.5 }}
                    
                >
                    <div className='firstParagraph'>
                        <div className='firstParagraph-Title'>
                            <p>
                                IT Cloud Solutions
                            </p>
                        </div>
                        <div className='firstParagraph-Content'>
                            <h1>WHO WE ARE</h1>
                            <p>
                                Volkswagen IT Cloud & Solutions is a team of technicians and engineers specialising in cloud computing, offering professional services since 2019
                            </p>
                        </div>
                    </div>

                    
                    <div className='secondParagraph'>
                        <div className='secondParagraph-Content'>
                            <h1>WHAT WE DO?</h1>
                            <div className='secondParagraph-ContentFirst'>
                                <h3> 
                                    Infrastucture
                                </h3>
                                <p>
                                    Depending on the needs of the project, we can deploy solutions in our own enviorment or in the VW Group enviorment
                                </p>
                            </div>
                            <div className='secondParagraph-ContentSecond'>
                                <h3>
                                    Development
                                </h3>
                                <p>
                                    Creating developing and maintaining software applications and solutions. 
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="Column">
                    <ItRobot />
                </div>
            </div>


            { /* AWS-GOOGLE-AZURE */ }
            <div className='aws-google-azure-Container'>
                    <motion.h1
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
                        transition={{ duration: 0.8 }}
                    >
                        AWS-GOOGLE-AZURE
                    </motion.h1>

                { /* FIRST CARUSEL */ }
                <motion.div className='Infrastucture-Container'
                    ref={ref}
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    transition={{ duration: 0.8, delay: 0.1}}
                >
                    <div className='InfrastuctureTitle-Container'>
                        <h3>Infrastucture Solution.</h3>
                    </div>
                    <FixedCarousel images={FirstPartInfrastuctureCarrouselContent}/>
                </motion.div>
                { /* SECOND CARUSEL */ }
                <motion.div className='Development-Container'
                    ref={ref}
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                >
                    <div className='DevelopmentTitle-Container'>
                        <h3>Development Solution.</h3>
                    </div>
                    <FixedCarousel images={DevelopmentSolutionContent}/>
                </motion.div>
            </div>

            { /* AWS-GOOGLE-AZURE */ }
            { /* 
            <div className='AWS-GOOGLE-AZURE-Container'>

                <div className='AWS-GOOGLE-AZURE-ColumnContainer'>
                    <div className='AWS-GOOGLE-AZURE-Column'>
                        <div className='AWS-GOOGLE-AZURE-Title'>
                            <p>AWS-GOOGLE-AZURE</p>
                        </div>
                        <div className='carrouselColumn'>
                            <AnimatedText text='Infrastucture Solution' color='#000000' fontSize='1.2rem' width='45%' marginTop='30px' paddingLeft='40px'/>
                            <Carousel images={FirstPartInfrastuctureCarrouselContent} />
                        </div>
                        <div className='carrouselColumn'>
                            <AnimatedText text='Development Solution' color='#000000' fontSize='1.2rem' width='45%' marginTop='30px'  paddingLeft='40px'/>
                            <Carousel images={FirstPartInfrastuctureCarrouselContent} />

                        </div>
                    </div>
                    <div className='AWS-GOOGLE-AZURE-Column'>
                        <div className='carrouselColumn'>
                        </div>
                    </div>
                </div>
            </div>
            */ }

            {/* AGILE AND SCALABLE INFRASTUCTURE */}
            <div>
                { /* <FirstPage /> */ }
                <ScrollTrigeredAnimation />
            </div>
        </div>
    )
}

export default ItCloudSolutions;