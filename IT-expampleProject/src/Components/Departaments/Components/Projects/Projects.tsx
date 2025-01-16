import './Projects.css';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Project = () => {
    const [isFlipped, setIsFliped ] = useState(false);

    const handleFlipped = () => setIsFliped(!isFlipped);

    return (
        <div className='container' onClick={handleFlipped}>
            <AnimatePresence mode="wait">
                {isFlipped ? (
                    <motion.div>

                    </motion.div>
                ) : }
            </AnimatePresence>

        </div>
    )
}