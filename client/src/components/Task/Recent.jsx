import React from 'react'

const Recent = () => {
  return (
    <>
        
        <div className="task-progress">
            <h2>Recent Activity</h2>

            <div className="each-activity tbh">
                <div className="timeline-info ti-item">
                    <span>RH</span>
                    <div className="activity-details">
                        <h4>Rechard Add New Task</h4>
                        <p>20Min ago</p>
                    </div>
                </div>
            </div>

            <div className="each-activity tbh">
                <div className="timeline-info ti-item1">
                    <span>RH</span>
                    <div className="activity-details">
                        <h4>Shilpa Review Completed</h4>
                        <p>40Min ago</p>
                    </div>
                </div>
            </div>

            <div className="each-activity tbh">
                <div className="timeline-info ti-item2">
                    <span>RH</span>
                    <div className="activity-details">
                        <h4>John Task To Completed</h4>
                        <p>1Hr ago</p>
                    </div>
                </div>
            </div>

            <div className="each-activity tbh">
                <div className="timeline-info ti-item3">
                    <span>RH</span>
                    <div className="activity-details">
                        <h4>Ben Add New Task</h4>
                        <p>1Day ago</p>
                    </div>
                </div>
            </div>

            <div className="each-activity tbh">
                <div className="timeline-info ti-item4">
                    <span>RH</span>
                    <div className="activity-details">
                        <h4>Doe Task pending</h4>
                        <p>35Min ago</p>
                    </div>
                </div>
            </div>


        </div>
    </>
  )
}

export default Recent