import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';
import { useSpring, animated } from '@react-spring/web'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

function Contact(){
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', category: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const {firstName, lastName, email, category, message } = formState;
    const errorMessageEl = document.getElementById("error-message")
    function handleChange(e){
        if (e.target.name === "email"){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid){
                setErrorMessage('Your email is invalid.');
                errorMessageEl.style.visibility= 'visible'
            } else {
                if(!e.target.value.length){
                    setErrorMessage(`${e.target.name} is required.`);
                    errorMessageEl.style.visibility = 'visible'
                } else {
                    setErrorMessage('');
                    errorMessageEl.style.visibility = 'hidden'
                }
            }
        }
        if(e.target.name ==="first name" || e.target.name ==="last name" || e.target.name ==="category" || e.target.name ==="message"){
            if(!e.target.value.length){
                setErrorMessage(`A ${e.target.name} is required.`)
                errorMessageEl.style.visibility= 'visible'
            } else {
                setErrorMessage('');
                errorMessageEl.style.visibility = 'hidden'
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState)
    }

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
    <animated.div style={styles} className="container-fluid d-flex justify-content-center align-items-center mt-2 mb-2">
        <form className="form-holder p-2" onSubmit={handleSubmit} >
            <div>
                <div className="d-flex justify-content-center align-items-center">
                    <h3>Contact Me</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name:</label>
                        <input className="form-control" type="text" name="first name" defaultValue={firstName} placeholder="Enter your first name" onBlur={handleChange}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name:</label>
                        <input className="form-control" type="text" name="last name" defaultValue={lastName} placeholder="Enter your last name" onBlur={handleChange}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input className="form-control" type="text" name="email" defaultValue={email} placeholder="Enter your email." onBlur={handleChange}/> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="category">Message Category:</label>
                        <select id="form-category" name="category" defaultValue={category} className="form-select" onBlur={handleChange}>
                            <option value=""></option>
                            <option value="Employment">Employment</option>
                            <option value="School">School</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="message"></label>
                        <textarea id="message" name="message" className="form-control" defaultValue={message} placeholder="Please enter your message" rows="5" onBlur={handleChange}></textarea>
                    </div>
                </div>
                <div className="cold-md-12 mt-1" id="error-message">
                    <Alert severity="error" >{errorMessage}</Alert>
                </div>
                <div className="col-md-12">
                    <Button variant="contained" color="secondary" endIcon={<SendIcon />} type="submit" className="btn btn-success btn-send mt-1" value="Send message">Send Message</Button>
                </div>
            </div>
        </form>
    </animated.div>
    )
}

export default Contact