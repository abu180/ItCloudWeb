import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Components/Navbar/Navbar';
import AnimatedButton from './Components/AnimatedButton/AnimatedButton';
import DepartamentSection from './Components/DepartamentSection/DepartamentSection';
import AboutUs from './Components/AboutUs/AboutUs';
import AboutUsPage from './Pages/AboutUsPage';
import ItCloudSolutions from './Components/Departaments/ItCloudSolutions';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Navbar />
      <div className='homeSection'>
        <motion.div 
          className='homeContent'
          initial={{
            opacity: 0,
            y: 0
          }}
          animate={{
            opacity: 1,
            y: 180,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div className='Content'>
            <h1>Todo y más sobre</h1>
            <h5>Volkswagen Group Services</h5>
            <div className='containerButton'>
              <AnimatedButton onClick={() => navigate('/AboutUs')} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className='caja2'>
        <DepartamentSection />
      </div>
    </div>
  );
};


//Navigation routes. 
const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        { /* Here we assign the navigation route.*/ }
        <Route path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ItCloudSolutions" element={<ItCloudSolutions />} />
      </Routes>
    </Router>
  );
};

export default Root;
