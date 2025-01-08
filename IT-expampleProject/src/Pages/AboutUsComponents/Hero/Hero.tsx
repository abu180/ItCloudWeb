import './Hero.css'
import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const Hero = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });


    const opacity = useTransform(
      scrollYProgress, 
      [0, 0.2], 
      [1, 0]
    );

    const scale = useTransform(
      scrollYProgress, 
      [0, 0.2], 
      [1, 0.8]
    );


    const position = useTransform(scrollYProgress, (pos) =>
      pos >= 1 ? "relative" : "fixed"
    );
  
    useEffect(() => {
      const updateMousePosition = (ev: MouseEvent) => {
        if (!targetRef.current) return;
        const { clientX, clientY } = ev;
        targetRef.current.style.setProperty("--x", `${clientX}px`);
        targetRef.current.style.setProperty("--y", `${clientY}px`);
      };
  
      window.addEventListener("mousemove", updateMousePosition);
  
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);


    return (
        <motion.section
            style={{ opacity }}
            ref={targetRef}
            className='section'
        >
            <motion.div
                style={{ position, scale}}
                className='hero-content'
            >
                <p>
                    <span>Volkswagen Group Services</span>
                </p>
                <p className='text-description'>
                    <h1>
                        WHO WE ARE.
                    </h1>
                </p>
            </motion.div>
        </motion.section>
    )
}