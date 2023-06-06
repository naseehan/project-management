// import React, { useState } from 'react';

// const NewTasks = (props) => {
//   const [activeId, setActiveId] = useState(null);
//   const [memberName, setMemberName] = useState('');
//   const [afterSubmit, setAfterSubmit] = useState(false)
//   // const [showConfirm, setShowConfirm] = useState(true)

//   const handleMember = (id, name) => {
//     setActiveId(id === activeId ? null : id);
//     // setMemberName(name);
//     setAfterSubmit(!afterSubmit)
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // setMemberName(memberName.substring(0,2));
//     setActiveId(null); // Reset activeId to hide the confirmation section
//     setAfterSubmit(!afterSubmit)
//     // setShowConfirm(!showConfirm)
//   };

//   return (
//     <>
//       {props.data.map((data, index) => (
//         <div
//           className="each-task task-progress"
//           style={{ borderBottom: '3px solid rgb(238, 229, 255)' }}
//           draggable="true"
//           key={index}
//         >
//           <div className="task-assign" >
//             <div className="task-title" style={{ backgroundColor: 'rgb(168, 215, 224)' }}>
//               <h5>
//                 {data.name}
//               </h5>
//             </div>
//             <div id={data._id} className="assigned-member" onClick={() => handleMember(data._id, data.name)}>
//             {afterSubmit ? (
//                 <span>{memberName.substring(0,2)}</span>
//               ) : (
//                 <i className="fa-solid fa-user"></i>
//               )}
              
//             </div>
//           </div>
//           {/* if activeId and data._id are same show this div */}
//           {activeId === data._id && (
//             <div className="person-confirm member-confirm">
//               <form action="" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Assignee</label>
//                 <input type="text" name="name" id="name" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
//                 <button type="submit">Confirm</button>
//               </form>
//             </div>
//           )}
//           <p>{data.description}</p>
//           <div className="icons">
//             <p>
//               <i className="fa-solid fa-flag"></i>
//               {data.date}
//             </p>
//             <p>
//               <i className="fa-solid fa-comment"></i>
//               3
//             </p>
//             <p>
//               <i className="fa-solid fa-paperclip"></i>
//               7
//             </p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default NewTasks;


// import React, { useState } from 'react';

// const NewTasks = (props) => {
//   const [activeId, setActiveId] = useState(null);
//   const [memberName, setMemberName] = useState('');

//   const handleMember = (id, name) => {
//     setActiveId(id === activeId ? null : id);
//     setMemberName('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setActiveId(null);
//     if (memberName) {
//       setMemberName(memberName.substring(0, 2));
//     }
//   };

//   return (
//     <>
//       {props.data.map((data, index) => (
//         <div
//           className="each-task task-progress"
//           style={{ borderBottom: '3px solid rgb(238, 229, 255)' }}
//           draggable="true"
//           key={index}
//         >
//           <div className="task-assign">
//             <div className="task-title" style={{ backgroundColor: 'rgb(168, 215, 224)' }}>
//               <h5>{data.name}</h5>
//             </div>
//             <div id={data._id} className="assigned-member" onClick={() => handleMember(data._id, data.name)}>
//               {activeId === data._id ? (
//                 <span>{memberName.substring(0, 2)}</span>
//               ) : (
//                 <i className="fa-solid fa-user"></i>
//               )}
//             </div>
//           </div>
//           {/* if activeId and data._id are same show this div */}
//           {activeId === data._id && (
//             <div className="person-confirm member-confirm">
//               <form action="" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Assignee</label>
//                 <input type="text" name="name" id="name" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
//                 <button type="submit">Confirm</button>
//               </form>
//             </div>
//           )}
//           <p>{data.description}</p>
//           <div className="icons">
//             <p>
//               <i className="fa-solid fa-flag"></i>
//               {data.date}
//             </p>
//             <p>
//               <i className="fa-solid fa-comment"></i>
//               3
//             </p>
//             <p>
//               <i className="fa-solid fa-paperclip"></i>
//               7
//             </p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default NewTasks;


// import React, { useState } from 'react';

// const NewTasks = (props) => {
//   const [activeId, setActiveId] = useState(null);
//   const [memberName, setMemberName] = useState('');
//   const [afterSubmit, setAfterSubmit] = useState(false);

//   const handleMember = (id, name) => {
//     setActiveId(id === activeId ? null : id);
//     setMemberName('');
//     setAfterSubmit(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setActiveId(null);
//     setAfterSubmit(true);
//   };

//   const handleChange = (e) => {
//     setMemberName(e.target.value);
//   };

//   return (
//     <>
//       {props.data.map((data, index) => (
//         <div
//           className="each-task task-progress"
//           style={{ borderBottom: '3px solid rgb(238, 229, 255)' }}
//           draggable="true"
//           key={index}
//         >
//           <div className="task-assign">
//             <div className="task-title" style={{ backgroundColor: 'rgb(168, 215, 224)' }}>
//               <h5>{data.name}</h5>
//             </div>
//             <div id={data._id} className="assigned-member" onClick={() => handleMember(data._id, data.name)}>
//               {afterSubmit ? <span>{memberName.substring(0, 2)}</span> : <i className="fa-solid fa-user"></i>}
//             </div>
//           </div>
//           {activeId === data._id && (
//             <div className="person-confirm member-confirm">
//               <form action="" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Assignee</label>
//                 <input type="text" name="name" id="name" value={memberName} onChange={handleChange} />
//                 <button type="submit">Confirm</button>
//               </form>
//             </div>
//           )}
//           <p>{data.description}</p>
//           <div className="icons">
//             <p>
//               <i className="fa-solid fa-flag"></i>
//               {data.date}
//             </p>
//             <p>
//               <i className="fa-solid fa-comment"></i>
//               3
//             </p>
//             <p>
//               <i className="fa-solid fa-paperclip"></i>
//               7
//             </p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default NewTasks;


import React, { useState } from 'react';

const NewTasks = (props) => {
  const [activeId, setActiveId] = useState(null);
  const [memberName, setMemberName] = useState({});
  const [afterSubmit, setAfterSubmit] = useState(false);

  const handleMember = (id, name) => {
    setActiveId(id === activeId ? null : id);
    setMemberName((prevMemberName) => {
      if (id === activeId && afterSubmit) {
        return {
          ...prevMemberName,
          [id]: memberName,
        };
      } else {
        return {
          ...prevMemberName,
          [id]: '',
        };
      }
    });
    setAfterSubmit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveId(null);
    setAfterSubmit(true);
  };

  const handleChange = (e) => {
    setMemberName((prevMemberName) => ({
      ...prevMemberName,
      [activeId]: e.target.value,
    }));
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
          <div className="task-assign">
            <div className="task-title" style={{ backgroundColor: 'rgb(168, 215, 224)' }}>
              <h5>{data.name}</h5>
            </div>
            <div id={data._id} className="assigned-member" onClick={() => handleMember(data._id, data.name)}>
              {afterSubmit && activeId === data._id ? (
                <span>{memberName[data._id].substring(0, 2)}</span>
              ) : (
                <i className="fa-solid fa-user"></i>
              )}
            </div>
          </div>
          {activeId === data._id && (
            <div className="person-confirm member-confirm">
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Assignee</label>
                <input type="text" name="name" id="name" value={memberName[activeId] || ''} onChange={handleChange} />
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
