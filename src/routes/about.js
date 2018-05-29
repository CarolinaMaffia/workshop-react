import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import SideWaves from '../components/SideWaves/SideWaves';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Nav from '../components/Nav/Nav';
import './about.css';

class About extends Component{
    render(){
        return (
            <div className="container">
            <div className="sidebar">
                <Profile />
                <SideWaves />
            </div>
            <div className="information">
                    <div className="info-container">
                        <Nav />
                        <div className="about">
                            <h2> About Me</h2>
                            <p> Hi there! I'm Carolina Maffia, and I'm a 23 years old Front-end developer student who lives in Buenos Aires, Argentina. When I'm not working I spend my free time learning all the stuff I can about software development, drinking a lot of coffee and playing videogames. </p>
                            <p><span className="parraf"> With great javascript skills comes great responsibility. My goal is to learn everything I can about JavaScript to became a better developer.</span></p>
                        </div>
                        <div className="">
                            <h2> Skills</h2>
                            <ProgressBar title="Html" percentage={90} />
                            <ProgressBar title="Css" percentage={80} />
                            <ProgressBar title="JavaScript" percentage={60} />
                            <ProgressBar title="React" percentage={50} />
                            <ProgressBar title="Jquery" percentage={40} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;