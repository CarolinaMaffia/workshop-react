import React, { Component } from 'react';
import ProfilePic from './profile-pic.jpg'
import './profile.css';


class Profile extends Component{
    render(){
        return (
            <div className="profile"> 
                <img className="profile-pic" src={ProfilePic} alt="profle-pic"></img>
                    <div className="title">
                        <h2>Carolina Maffia</h2>
                        <h3>Junior Front-End Developer</h3>
                    </div>   
            </div>   
        )
    }
}

export default Profile;