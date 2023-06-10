import React, { useState,useEffect } from 'react'
import TaskProgress from '../components/Task/TaskProgress'
import '../stylePages/taskStyles/App.css'
import Recent from '../components/Task/Recent'
import Members from '../components/Task/Members'
import EachTask from '../components/Task/EachTask'
import TaskData from '../components/Task/TaskData'
import axios from 'axios';
import NewTasks from '../components/Task/NewTasks'


const Tasks = () => {
const [task, setTask] = useState(false)
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [date, setDate] = useState("")
const [member, setMember] = useState("")
const [taskData, setTaskData] = useState([])
const [success, setSuccess] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/task`, { name, description, date, member })
    console.log('Task saved successfully');
    setName('')
    setDescription('')
    setDate('')
    setMember("")
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
}, 3000);
  } catch (error) {
    console.error('Error saving task:', error);
  }
}

const handleName = (e) => {
  const nameValue = e.target.value
  setName(nameValue)
}
const handleDescription = (e) => {
  setDescription(e.target.value)
}

const handleDate = (e) => {
  const dateValue = e.target.value
  // const dateObject = new Date(dateValue)
  // const month = dateObject.toLocaleString( 'default', { month: 'short'}).substring(0,3)
  // const day = dateObject.getDate()
  // const dayAndMonth = day + " "+ month
  setDate(dateValue)
  
}
const handleMembers = (e) => {
  setMember(e.target.value)
}
const handleClick = (e) => {
  // e.preventDefault();
  setTask(!task)
  const taskDiv = document.querySelector(".task-window")
  taskDiv.scroll(0,0);
}

// disable scroll of body when booking window is displayed
useEffect(() => {
  if(task === true) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
},[task])


useEffect(() => {
  // fetch data from server
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/task`) 
      setTaskData(response.data)
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  fetchData()
  
}, [name, date])

// useEffect(() => {
//   // Log the names of projects
//   taskData.forEach((tasks) => {
//     console.log(tasks);
//   });
// }, []);

  return (
    <section className='tasks-section section'>
     
     <div 
        onClick={handleClick}
        className={`task-overlay ${task ? "active-task" : ""}`}>
      </div>

      <div className="container">
      
        <div className="create-project">
            <h1>Task Management </h1>
            <button type='submit' onClick={handleClick}>
              <i className="fa-sharp fa-solid fa-circle-plus"></i>
              Create Task
            </button>
        </div>

{/* Task creation Window */}
    <div className={`task-window ${task ? "active-task" : ""}`}>
          <div className="active-task-heading">
            <h3>Create Task</h3>
            <i className="fa-solid fa-x" onClick={handleClick}></i>
          </div>

{/* for success message after submitting */}
<div className={`success-message ${success ? "active-success" : ""}`}>
  <p>Task created successfully</p>
</div>


          <div className="active-task-details">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Task Name</label>
            <input type="text" name="name" id="name" value={name} onChange={handleName} required/>
            <label htmlFor="desc">Task Description</label>
            <input type="text" name="desc" id="desc" value={description} onChange={handleDescription} required/>
            <label htmlFor="member">Task Members</label>
            <select name="members" id="members" value={member} onChange={handleMembers} required>
              <option value=''>Select a member</option>
              <option value="John Doe">John Doe</option>
              <option value="Michael Myers">Michael Myers</option>
              <option value="Jordan Philip">Jordan Philip</option>
              <option value="Mary Joseph">Mary Joseph</option>
              <option value="Catherine Vil">Catherine Vil</option>
            </select>
            <label htmlFor="date">Task End Date</label>
            <input type="date" name="date" id="date" value={date} onChange={handleDate}  required/>
            <button type='submit'>Submit</button>
          </form>
          </div>
    </div>


        <div className="task-management">
          <TaskProgress />
          <Recent />
          <Members taskData={taskData}/>
        </div>

<div className="task-lists">
  <h3>In Progress </h3>
  <h3>Needs Review</h3>
  <h3>Completed</h3>
<EachTask data={TaskData} />
<NewTasks data={taskData} />
</div>
      </div>
    </section>
  )
}

export default Tasks
