import React from 'react';
import ladylash from '../assets/ladylash.JPG'
import languagebarrier from '../assets/languagebarrier.JPG'
import workdayscheduler from "../assets/workdayscheduler.JPG"
import readmegenerator from "../assets/readmegenerator.JPG"

export default function Portfolio() {
    const projects = [
        {
            name: "Lady Lash",
            picture: ladylash,
            description:"A booking app for lash extension bussines called Lady Lash",
            link: "https://fathomless-eyrie-79379.herokuapp.com/"
        },
        {
            name: "The Language Barrier",
            picture: languagebarrier,
            description: "An application that allows children to learn multiple langauges through an interactive matchmaking system",
            link: "https://github.com/marlysco/language-barrier"
        },
        {
            name: "Employee Tracker",
            picture:"", 
            description: "Application for managing a company's employees",
            link: "https://github.com/marlysco/Employee-Tracker",
        },
        {
            name: "Team Profile Generator",
            picture: "",
            description:"Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person",
            link: "https://github.com/marlysco/Team-Profile-Generator"
        },
        {
            name: "Work Day Scheduler",
            picture: workdayscheduler,
            description: "Simple calendar application that allows a user to save events for each hour",
            link: "https://github.com/marlysco/Work-Day-Scheduler"
        },
        {
            name: "README generator",
            picture: readmegenerator,
            description: "Professional README generator app",
            link: "https://github.com/marlysco/readme-generator"
        },
    ];

    projects.forEach((projects) => {
        return (
        <div class="row mb-2">
        <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">{projects.name}</strong>
            <p class="card-text mb-auto">{projects.description}</p>
            <a href={projects.link} class="stretched-link">Got to the app</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg src={projects.picture} class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Language Barrier</text></svg>
          </div>
        </div>
      </div>
      </div>
        )
      })
}