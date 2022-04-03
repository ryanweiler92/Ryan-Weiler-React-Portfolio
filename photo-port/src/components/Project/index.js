import React, { useState } from 'react'

function Project(){

    const [projects] = useState([
        {
            name: "XYZ Rentals",
            technologies: "MYSQL2, Sequelize, Express"
        },
        {
            name: "College Search",
            technologies: "Javascript, CSS, HTML, API"
        },
        {
            name: "Local Restaurant Reviewer",
            technologies: "MYSQL2, Sequelize, Express"
        },
        {
            name: "Soccer Standings & News",
            technologies: "Javascript, CSS, HTML, API"
        }
    ]);


    return (
        <div className="row">

            {/* <div className="col-md-6">
                {projects.map((image, i) => (
                    <img
                    src={require(`../../assets/images/projects/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumnail mx-1"
                    key={image.name}
                    />
                ))}
            </div> */}
        </div>
    )
}

export default Project