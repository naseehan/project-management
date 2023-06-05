import React from 'react'
import '../stylePages/homeStyles/App.css'
import Employees from '../components/Project/Employees'
import EmployeeData from '../components/Project/EmployeeData'
import Availability from '../components/Home/Availability'
import EmployeeChart from '../components/Home/EmployeeChart'
import Applications from '../components/Home/Applications'
import InterviewHired from '../components/Home/InterviewHired'
const Home = () => {
  return (
    <section className="home-section section">
        <div className="container">


            <div className="home-page">
                <div className="home-info">
                        <Availability />
                </div>
                <div className="home-img">
                        <h4>Total Employees</h4>
                        <EmployeeChart />
                </div>
                <div className="home-application">
                    <Applications />
                    <InterviewHired />
                </div>
            </div>


    <div className="project-math">
        <span>Top Perfrormers</span>
        <p>You have 140 <span>influencers</span> in your company.</p>
    
    <div className="project-facts">
        <div>
            <h1>350</h1>
            <p>New tasks</p>
        </div>
        <div>
            <h1>130</h1>
            <p>Tasks completed</p>
        </div>
    </div>
    
        <div className="full-employee-details">
                <Employees data={EmployeeData} />
        </div>
    </div>

</div>
</section>
  )
}

export default Home