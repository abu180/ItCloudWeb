import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    color: string;
    fontSize?: string, 
    width?: string,
    marginBottom?: string,
    marginTop?: string,
    paddingLeft?: string,
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, color, fontSize, width ,marginBottom, marginTop, paddingLeft }) => {
  return (
    <div
        //Text Style
        style={{
          position: "relative",
          fontSize,
          color,
          width,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          lineHeight: 1,
          marginBottom,
          marginTop,
          paddingLeft,
        }}
      >
        {/* BLUE LAYOUT */}
        <motion.span
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#00FF7F",
            zIndex: 1,
            //THE LAYOUT REDUCTION START FROM RIGHT
            transformOrigin: "right", 
          }}
        />
            {/* TEXT */}
            <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.5, 1], y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                //WHILE THE LAYOUT IS DISAPERING, THE TEXT APPEARS. 
                delay: 0.2,
            }}
            style={{
                position: "relative",
                zIndex: 0, // Debajo de la máscara al inicio
                display: "inline-block",
                marginBottom: 20
            }}
            >
                {text}
            </motion.span>
    </div>
  );
};

export default AnimatedText;
