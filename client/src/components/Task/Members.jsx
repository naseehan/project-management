import React, { useState } from 'react';
import avatar from '../../assets/employeeImg/avatar.jpg';
import avatar2 from '../../assets/employeeImg/avatar2.jpg';
import avatar3 from '../../assets/employeeImg/avatar3.jpg';
import avatar4 from '../../assets/employeeImg/avatar4.jpg';
import avatar5 from '../../assets/employeeImg/avatar5.jpg';

const Members = ({ taskData }) => {
  const [memberList, setMemberList] = useState([
    
    { _id: 1, member: 'Lucinda Mass', name: 'Ui/UX Designer', avatar: avatar },
    { _id: 2, member: 'Ryan Nolan', name: 'Website Designer', avatar: avatar2 },
    { _id: 3, member: 'Oliver Black', name: 'App Developer', avatar: avatar3 },
    { _id: 4, member: 'Adam Walker', name: 'Quality Checker', avatar: avatar4 },
    { _id: 5, member: 'Brian Skinner', name: 'Tester', avatar: avatar5 },
    taskData.map((task) => ({
      _id:task._id,
      name:task.name,
      member:task.member,
      avatar:avatar,
    }))
  ]);

  const handleRemoveMember = (_id) => {
    setMemberList((prevMemberList) =>
      prevMemberList.filter((member) => member._id !== _id)
    );
  };



  return (
    <>
      <div className="task-progress">
        <h2>Allocated Task Members</h2>

        {memberList.map((member) => (
          <div className="each-member" key={member._id}>
            <img src={member.avatar} alt="profile" />
            <div className="member-details">
              <h3>{member.member}</h3>
              <p>{member.name}</p>
            </div>
            <div className="remove-btn">
              <button onClick={() => handleRemoveMember(member._id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Members;
