import React, { Component } from 'react';
import PropTypes from "prop-types";

import './progressBar.css';



class ProgressBar extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
      };
      state = {
        percentage: 0,
        done: false
      };
    
      componentDidMount() {
        setTimeout(this.animateBar);
      }
    
      animateBar = () => {
        const { percentage } = this.props;
        this.setState({ percentage }, this.showBubble);
      };
    
      showBubble = () => {
        setTimeout(() => this.setState({ done: true }));
      };
    
      render() {
        const { title, percentage } = this.props;
        const WIDTH = {
            ...{ width: `${this.state.percentage}%` }
          };
        const BUBBLE = {
            ...{ opacity: Number(this.state.done) }
        }
        return (
          <div className="progressBar">
            <h4>{title}</h4>
            <div className="progressBarcontainer">
              <div className="progressBarValue" style={WIDTH}>
                <div className="speech-bubble" style={BUBBLE}>{percentage}%</div>
              </div>
            </div>
          </div>
        );
      }
}

export default ProgressBar;