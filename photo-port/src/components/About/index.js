import React from 'react'

function About(){

    return (
        <div className="container-fluid text-white" id="about-section" href="/about">
            <div className="row ms-0 pt-2" id="about-me-title">
                <h3 >About Me</h3>
            </div>
            <div className="row">
                <div className="d-flex align-items-left">
                    <img 
                    className="img-fluid prof-pic rounded" 
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
        </div>
    )
};

export default About