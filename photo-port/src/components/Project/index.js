import React, { useState } from 'react'

function Project(){

    const [projects] = useState([
        {
            name: "XYZ Rentals",
            technologies: "MYSQL2, Sequelize, Express",
            link: "https://secret-savannah-63468.herokuapp.com/"
        },
        {
            name: "College Search",
            technologies: "Javascript, CSS, HTML, API",
            link: "https://ryanweiler92.github.io/College-Search/index.html"
        },
        {
            name: "Local Restaurant Reviewer",
            technologies: "MYSQL2, Sequelize, Express",
            link: "https://mighty-harbor-87876.herokuapp.com"
        },
        {
            name: "Soccer Standings & News",
            technologies: "Javascript, CSS, HTML, API",
            link: "https://ryanweiler92.github.io/Soccer-Standings-News/"
        }
    ]);

    return (
    <div className="row ms-0 d-flex justify-content-center align-items-center mt-4">
        {projects.map((image, i) => (
            <div className="col-md-5 m-3">
                <figure class="hover-img">
                    <img 
                    src={require(`../../assets/images/projects/${i}.jpg`)}
                    alt={projects[i].name}
                    />
                    <figcaption>
                        <h3>{projects[i].name}</h3>
                        <h4>{projects[i].technologies}</h4>
                        <a href={projects[i].link} target="_blank"><i className="fab fa-github icon"></i></a>
                    </figcaption>
                </figure>
            </div>
        ))}
    </div>
    )};

export default Project