import axios from 'axios'
import React from 'react'

const NewProjects = ({ data, setRetrievedProjects }) => {

    // const handleRemoveProject = (_id) => {
    //     setRetrievedProjects((prevRetrievedProjects) =>
    //     prevRetrievedProjects.filter((project) => project._id !== _id)
    //     )
    // }

const handleRemoveProject = async ( _id ) => {
    try{
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/projects/${_id}`,{
            data: {
                _id: _id
            }
        })
        setRetrievedProjects((prevRetrievedProjects) => 
            prevRetrievedProjects.filter((project) => project._id !== _id)
        )
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}


const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
const day = String(today.getDate()).padStart(2, '0');

const todayDate = `${year}-${month}-${day}`;

console.log(todayDate);

return (
<>
{data.map(( data ) => (
    <div className="projects-box" key={data._id}>

    <div className="heading">
        <h3>{data.name}</h3>
        <div className="del-create">
            <button className="fa-solid fa-pen-to-square"></button>
            <button className="fa-solid fa-trash" onClick={() => handleRemoveProject(data._id)}></button>
        </div>
    </div>


    <div className="project-details">
        <div className='each-details'>
            <i className='fa-solid fa-paperclip'></i>
            <p>5 Attach</p>
        </div>
        <div className='each-details'>
            <i class="fa-solid fa-hourglass-start"></i>
            <p>3 Months</p>
        </div>
        <div className='each-details'>
            <i class="fa-solid fa-user-group"></i>
            <p>{data.members} Members</p>
        </div>
        <div className='each-details'>
            <i className='fa-solid fa-message'></i>
            <p>7 </p>
        </div>
    </div>


    <div className="progress">
        <span>Progress</span>
        {/* compare todays date with user selected date the result is
         in millieseconds so add calculation in end to make it in days  */}
        <p>{Math.floor(new Date(data.date) - new Date(todayDate)) /(1000 * 60 * 60 * 24)} days left</p>
    </div>


</div>
))}
</>
  )
}

export default NewProjects