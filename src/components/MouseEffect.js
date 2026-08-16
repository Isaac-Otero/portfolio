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
    const overlapWidth = Math.max(
      0,
      Math.min(effectRect.right, targetRect.right) - Math.max(effectRect.left, targetRect.left)
    );
    const overlapHeight = Math.max(
      0,
      Math.min(effectRect.bottom, targetRect.bottom) - Math.max(effectRect.top, targetRect.top)
    );
    const overlapArea = overlapWidth * overlapHeight;
    const effectArea = effectRect.width * effectRect.height;
    const targetArea = targetRect.width * targetRect.height;
    const overlapRatio = Math.min(
      effectArea && overlapArea / effectArea,
      targetArea && overlapArea / targetArea
    );
    const revealThreshold = this.props.revealThreshold || 0.34;
    const hideThreshold = this.props.hideThreshold || 0.16;

    const isOverlapping = this.state.isOverlapping
      ? overlapRatio > hideThreshold
      : overlapRatio >= revealThreshold;

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
