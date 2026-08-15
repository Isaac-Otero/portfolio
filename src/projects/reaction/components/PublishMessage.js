import React, {Component} from "react";
import { connect } from "react-redux";
import { PubSubContext } from "../pubsub";
import { newMessage } from "../actions/messages";

class PublishMessage extends Component {
  state={text:''};

  updateText = event => this.setState({text:event.target.value});

  publishMessage =() =>{
    const{text}=this.state;
    const{username}=this.props;

    if (!text.trim()) return;

    this.context.pubsub.publish(newMessage({text:text.trim(),username}));
    this.setState({text:''});
  }

  handleKeyDown = event =>{
    if(event.key ==='Enter') this.publishMessage();
  }
  
  render(){ 
    return(
      <div className="reaction-composer">
        <input
          aria-label="Message"
          placeholder="Message"
          value={this.state.text}
          onChange={this.updateText}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.publishMessage}>Send</button>
      </div>
    )
  }
  static contextType=PubSubContext;
}

//destructures and maps username
export default connect(({username}) => ({username}))(PublishMessage);
