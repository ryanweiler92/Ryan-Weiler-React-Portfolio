import React from 'react'
import { useSpring, animated } from '@react-spring/web'

function Resume(){

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

    return(
    <animated.div style={styles} className="container-fluid text-white p-0 resume">
        <div className="row ms-0" id="resume-title">
            <h3 className="pt-3">Resume</h3>
        </div>
   
    </animated.div>
    )
}

export default Resume