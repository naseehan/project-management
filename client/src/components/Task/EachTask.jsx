import React from 'react';

const EachTask = ({ data,name }) => {

  return (
    <>
    {data.map((data, index, name) => (

            <div
                    className="each-task task-progress"
                    style={{ borderBottom: `3px solid ${data.color}` }}
                    draggable="true"
                    key={index}
            >
                <div className="task-assign">
                    <div className="task-title" style={{ backgroundColor: data.color}}>
                        <h5>{data.title}</h5>
                    </div>
                    <div className="assigned-member">
                        <span>{data.member}</span>
                    </div>
                </div>
                <p>{data.text}</p>
                <div className="icons">
                    <p>
                        <i className="fa-solid fa-flag"></i>
                        {data.date}
                    </p>
                    <p>
                        <i className="fa-solid fa-comment"></i>
                        {data.comment}
                    </p>
                    <p>
                         <i className="fa-solid fa-paperclip"></i>
                         {data.pin}
                    </p>
                </div>
            </div>


        ))}
    </>
  )
}

export default EachTask


