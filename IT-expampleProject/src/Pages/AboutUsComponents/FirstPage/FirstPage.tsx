import { stylesWithCssVar } from '../../../utils/motion';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from 'react';
import Map from '../../../Components/AboutUs/Map/Map';
import './FirstPage.css';

export const FirstPage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  //Used to scale the image while we're scrolling down. 
  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  
  //Is used to move the image to the left side. 
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  
  //Will be used while we are scrolling down to show the text and image. 
  const opacity = useTransform(
    scrollYProgress,
    //Text Opacity
    [0, 0.5, 0.6, 0.85, 0.9],
    //Image Opacity
    [1, 1, 0.4, 0.4, 1]
  );

  //Opacity for text1
  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  //Scroll Y progress for Text1
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );


  //Opacity for Text2
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  //Scroll progress for Text2
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );


  //Opacity for Text3
  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  //Scroll down for Text34
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );



  return (
    <section 
      ref={targetRef} 
      className="section"
    >
      <div className="sticky-container">
        <motion.div 
          style={{ x, scale }} 
          className="motion-div"
        >
          <motion.figure 
            style={{ opacity }} 
            className="motion-figure"
          >
            <Map  className="motion-img"/>
            
          </motion.figure>

          <motion.figure 
            style={{ opacity: text2Opacity }} 
            className="motion-figurePalette"
          >
            
          </motion.figure>

          <motion.figure 
            style={{ opacity: text3Opacity }} 
            className="motion-figureDevTools"
          >
            
          </motion.figure>

        </motion.div>
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className="motion-p"
        >
          <span className="text-primary">Preconfigured environments</span>
          <br />
          We detect your environment so you don't need to fiddle with configuration files.
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y
          })}
          className="motion-p"
        >
          <span className="text-primary">Command Palette</span>
          <br />
          Access and complete any action in seconds with the command palette.
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            "--y": text3Y,
          })}
          className="motion-p"
        >
          <span className="text-primary">Devtools</span>
          <br />
          We've bundled useful tools to help you get your work done faster and more efficiently.
        </motion.p>
      </div>
    </section>
  );
};
