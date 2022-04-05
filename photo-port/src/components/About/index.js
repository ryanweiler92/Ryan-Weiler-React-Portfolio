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
          }
      })

    return (
    
        <animated.div style={styles} className="container-fluid text-white" id="about-section" href="/about">
            {/* <SVG /> */}
            <div className="row justify-content-between ms-0 pt-2" id="about-me-title">
            
                <div className="col-4 col-md-2 col-sm-6 ">
                <animated.h3 style={colorStyles} >About Me</animated.h3>
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
                <p id="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                </p>
                    </div>
                </div>
            </div>
        </animated.div>
    )
};

export default About