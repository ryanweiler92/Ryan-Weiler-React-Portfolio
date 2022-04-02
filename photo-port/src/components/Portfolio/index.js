import React, { useState } from 'react'
import Project from 'react'

function Portfolio(){
    
    return (
        <div className="container-fluid text-white p-0 portfolio">
            <div className="row ms-0" id="portfolio-title">
                <h3>Portfolio</h3>
            </div>
            <Project />
        </div>
    )
};

export default Portfolio