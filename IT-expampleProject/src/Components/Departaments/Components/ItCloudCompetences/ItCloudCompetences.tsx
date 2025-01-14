import './ItCloudCompetences.css';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { stylesWithCssVar } from '../../../../utils/motion';
import Map from '../../../AboutUs/Map/Map';

const ItCloudCompetences = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"]
    });

    const opacity = useTransform(
        scrollYProgress,
        //IMAGE OPACITY
        [1, 1, 1, 1, 1],
        
        //TEXT OPACITY
        [0, 0.5, 0.7, 0.8, 1],

    );

    //Opacity for text1
    const text1Opacity = useTransform(
        scrollYProgress,
        [0, 0, 0.5, 0.5, 0],
        [0, 1, 1, 1, 0]
    );
    //Scroll Y progress for Text1
    const text1Y = useTransform(
        scrollYProgress,
        [0.5, 0.8, 1],
        ["30px", "0px", "-30px"]
    );


    //Opacity for Text2
    const text2Opacity = useTransform(
        scrollYProgress,
        [0.5, 0.6, 0.7, 0.8],
        [0, 1, 1, 0]
    );
    //Scroll progress for Text2
    const text2Y = useTransform(
        scrollYProgress,
        [0.5, 0.6, 0.7],
        ["30px", "0px", "-30px"]
    );


    //Opacity for Text3
    const text3Opacity = useTransform(
        scrollYProgress,
        [0.7, 0.8, 0.9],
        [0, 1, 0]
    );
    //Scroll down for Text34
    const text3Y = useTransform(
        scrollYProgress,
        [0.7, 0.8, 0.9],
        ["30px", "0px", "-30px"]
    );


    
    return (
        <section
            ref={targetRef}
            className='section'
        >
            <div className='sticky-container'>
                <div className='image-Container'>
                    <div>
                        <Map className='img'/>
                    </div>

                </div>

                <motion.p
                    className='paragraph-Content'
                    style={stylesWithCssVar({
                        opacity: text1Opacity,
                        "--y": text1Y
                    })}
                >
                    Requirements Management Associate BPM Associate Delivery Manager PMO (IT PEP & IT PEPagile) Product Lifecycle Management.
                </motion.p>

                <motion.p
                    className='paragraph-Content'
                    style={stylesWithCssVar({
                        opacity: text2Opacity,
                        "--y": text2Y
                    })}
                >
                    Cloud Consulting Cloud Architecting Cloud Engineering Cloud Development Transaltion, implementation & documentation of IT security assessment measures
                </motion.p>
            </div>
        </section>
    )
}

export default ItCloudCompetences;