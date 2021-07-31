import React from 'react';
import mco from '../assets/mco.jpg';


function About() {
 return (
    <main className={"container"}>
        <div className={"p-4 p-md-5 mb-4 text-white rounded bg-dark"}>
          <div>
              <img alt= "Marlys Clemente" src={mco} width="370" height="370"/>
          </div>
          <div className={"col-md-8 px-0"}>
            <h1 className={"bd-dark display-8 fst-italic"}>About me</h1>
            <p className={"my-8"}>
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