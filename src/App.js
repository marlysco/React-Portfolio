import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ladylash from './assets/ladylash.JPG'
import languagebarrier from './assets/languagebarrier.JPG'
import workdayscheduler from "./assets/workdayscheduler.JPG"
import readme from "./assets/readme.JPG";
import employee from "./assets/employee.JPG";
import team from "./assets/team.JPG";


const projects = [
    { 
        id:1,
        name: "Lady Lash",
        picture: ladylash,
        description:"A booking app for lash extension bussines called Lady Lash",
        link: "https://fathomless-eyrie-79379.herokuapp.com/"
    },
    {
        id:2,
        name: "The Language Barrier",
        picture: languagebarrier,
        description: "An application that allows children to learn multiple langauges through an interactive matchmaking system",
        link: "https://github.com/marlysco/language-barrier"
    },
    {
        id:3,
        name: "Employee Tracker",
        picture: employee, 
        description: "Application for managing a company's employees",
        link: "https://github.com/marlysco/Employee-Tracker",
    },
    {
        id:6,
        name: "Team Profile Generator",
        picture: team,
        description:"Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person",
        link: "https://github.com/marlysco/Team-Profile-Generator"
    },
    {
        id:4,
        name: "Work Day Scheduler",
        picture: workdayscheduler,
        description: "Simple calendar application that allows a user to save events for each hour",
        link: "https://github.com/marlysco/Work-Day-Scheduler"
    },
    {
        id:5,
        name: "README generator",
        picture: readme,
        description: "Professional README generator app",
        link: "https://github.com/marlysco/readme-generator"
    },
];

export default function App() {
  return(
    <Router>
        <div>
            <Header/>
            <Route exact path='/' component={About}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/portfolio'>
            <Portfolio projects={projects}/>
            </Route>
            <Route exact path='/contact'>
            <Contact />
            </Route>
            <Route exact path='/React-Portfolio/' component={About}></Route>
            <Footer/>
        </div>
    </Router>   
)
}



