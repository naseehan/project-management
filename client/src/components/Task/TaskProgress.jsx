import React from 'react'

const TaskProgress = () => {
  return (
    <>
        
        <div className="task-progress">
            <h2>Task progress</h2>
            
                <div className="each-progress">
                    <div className="progress-title">
                        <h4>UI/UX Design</h4>
                        <p>02/07</p>
                    </div>
                    <div className="main-progress-bar">
                        <div className="progress-bar"></div>
                </div>
                </div>


                <div className="each-progress">
                    <div className="progress-title">
                        <h4>Website Design</h4>
                        <p>01/03</p>
                    </div>
                    <div className="main-progress-bar">
                        <div className="progress-bar p1"></div>
                </div>
                </div>


                <div className="each-progress">
                    <div className="progress-title">
                        <h4>Quality Assurance</h4>
                        <p>02/07</p>
                    </div>  
                    <div className="main-progress-bar">
                        <div className="progress-bar p2"></div>
                    </div>
                    </div>


                <div className="each-progress">
                    <div className="progress-title">
                        <h4>Development</h4>
                        <p>01/05</p>
                    </div>
                    <div className="main-progress-bar">
                        <div className="progress-bar p3"></div>
                </div>
                </div>


                <div className="each-progress">
                    <div className="progress-title">
                        <h4>Testing</h4>
                        <p>01/08</p>
                    </div>
                    <div className="main-progress-bar">
                        <div className="progress-bar p4"></div>
                </div>
                </div>


        </div>
    </>
  )
}

export default TaskProgress