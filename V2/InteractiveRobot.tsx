import React, { useState } from "react";
import "./InteractiveRobot.css";


const InteractiveRobot: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isEyesOpen, setIsEyesOpen] = useState(false);

  // Al pasar el ratón sobre el robot, los ojos se abren
  const handleMouseEnter = () => {
    setIsEyesOpen(true);
  };

  // Al quitar el ratón del robot, los ojos se cierran (si el chatbot no está abierto)
  const handleMouseLeave = () => {
    if (!isChatbotOpen) {
      setIsEyesOpen(false);
    }
  };

  // Al hacer clic, se abre/cierra el chatbot
  const handleRobotClick = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="interactive-robot-container">
      <div
        className="robot"
        onClick={handleRobotClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cambia la imagen del robot según el estado de los ojos */}
        <img
          src={isEyesOpen ? "/robot2.png" : "/robot1.png"}
          alt="Interactive Robot"
          className="robot-image"
        />
      </div>

      {/* Si el chatbot está abierto, mostramos la ventana */}
      {isChatbotOpen && <Chatbot />}
    </div>
  );
};

// Componente Chatbot
const Chatbot: React.FC = () => {
  return (
    <div className="chatbot-window">
      <h3>¡Hola! Soy tu asistente virtual</h3>
      <div className="chat-content">
        <input type="text" placeholder="Escribe algo..." />
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default InteractiveRobot;
