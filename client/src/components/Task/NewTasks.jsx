import React, { useState } from 'react';

const NewTasks = (props) => {
  const [activeId, setActiveId] = useState(null);


  return (
    <>
      {props.data.map((data, index) => (
        <div
          className="each-task task-progress"
          style={{ borderBottom: '3px solid rgb(238, 229, 255)' }}
          draggable="true"
          key={index}
        >
          <div className="task-assign">
            <div className="task-title" style={{ backgroundColor: 'rgb(168, 215, 224)' }}>
              <h5>{data.name}</h5>
            </div>
            <div id={data._id} className="assigned-member"
             >
              
              <span>{data.member.split(" ").map((part) => part[0]).join("")}</span>
            </div>
          </div>

          <p>{data.description}</p>
          <div className="icons">
            <p>
              <i className="fa-solid fa-flag"></i>
              {data.date}
            </p>
            <p>
              <i className="fa-solid fa-comment"></i>
              3
            </p>
            <p>
              <i className="fa-solid fa-paperclip"></i>
              7
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewTasks;



