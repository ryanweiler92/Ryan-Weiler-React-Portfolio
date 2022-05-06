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
        <div className ="row justify-content-center">
         <div className="col-10 col-md-2 col-sm-10 m-3">
          <p><a 
          href={require(`../../assets/resume/resume.PDF`)}
          className="link-primary"
          download
          >
          Download my resume
          </a></p>
          </div>
        </div>
        <div className ="row justify-content-center">
          <div className="col-10 col-md-3 col-sm-10 m-3">
            <div className="card skill-card">
              <div className="card-header">
                Front-End Proficiencies
              </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">CSS</li>
              <li class="list-group-item">JavaScript</li>
              <li class="list-group-item">jQuery</li>
              <li class="list-group-item">Responsive Design</li>
              <li class="list-group-item">React</li>
              <li class="list-group-item">Bootstrap</li>
            </ul>
            </div>
          </div>

          <div className="col-10 col-md-3 col-sm-10 m-3">
            <div className="card skill-card">
              <div className="card-header">
                Back-End Proficiencies
              </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">APIs</li>
              <li class="list-group-item">Node</li>
              <li class="list-group-item">Express</li>
              <li class="list-group-item">MySQL, Sequelize</li>
              <li class="list-group-item">MongoDB, Mongoose</li>
              <li class="list-group-item">REST</li>
              <li class="list-group-item">GraphQL</li>
            </ul>
            </div>
          </div>
          
        </div>
   
    </animated.div>
    )
}

export default Resume