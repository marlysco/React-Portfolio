import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'


export default function App() {
  return(
    <Router>
        <div>
            <Header/>
            <Route exact path='/' component={About}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Footer/>
        </div>
    </Router>
    
)
}



