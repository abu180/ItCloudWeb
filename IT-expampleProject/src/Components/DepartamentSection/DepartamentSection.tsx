import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import AnimatedButton from '../AnimatedButton/AnimatedButton';
import './DepartamentSection.css';

const DepartamentSection: React.FC = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div className="DepartamentContainer" ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            <div className="DepartamentContent">
                <motion.div
                    className="ContainerContent"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <motion.h1 style={{ position: "relative", zIndex: 10 }}>IT CLOUD & SOLUTIONS</motion.h1>
                    <div className="DescriptionContent">
                        <p>Specialist in AWS, Google and Azure cloud solutions for infrastructure and software development</p>
                    </div>
                </motion.div>
                <div className="ContainerButton">
                    <AnimatedButton onClick={() => navigate('/ItCloudSolutions')} />
                </div>
            </div>
        </div>
    );
};

export default DepartamentSection;
