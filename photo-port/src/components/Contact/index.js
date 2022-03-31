import React from 'react'

function Contact(){

    return(
    <div className="container-fluid d-flex justify-content-center align-items-center mt-2 mb-2">
        <form className="form-holder p-2 ">
            <div>
                <div className="d-flex justify-content-center align-items-center">
                    <h3>Contact Me</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name:</label>
                        <input className="form-control" type="text" name="first-name" placeholder="Enter your first name"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-group">
                        <label htmlFor="last-name">Last Name:</label>
                        <input className="form-control" type="text" name="last-name" placeholder="Enter your last name" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input className="form-control" type="text" name="email" placeholder="Enter your email." /> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="category">Message Category:</label>
                        <select id="form-category" name="category" class="form-select">
                            <option value=""></option>
                            <option value="Employment">Employment</option>
                            <option value="School">School</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label htmlFor="message"></label>
                        <textarea id="message" name="message" className="form-control" placeholder="Please enter your message" rows="5"></textarea>
                    </div>
                </div>
                <div class="col-md-12">
                    <input type="submit" class="btn btn-success btn-send mt-2" value="Send message"></input>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Contact