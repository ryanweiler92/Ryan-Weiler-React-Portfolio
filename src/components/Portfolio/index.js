import React from 'react'
import Project from '../Project'
import { useSpring, animated } from '@react-spring/web'

function Portfolio(){

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
      })
    
    return (
        <animated.div style={styles} className="container-fluid text-white p-0 portfolio">
            <div className="row ms-0" id="portfolio-title">
                <h3 className="pt-3">Portfolio</h3>
            </div>
                <Project />     
        </animated.div>
    )
};

export default Portfolio