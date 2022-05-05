import React from 'react'
import SVG from '../SVG'
import { useSpring, animated } from '@react-spring/web'

function About(){

    const styles = useSpring({
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        },
        config: {
            duration: 2500
        }
      });

      const colorStyles = useSpring({
          from: {
              color: `rgb(168,82,47)`
          },
          to: {
              color: `white`
          },
          config: {
              duration: 5000
          },
          loop: {reverse: true}
      })

      const boxShadowChange = useSpring({
          from: {
            boxShadow: '0px 0px 10px 5px rgb(168,82,47)'
          },
          to: {
            boxShadow: '0px 0px 10px 5px rgb(255,255,255)'
          },
          config: {
              duration: 5000
          },
          loop: {reverse: true}
      })

    return (
    
        <animated.div style={styles} className="container-fluid text-white" id="about-section" href="/about">
            {/* <SVG /> */}
            <div className="row justify-content-between ms-0 pt-2" id="about-me-title">
            
                <div className="col-4 col-md-2 col-sm-6 ">
                <h3>About Me</h3>
                </div>
                <div className="col-4 col-md-2 col-sm-3">
                <img 
                    className="img-fluid prof-pic rounded " 
                    src={require(`../../assets/images/prof-pic.jpeg`)}
                    alt="Profile Picture"
                    />
                </div>
            </div>
            <div className="row" id="about-section-text">
                <div className="d-flex justify-content-center align-items-center about-div">
                    <div className=" col-md-8 col-sm-12">
                <animated.p style={boxShadowChange} id="about-text">
                    Welcome! I am a Full Stack Web Developer from Connecticut. With over 10 years working experience I posess strong backgrounds in underwriting and math. After 24 intensive weeks I have become a graduate of the UCONN Coding Bootcamp which has provided me many techinical programming skills. An extraordinary passion for solving complex challenges and creating inspired me to become a developer. I enjoy discovering new music and artists and have an especially deep love for metal/metalcore music.  
                </animated.p>
                    </div>
                </div>
            </div>
        </animated.div>
    )
};

export default About