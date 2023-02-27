import React from "react";
import PROJECTS from "../data/projects";

const Project=props=>{
    //similar as declaring each individually
    const{title,image,description,link}=props.project;
    return(
        <div style={{ display: 'inline-block',width:300,margin:10}}>
            <h3>{title}</h3>
            <a href ={link} className="project">
            <img src={image} alt='profile' style={{width:200, height:300}} />
            </a>
            <p>{description} </p>    
        </div>
    )
    
}

const Projects=() =>(
    
        
            <div>
                <h2> Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => (
                            <Project key={PROJECT.id} project={PROJECT} />  
                        ))
                    }
                </div>
            </div>
        
    
)
export default Projects;