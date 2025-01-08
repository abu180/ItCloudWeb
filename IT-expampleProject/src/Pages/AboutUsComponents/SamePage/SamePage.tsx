import './SamePage.css';
import { BranchIcon } from '../../../icons/branch';
import { stylesWithCssVar } from '../../../utils/motion';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Map from '../../../Components/AboutUs/Map/Map';

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.1,

  // Paragraph 1
  showParagraphOne: 0.15,
  hideParagraphOne: 0.2,

  // Paragraph 2
  showParagraphTwoStart: 0.18,
  showParagraphTwoEnd: 0.28,
  hideParagraphTwo: 0.35,

  // Paragraph 3
  showParagraphThreeStart: 0.32,
  showParagraphThreeEnd: 0.42,
  hideParagraphThree: 0.5,

  // Paragraph 4
  showParagraphFourStart: 0.47,
  showParagraphFourEnd: 0.57,
  hideParagraphFour: 0.65,

  // Paragraph 5
  showParagraphFiveStart: 0.62,
  showParagraphFiveEnd: 0.72,
  hideParagraphFive: 0.8,

  // Paragraph 6
  showParagraphSixStart: 0.77,
  showParagraphSixEnd: 0.87,
  hideParagraphSix: 0.95,


    showLoadingScreenStart: 0.73,
    showLoadingScreenEnd: 0.78,  
    createBranchStart: 0.65,
    createBranchEnd: 0.7,
    createBranchFadeInStart: 0.78,
    createBranchFadeInEnd: 0.85,
    endTextFadeInStart: 0.95,
    endTextFadeInEnd: 1,
};

export const SamePage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart,
    ],
    [0, 1, 1, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [3, 1, 0.9, 0.7]
  );
  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchEnd,
    ],
    ["50%", "50%", "55%", "-50%", "-50%", "-55%", "0%", "0%", "-27%"]
  );

  const loadingScreenOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
    ],
    [0, 1]
  );
  const loadingScreenX = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    ["0%", "27%"]
  );
  const loadingScreenscale = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    [1, 0.5]
  );

  const paragraph1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    [0, 1, 0]
  );
  const paragraph1TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  const paragraph2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    [0, 1, 0]
  );
  const paragraph2TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    ["4rem", "0rem", "-4rem"]
  );


  const paragraph3Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphThreeStart,
      animationOrder.showParagraphThreeEnd,
      animationOrder.hideParagraphThree,
    ],
    [0, 1, 0]
  );

  const paragraph3TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphThreeStart,
      animationOrder.showParagraphThreeEnd,
      animationOrder.hideParagraphThree,
    ],
    ["4rem", "0rem", "-4rem"]
  );


  const paragraph4Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFourStart,
      animationOrder.showParagraphFourEnd,
      animationOrder.hideParagraphFour,
    ],
    [0, 1, 0]
  );

  const paragraph4TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFourStart,
      animationOrder.showParagraphFourEnd,
      animationOrder.hideParagraphFour,
    ],
    ["4rem", "0rem", "-4rem"]
  );


  const paragraph5Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFiveStart,
      animationOrder.showParagraphFiveEnd,
      animationOrder.hideParagraphFive,
    ],
    [0, 1, 0]
  );

  const paragraph5TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFiveStart,
      animationOrder.showParagraphFiveEnd,
      animationOrder.hideParagraphFive,
    ],
    ["4rem", "0rem", "-4rem"]
  );


  const paragraph6Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphSixStart,
      animationOrder.showParagraphSixEnd,
      animationOrder.hideParagraphSix,
    ],
    [0, 1, 0]
  );

  const paragraph6TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphSixStart,
      animationOrder.showParagraphSixEnd,
      animationOrder.hideParagraphSix,
    ],
    ["4rem", "0rem", "-4rem"]
  );


  const newBranchOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.createBranchFadeInStart,
      animationOrder.createBranchFadeInEnd,
    ],
    [0, 1]
  );

  const endTextOpacity = useTransform(
    scrollYProgress,
    [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
    [0, 1]
  );

  const endTexty = useTransform(
    scrollYProgress,
    [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
    ["4rem", "0rem"]
  );

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  const avatarOpacity = useTransform(scrollYProgress, (pos) =>
    pos >= animationOrder.fadeInEnd ? 1 : 0
  );


    return (
        <section ref={targetRef}>
          <div className='section'>
            <div className='sticky-container'>
                <motion.div
                    className="motion-div"
                    style={stylesWithCssVar({
                        opacity,
                        "--x": x,
                        "--scale": scale,
                    })}
                >
                    <Map className='main-image' />

                </motion.div>


                <motion.p
                  style={stylesWithCssVar({
                    opacity: paragraph1Opacity,
                    "--y": paragraph1TranslateY,
                    position,
                  })}
                  className="paragraph paragraph-left"
                >
                  Volkswagen Group Services is a company of the Volkswagen Group,
                  <br />
                  <span className='text-primary'>focused on working for the Group's companies around the world.</span>
                </motion.p>

                <motion.p
                  style={stylesWithCssVar({
                  opacity: paragraph2Opacity,
                  "--y": paragraph2TranslateY,
                  position,
                  })}
                  className="paragraph paragraph-right"
                >
                  We provide services in the areas of data engineering (IT),
                  <br />
                  <span className="text-primary">
                    engineering and comercial services. 
                  </span>
                </motion.p>


                <motion.p
                  style={stylesWithCssVar({
                  opacity: paragraph3Opacity,
                  "--y": paragraph3TranslateY,
                  position,
                  })}
                  className="paragraph paragraph-left"
                >
                  We are focused on our customer's activites and assume 
                  <br />
                  <span className="text-primary">
                    responsability for carring them out on their behalf. 
                  </span>
                </motion.p>


                <motion.p
                  style={stylesWithCssVar({
                  opacity: paragraph4Opacity,
                  "--y": paragraph4TranslateY,
                  position,
                  })}
                  className="paragraph paragraph-right"
                >
                  Volkswagen Group Services was founded in April 2001 in Wolfsburgo, Germany, under the name AutoVision and,
                  <br />
                  <span className="text-primary">
                    in 2018, was renamed Volkswagen Group Services.
                  </span>
                </motion.p>


                <motion.p
                  style={stylesWithCssVar({
                  opacity: paragraph5Opacity,
                  "--y": paragraph5TranslateY,
                  position,
                  })}
                  className="paragraph paragraph-left"
                >
                  The new name reflects the strategic orientation of the Group as a whole, 
                  <br />
                  <span className="text-primary">
                    including its brand and companies. 
                  </span>
                </motion.p>


                <motion.p
                  style={stylesWithCssVar({
                  opacity: paragraph6Opacity,
                  "--y": paragraph6TranslateY,
                  position,
                  })}
                  className="paragraph paragraph-right"
                >
                  It currently has arround 11000 employees at the seven European locations 
                  <br />
                  <span className="text-primary">
                    and whithin the Iberian Peninsula is located in Palamela, Pamplona and Barcelona. 
                  </span>
                </motion.p>
            </div>
          </div>
        </section>
    )
}