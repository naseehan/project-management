import React, { useState } from 'react';

const NewTasks = (props) => {
  const [activeId, setActiveId] = useState(null);
  const [memberName, setMemberName] = useState('');
  const [afterSubmit, setAfterSubmit] = useState(false)
  const [showConfirm, setShowConfirm] = useState(true)

  const handleMember = (id, name) => {
    setActiveId(id === activeId ? null : id);
    // setMemberName(name);
    setAfterSubmit(!afterSubmit)
    console.log(afterSubmit+ " after submit");
    console.log(activeId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setMemberName(memberName.substring(0,2));
    // setActiveId(activeId); // Reset activeId to hide the confirmation section
    setAfterSubmit(!afterSubmit)
    console.log(afterSubmit+ " after submit");
    setShowConfirm(!showConfirm)
  };

  return (
    <>
      {props.data.map((data, index) => (
        <div
          className="each-task task-progress"
          style={{ borderBottom: '3px solid rgb(238, 229, 255)' }}
          draggable="true"
          key={index}
        >
          <div className="task-assign" >
            <div className="task-title" style={{ backgroundColor: 'rgb(168, 215, 224)' }}>
              <h5>
                {data.name}
              </h5>
            </div>
            <div id={data._id} className="assigned-member" onClick={() => handleMember(data._id, data.name)}>
            {afterSubmit ? (
                <span>{memberName.substring(0,2)}</span>
              ) : (
                <i className="fa-solid fa-user"></i>
              )}
              
            </div>
          </div>
          {/* if activeId and data._id are same show this div */}
          {activeId === data._id && (
            <div className="person-confirm member-confirm">
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Assignee</label>
                <input type="text" name="name" id="name" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
                <button type="submit">Confirm</button>
              </form>
            </div>
          )}
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
