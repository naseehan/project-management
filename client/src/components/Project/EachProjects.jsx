import React, { useState,useEffect } from 'react'
import projectData from './ProjectData'

const EachProjects = (props) => {

const [projectList, setProjectList] = useState(projectData)
const [editProject, setEditProject] = useState(false)
const [name, setName] = useState("")
const handelEditProject = (e) => {
    e.preventDefault()
    setEditProject(!editProject)
}

const handleRemoveProject = (id) => {
    setProjectList((prevProjectList) =>
        prevProjectList.filter((project) => project.id !== id)
    )
}

const handleSubmit = (e) => {
    e.preventDefault()
    setName(name)
}

useEffect(() => {
    if(editProject === true) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
} ,[editProject])


  return (
    <>
        <div 
        onClick={handelEditProject}
        className={`task-overlay ${editProject ? "active-task" : ""}`}>
      </div>
{projectList.map((project) => (
        <div className="projects-box"  key={project.id}>
            <div className="heading">
                <h3>{project.title} {name}</h3>
                <div className="del-create">
                    <button className="fa-solid fa-pen-to-square" onClick={handelEditProject}></button>
                    <button className="fa-solid fa-trash" onClick={() => handleRemoveProject(project.id)}></button>
                </div>
            </div>

            <div className="project-details">
                <div className='each-details'>
                    <i className='fa-solid fa-paperclip'></i>
                    <p>{project.attatch} Attach</p>
                </div>
                <div className='each-details'>
                    <i class="fa-solid fa-hourglass-start"></i>
                    <p>  {project.time} Months</p>
                </div>
                <div className='each-details'>
                    <i class="fa-solid fa-user-group"></i>
                    <p>  {project.members} Members</p>
                </div>
                <div className='each-details'>
                    <i className='fa-solid fa-message'></i>
                    <p> {project.comments} </p>
                </div>
            </div>
            <div className="progress">
                <span>Progress</span>
                <p>  {project.days} days left</p>
            </div>
        </div>
 ))} 

{/* edit project window */}
<div className={`task-window ${editProject ? "active-task" : ""}`}>
<div className="active-task-heading">
            <h3>Edit Project</h3>
            <i class="fa-solid fa-x" onClick={handelEditProject}></i>
          </div>
          <div className="active-task-details">
          <form action=""
           onSubmit={handleSubmit}
           >
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" id="name"
             value={name}
             onChange={(e) => setName(e.target.value)}
             />
             <label htmlFor="attatch">Attatchments</label>
            <input type="number" name="attatch" id="attatch"/>
            <label htmlFor="Period">Project Period</label>
            <input type="number" name="Period" id="Period"/>
            <label htmlFor="desc">Members Needed</label>
            <input type="number" name="members" id="members"
            //  value={members}
            //  onChange={handleMembers}
             />
            <button type='submit'>Submit</button>
          </form>
          </div>
</div>


    </>
  )
}

export default EachProjects