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
        await axios.delete(`http://localhost:3001/projects/${_id}`,{
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
        <p>93 days left</p>
    </div>


</div>
))}
</>
  )
}

export default NewProjects