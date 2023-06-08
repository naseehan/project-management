import React, { useState,useEffect } from 'react'
import EachProjects from '../components/Project/EachProjects'
import '../stylePages/projectStyles/App.css'
import ProjectData from '../components/Project/ProjectData'
import axios from 'axios'
import NewProjects from '../components/Project/NewProjects'

const Projects = () => {

  const [project, setProject] = useState(false)
  const [name,setName] = useState("")
  const [members, setMembers] = useState("")
  const [date, setDate] = useState("")
  const [retrievedProjects, setRetrievedProjects] = useState([])
  const [success, setSuccess] = useState(false)


  const handleClick = (e) => {
    e.preventDefault()
    setProject(!project)
    const taskDiv = document.querySelector(".task-window")
    taskDiv.scroll(0,0);
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleMembers = (e) => {
    setMembers(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }

// disable scroll of body when booking window is displayed
useEffect(() => {
  if(project === true) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
},[project])

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/projects`, { name, members, date })
    console.log('Task saved successfully');
    setName('')
    setMembers('')
    setDate('')
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000);
  } catch (error) {
    console.error('Error saving task:', error);
  }
}

useEffect(() => {
  // fetch project data from server
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/projects`)
      setRetrievedProjects(response.data)
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }
  fetchData()
  
}, [name, date])

// useEffect(() => {
//   // Log the names of projects
//   retrievedProjects.forEach((project) => {
//     console.log(project._id);
//   });
// }, []);


  return (
    <section className="project-section section">

      <div 
        onClick={handleClick}
        className={`task-overlay ${project ? "active-task" : ""}`}>
      </div>

        <div className="container">
          <div className="create-project">
                <h1>Projects</h1>
                <button type='submit' onClick={handleClick}>
                <i className="fa-sharp fa-solid fa-circle-plus">  </i>
                   Create Project
                </button>
          </div>

{/* Project creation Window */}
<div className={`task-window ${project ? "active-task" : ""}`}>
          <div className="active-task-heading">
            <h3>Create Project</h3>
            <i class="fa-solid fa-x" onClick={handleClick}></i>
          </div>


{/* for success message after submitting */}
<div className={`success-message ${success ? "active-success" : ""}`}>
  <p>Project created successfully</p>
</div>


          <div className="active-task-details">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" id="name" value={name} onChange={handleName} required/>
            <label htmlFor="desc">Members Needed</label>
            <input type="number" name="members" id="members" value={members} onChange={handleMembers} required/>
            <label htmlFor="date">Project End Date</label>
            <input type="date" name="date" id="date" value={date} onChange={handleDate} required/>
            <button type='submit'>Submit</button>
          </form>
          </div>
    </div>



            <div className="all-projects">
                    <EachProjects data={ProjectData}/>
                    <NewProjects data={retrievedProjects} setRetrievedProjects={setRetrievedProjects}/>
            </div>
        </div>
    </section>
  )
}

export default Projects
