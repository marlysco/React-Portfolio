import React from 'react';

export default function Portfolio(props) {
        return (
            <div className='card'>
            {props.projects.map((project) => {
            return (
            <div className="row" key={project.id}>
            <div><strong>{project.name}</strong></div>
            <img alt={project.name} src={project.picture} width='300px' height='300px' className='card-imag-top'/>
            <div>{project.description}</div>
            <div>{project.link}</div>
            </div> 
            )})}
            </div> 
            )
}