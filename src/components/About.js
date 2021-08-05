import React from 'react';
import mco from '../assets/mco.jpg';
import { DiReact, DiJavascript1, DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr"

const icons = [DiReact, DiJavascript1, DiMongodb, DiMysql, DiNodejs, GrGraphQl]

function About() {
 return (
     <div>
     <main className={"container-fluid font"}>
        <div className={"row col-12 p-4 p-md-5 mb-4 text-dark rounded"}>
          <div className={"col-3"}>
              <img alt= "Marlys Clemente" className={"img-fluid rounded-circle img-thumbnail"} src={mco} width="370" height="370"/>
          </div>
          <div className="col-10 col-md-8 px-0">
            <h1 className={"display-8 fst-italic text-warning font-smaller "}>About me</h1>
            <p className={"my-6 lead text-dark fw-bold"}>
                Creative, hard-worker, fast-learner and passionate network and electronics engineer.
                Aiming to escalate in order to become a Professional Full Stack Developer.
                Deep technical IT background, able to work with broad spectrum of technologies related with the TCP/IP stack, IoT, Security, Power and Electronics. 
            </p>
            <h1 className={"display-8 fst-italic text-warning font-smaller"}>My skills as a Full Stack Developer:</h1>
            <div className={"py-1 mt-auto text-dark text-center"}>
            <h1 className={"row text-center"}>
            <i class="fab fa-node-js icon"></i>
            <h3 className={"icon"}>Mongo DB</h3>
            <i class="fab fa-react icon"></i>
            <h3 className={"icon"}>MySQL</h3>
            <i class="fab fa-html5 icon"></i>
            </h1>
            </div>
            {icons.map((icon, index) => {return <h3 key={`icon-${index}`}>{icon}<icon/></h3>})}   
            
            <div className="row col-12 biginfo">
            <div className="col-6  px-0 bg-light text-center info">
            <h1 className={"display-8 fst-italic text-warning font-smaller "}>Education</h1>
            <p className={"my-6 lead text-dark fw-bold"}>
            <h4>Telecomunications and Electronics Engineer </h4>
            <h6>Universidad Tecnológica de La Habana "José Antonio Echeverría" [2012-2017]</h6>
            <hr></hr>
            <h4>Engineer Intern</h4>
            <h6>Florida Board of Professional Engineers [August, 2020]</h6>
            <hr></hr>
            <h4>Full Stack</h4>
            <h6>University of Miami [August, 2021</h6>
            </p>
          </div>
           <div className="col-6  px-0 bg-light text-center">
           <h1 className={"display-8 fst-italic text-warning font-smaller "}>Work Exerience</h1>
            <p className={"my-6 lead text-dark fw-bold"}>
            <h4>Partner Development Representative</h4>
            <h6>APC by Schneider Electric [March 2019-Present]</h6>
            <hr></hr>
            <h4>Product Manager</h4>
            <h6>Solution Box LLC [May 2018-March 2019]</h6>
            <hr></hr>
            <h4>Junior Network and Electronics Engineer</h4>
            <h6>Tecnomatica [Jun 2015-Dec 2017]</h6>
            </p>


           </div>


            </div>
            
          
          
          
          </div> 


          
            


        </div>
       </main>
     </div>  
 )
}

export default About;