import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import SideWaves from '../components/SideWaves/SideWaves';
import Nav from '../components/Nav/Nav';
import './contact.css';

class Contact extends Component{
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
                            <h2> Contact </h2>
                            <p> Lorem </p>
                        </div>
                        <div className="contact-form">
                            <div className="nameInput">
                                <label for="nameInput">Name</label>
                                <input type="text" name="name" placeholder="Name" />
                            <div/>
                            <div className="emailInput">
                                <label for="emailInput">Email</label>
                                <input  type="email" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Contact;