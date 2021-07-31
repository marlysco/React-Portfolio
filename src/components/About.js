import React from 'react';
import mco from '../assets/mco.jpg';


function About() {
 return (
    <main className={"container-fluid secondary"}>

        <div className={"row col-12 p-4 p-md-5 mb-4 text-dark rounded"}>
          <div className={"col-3"}>
              <img alt= "Marlys Clemente" className={"img-fluid rounded img-thumbnail"} src={mco} width="370" height="370"/>
          </div>
          <div className={"col-10 col-md-8 px-0"}>
            <h1 className={"bd-dark display-8 fst-italic text-warning"}>About me</h1>
            <p className={"my-8 lead text-dark"}>
                Creative, hard-worker, fast-learner and passionate network and electronics engineer.
                Aiming to escalate in order to become a Professional Full Stack Developer.
                Deep technical IT background, able to work with broad spectrum of technologies related with the TCP/IP stack, IoT, Security, Power and Electronics. 
            </p>
          </div>
        </div>
       
    </main>
 )
}

export default About;