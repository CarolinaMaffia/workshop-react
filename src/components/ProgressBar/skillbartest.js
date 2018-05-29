import React, { Component } from "react";
import PropTypes from "prop-types";

const ANIMATION_TIMING = 1000;

const STYLES = {
  SKILL_BAR_CONTAINER: {
    width: "100%",
    height: "10px",
    background: "#E1E1E1",
    borderRadius: "0.3em"
  },
  SKILL_BAR_INNER: {
    position: "relative",
    height: "10px",
    float: "left",
    background: "#e55d87",
    transition: `width ${ANIMATION_TIMING}ms ease-in-out`,
    width: "0",
    borderRadius: "0.3em"
  },
  SKILL_BUBBLE: {
    fontSize: "0.75em",
    lineHeight: "2em",
    position: "absolute",
    background: "#a487b2",
    top: "-3em",
    right: "0",
    textAlign: "center",
    minWidth: "3em",
    borderRadius: "0.3em",
    color: "white",
    opacity: "0",
    transition: "opacity .5s ease-in-out"
  }
};

export default class SkillBar extends Component {
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
    setTimeout(() => this.setState({ done: true }), ANIMATION_TIMING);
  };

  render() {
    const { title, percentage } = this.props;
    const STYLES_BAR_WITH_WIDTH = {
      ...STYLES.SKILL_BAR_INNER,
      ...{ width: `${this.state.percentage}%` }
    };
    const STYLES_SKILL_BUBBLE_OPACITY = {
      ...STYLES.SKILL_BUBBLE,
      ...{ opacity: Number(this.state.done) }
    };
    return (
      <div>
        <p>{title}</p>
        <div style={STYLES.SKILL_BAR_CONTAINER}>
          <div style={STYLES_BAR_WITH_WIDTH}>
            <div style={STYLES_SKILL_BUBBLE_OPACITY}>{percentage}%</div>
          </div>
        </div>
      </div>
    );
  }
}
