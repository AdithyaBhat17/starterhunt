import React from 'react'

export default function Card(props){
    const { project } = props
    return (
        <a
         href={`https://kickstarter.com${project.url}`} 
         key={project['s.no']} 
         className="thumbnail"
         target="_blank"
         rel="noopener noreferrer"
        >
            <h1>{project.title}</h1>
            <p>{project.blurb}</p>
            <small><i className="fas fa-user"></i> {project.by} 
                &nbsp; <i className="fas fa-map-marker"></i> {project.location.replace(' ','')},&nbsp;{project.country}
                &nbsp; <i className="fas fa-calendar-alt"></i> {project['end.time'].slice(0,10)}
            </small>
            <p style={{marginTop:'5px'}}><strong>Amount pledged:</strong> {project.currency === 'usd'
             ? <i className="fas fa-dollar-sign"></i>
             : (project.currency === 'eur' ? <i className="fas fa-euro-sign"></i> : <i className="fas fa-pound-sign"></i>)
            } {project['amt.pledged']} by {project['num.backers']} backers</p>
        </a> 
    )
}