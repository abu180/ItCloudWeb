// src/Components/CloudLoader.tsx
import React from 'react';
import { motion } from 'framer-motion';
import './CloudLoader.css'; // Asegúrate de agregar el archivo de estilos

const CloudLoader: React.FC = () => {
  return (
    <motion.div
      className="cloud-loader"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity }} // Gira infinitamente cada 2 segundos
    >
      <div className="cloud"></div>
    </motion.div>
  );
};

export default CloudLoader;
