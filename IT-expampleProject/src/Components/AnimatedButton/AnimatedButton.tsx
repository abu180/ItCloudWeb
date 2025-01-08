import './AnimatedButton.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
interface AnimatedButtonProps {
    onClick: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className="buttonContainer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        className="circle"
        animate={{
          scale: isHover ? 60 : 1, 
          backgroundColor: isHover ? '#ffffff' : 'transparent',
        }}
        transition={{
          ease: 'easeIn',
          duration: 0.3,
        }}
      ></motion.div>
      <motion.div
        className="title"
        animate={{
          x: isHover ? -8 : 8,
          color: isHover ? '#000000' : '#ffffff',
        }}
      >
        Más Información
      </motion.div>
    </div>
  );
};

export default AnimatedButton;
