import React from 'react'

const Employees = (props) => {
  return (
    <>


            {props.data.map((data) => (
            <div className="employee-details">

                <div className="employee-img">
                    <img src={data.avatar} alt="employee-pic" />
                </div>
                <h5>{data.name}</h5>
                <p>{data.userName}</p>
                <h1>{data.completed}</h1>
            </div>
            ))}

</>
  )
}

export default Employees