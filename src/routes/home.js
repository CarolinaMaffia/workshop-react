import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import Waves from '../components/Waves/Waves';
import Nav from '../components/Nav/Nav';
import './home.css';

class Home extends Component{
    render(){
        return (
            <div className="cont"> 
                <Nav />
                <Profile />
                <Waves />
            </div>
        )
    }
}
export default Home;



