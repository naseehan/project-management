import React from 'react'
import interview from '../../assets/home/interview.svg'
const Applications = () => {
  return (
    <>
           <div className="application-interview">
            <div>
            <i className="fa-solid fa-file-lines fa-2xl"></i>
                <h1>1531</h1>
                <p>Applications</p>
            </div>
            <div className='application-img'>
                <img src={interview} alt="" />
            </div>
            </div> 
    </>
  )
}

export default Applications