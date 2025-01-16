import React from "react";
import { motion } from "framer-motion";
 
const CircularLayout = () => {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  const radius = 150; // Radius of the circle
 
  return (
<div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
      }}
>
<motion.div
        style={{
          position: "relative",
          width: radius * 2,
          height: radius * 2,
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }} // Rotate the entire circle
        transition={{
          duration: 10, // Time for one full rotation
          repeat: Infinity, // Infinite rotation
          ease: "linear",
        }}
>
        {cards.map((card, index) => {
          const angle = (index / cards.length) * 360; // Calculate angle for each card
          const x = radius * Math.cos((angle * Math.PI) / 180); // X position
          const y = radius * Math.sin((angle * Math.PI) / 180); // Y position
 
          return (
<motion.div
              key={index}
              style={{
                position: "absolute",
                width: 100,
                height: 50,
                backgroundColor: "lightcoral",
                borderRadius: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transformOrigin: "center",
                textAlign: "center",
                x: x,
                y: y,
                rotate: -angle, // Keep card text upright
              }}
>
              {card}
</motion.div>
          );
        })}
</motion.div>
</div>
  );
};
 
export default CircularLayout;