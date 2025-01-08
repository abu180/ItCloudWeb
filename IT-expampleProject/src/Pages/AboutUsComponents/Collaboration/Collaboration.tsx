import './Collaboration.css';
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";


export const Collaboration = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const extendedRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end end"],
    });
    const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
      target: extendedRef,
      offset: ["start end", "end end"],
    });
  
    const scale = useTransform(
      scrollYProgressIncludingOverlap,
      [0.1, 0.4, 0.75, 1],
      [1, 2.5, 4.2, 1]
    );
    const x = useTransform(
      scrollYProgressIncludingOverlap,
      [0.1, 0.25, 0.75, 1],
      ["0vw", "-55vw", "-135vw", "-18vw"]
    );
    const y = useTransform(
      scrollYProgressIncludingOverlap,
      [0.75, 1],
      ["0vh", "40vh"]
    );
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  
    const avatarGroupOpacity = useTransform(
      scrollYProgress,
      [0, 0.23, 0.25],
      [0, 0, 1]
    );
  
    const avatarGroupX = useTransform(
      scrollYProgress,
      [0, 0.23, 0.25, 0.4, 0.45, 0.6, 0.65],
      ["60px", "60px", "40px", "40px", "20px", "20px", "0px"]
    );
  
    const avatarOneScale = useTransform(
      scrollYProgress,
      [0, 0.23, 0.25, 0.85, 0.9],
      [0, 0, 1, 1, 0]
    );
  
    const avatarTwoScale = useTransform(
      scrollYProgress,
      [0, 0.4, 0.45],
      [0, 0, 1]
    );
  
    const avatarTwoOpacity = useTransform(
      scrollYProgressIncludingOverlap,
      [0.9999, 1],
      [1, 0]
    );
  
    const avatarThreeScale = useTransform(
      scrollYProgress,
      [0, 0.6, 0.65, 0.85, 0.9],
      [0, 0, 1, 1, 0]
    );

    return (
        <section ref={targetRef} className='collaboration-section'>
            <div ref={extendedRef} className='section-inner'>
                <div className='sticky-container'>
                    <motion.div
                        style={{ scale, x, y }}
                        className='motion-div'
                    >
                        <motion.img
                            style={{ opacity }}
                            src='/main-screen.svg'
                            className='main-image'
                        />
                        <motion.div
                            style={{ opacity: avatarGroupOpacity, x: avatarGroupX }}
                            className='avatar-group'
                        >
                            <motion.img
                                style={{ scale: avatarOneScale }}
                                className='avatar avatar-one'
                                src="https://unsplash.com/photos/_H6wpor9mjs/download?force=true&w=128&h=128"
                            />
                            <motion.img
                                style={{ scale: avatarTwoScale, opacity: avatarTwoOpacity }}
                                className="avatar avatar-two"
                                src="https://unsplash.com/photos/sibVwORYqs0/download?force=true&w=128&h=128"
                            />
                            <motion.img
                                style={{ scale: avatarThreeScale }}
                                className="avatar avatar-three"
                                src="https://unsplash.com/photos/7YVZYZeITc8/download?force=true&w=128&h=128"
                            /> 
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
