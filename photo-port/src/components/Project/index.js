import React, { useState } from 'react'

function Project(){

    const [projects] = useState([
        {
            name: "XYZ Rentals",
            technologies: "MYSQL2, Sequelize, Express",
            link: "https://secret-savannah-63468.herokuapp.com/",
            github: "https://github.com/ryanweiler92/XYZ-Rentals"
        },
        {
            name: "Book-Search-Engine",
            technologies: "MERN Stack",
            link: "https://sleepy-journey-57485.herokuapp.com/",
            github: "https://github.com/ryanweiler92/Book-Search-Engine"
        },
        {
            name: "Local Restaurant Reviewer",
            technologies: "MYSQL2, Sequelize, Express",
            link: "https://mighty-harbor-87876.herokuapp.com",
            github: "https://github.com/ryanweiler92/Local-Restaurant-Reviewer"
        },
        {
            name: "College Search",
            technologies: "Javascript, CSS, HTML, API",
            link: "https://ryanweiler92.github.io/College-Search/index.html",
            github: "https://github.com/ryanweiler92/College-Search"
        },
        {
            name: "Note Taker",
            technologies: "Javascript, Express, API",
            link: "https://sleepy-headland-66572.herokuapp.com/",
            github: "https://github.com/ryanweiler92/Note-Taker"
        },
        {
            name: "Budget Tracker",
            technologies: "Javascript, MongoDB, Mongoose, Express",
            github: "https://github.com/ryanweiler92/Budget-Tracker",
            link: "https://nameless-ravine-46317.herokuapp.com/"
        }
    ]);

    return (
    <div className="row ms-0 d-flex justify-content-center align-items-center mt-4">
        {projects.map((image, i) => (
            <div className="col-5 col-md-5 col-sm-10 m-3">
                <figure class="hover-img">
                    <img
                    className="img-fluid" 
                    src={require(`../../assets/images/projects/${i}.jpg`)}
                    alt={projects[i].name}
                    />
                    <figcaption>
                        <h3>{projects[i].name}</h3>
                        <h4>{projects[i].technologies}</h4>
                        <div className="d-flex justify-content-center align-items-center"> 
                        <a href={projects[i].github} target="_blank"><i className="fab fa-github icon"></i></a>
                        <a href={projects[i].link} target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </figcaption>
                </figure>
            </div>
        ))}
    </div>
    )};

export default Project