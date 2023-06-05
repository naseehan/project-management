import React from 'react'

const Availability = () => {
  return (
    <>
        <div className="container">
            <h4>Employees Availability</h4>
            <div className="availability">
                <div className='avail-list'>
                <i className="fa-regular fa-square-check fa-2xl"></i>                    <h4>Attendance</h4>
                    <p>400</p>
                </div>
                <div className='avail-list'>
                <i className="fa-solid fa-stopwatch fa-2xl"></i>
                    <h4>Late Coming</h4>
                    <p>17</p></div>
                <div className='avail-list'>
                <i className="fa-solid fa-ban fa-2xl"></i>
                    <h4>Absent</h4>
                    <p>06</p>
                </div>
                <div className='avail-list'>
                <i className="fa-solid fa-umbrella-beach fa-2xl"></i>
                    <h4>Leave Apply</h4>
                    <p>14</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Availability