import React from 'react'
import styles from './Projects.module.css'
import { getImageUrl } from '../../utils'
import projects from '../../data/projects.json'

export const Projects = () => {
  return <section className={styles.container} id='projects'>
    <h2>PROJECTS</h2>
    <ul className={styles.projects}>
        {projects.map((project,id)=>{
            return <div key={id} className={styles.projectCard}> 
                <img src={getImageUrl(project.imageSrc)} alt={`${project.title}`} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                    {project.skills.map((skill, id) => {
                        <li key={id}>{skill}</li>
                    })}
                </ul>
                <div className={styles.git}>
                    <a href={project.source}>Github</a>
                </div>
            </div>
        })}
    </ul>
  </section>
}
