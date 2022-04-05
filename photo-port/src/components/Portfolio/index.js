import React from 'react'
import Project from '../Project'

function Portfolio(){
    
    return (
        <div className="container-fluid text-white p-0 portfolio">
            <div className="row ms-0" id="portfolio-title">
                <h3 className="pt-3">Portfolio</h3>
            </div>
                <Project />     
        </div>
    )
};

export default Portfolio