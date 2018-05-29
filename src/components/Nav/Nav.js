import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import App from '../../App';

class Nav extends Component {

    render(){
        return(
                <nav>
                    <div className="list">
                        <ul>
                            <li className="work"><Link to="/">My Work</Link></li>
                            <li className="contact"><Link to="/">Contact </Link></li>
                            <li className="about"><Link to="/about">About Me</Link></li>
                            <div className="line"></div>
                            </ul>
                    </div>
                </nav>
        )
    }
}

export default Nav;