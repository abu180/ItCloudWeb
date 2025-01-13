import './ITCloudSolutionsIntro.css';
import React from 'react';
import { motion } from 'framer-motion';

export default function ITCloudSolutionsIntro() {
    return (
        <div className='Container'>
            <div className='Column'>
                <div className='TitleAndSubtitle'>
                    <motion.div 
                        className='Title'
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <h1> IT CLOUD SOLUTIONS </h1>
                    </motion.div>
                    <motion.div 
                        className='Subtitle'
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <p>Specialists in AWS, Google and Azure cloud solutions for infrastucture and software development.</p>
                    </motion.div>
                </div>
            </div>
            <div className='Column'>
                <div className='CloudsContainer'>
                    <motion.div 
                        className='Azure-Card Cloud-Azure'
                        animate={{
                            y: ["0px", "-20px", "0px"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        <img src='/azureCloud.webp'/>
                    </motion.div>
                    <div className='AWS-Card Cloud-AWS'>
                        <img src='/cloud.png' />
                    </div>
                    <motion.div 
                        className='Google-Card Cloud-Google'
                        animate={{
                            y: ["0px", "20px", "0px"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        <img src='/googleCloud.png' /> 
                    </motion.div>
                </div>
            </div>
        </div>
    )
}