import React, { Component } from "react";
class MouseEffect extends Component {
    state = {
        left: 0,
        top: 0
    }
    componentDidMount() {
        document.addEventListener('mousemove', (event) => {
            //const{pageX,pageY}=event;
            this.setState({ left: event.pageX, top: event.pageY });
        });
    }
    render() {
        return (
            <div style={{ left: this.state.left, top: this.state.top }} className="backColor">
            </div>
        )
    }
}
export default MouseEffect;