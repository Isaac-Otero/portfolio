import React, { Component } from "react";

class MouseEffect extends Component {
  state = {
    left: 0,
    top: 0,
    isOverlapping: false
  }

  effectRef = React.createRef();

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.setState(
      { left: event.clientX, top: event.clientY },
      this.checkCollision
    );
  };

  checkCollision = () => {
    const targetEl = this.props.targetRef?.current;
    const effectEl = this.effectRef.current;

    if (!targetEl || !effectEl) return;

    const targetRect = targetEl.getBoundingClientRect();
    const effectRect = effectEl.getBoundingClientRect();

    const isOverlapping = !(
      effectRect.right < targetRect.left ||
      effectRect.left > targetRect.right ||
      effectRect.bottom < targetRect.top ||
      effectRect.top > targetRect.bottom
    );

    if (isOverlapping !== this.state.isOverlapping) {
      this.setState({ isOverlapping });
      this.props.onOverlapChange?.(isOverlapping);
    }
  };

  render() {
    return (
      <div
        id="mouse-effect"
        ref={this.effectRef}
        style={{ left: this.state.left, top: this.state.top }}
        className="backColor"
      />
    )
  }
}

export default MouseEffect;
