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

    this.context.pubsub.publish(newMessage({text:this.state.text,username}));
  }

  handleKeyPress = event =>{
    if(event.key ==='Enter') this.publishMessage();
  }
  
  render(){ 
    return(
      <div className="text-center text-white">
        <h3>What do you want to say?</h3>
        <input className="border rounded-lg text-white" onChange={this.updateText} onKeyPress={this.handleKeyPress} />
        {' '} 
        <button onClick={this.publishMessage}> Send it!</button>
      </div>
    )
  }
  static contextType=PubSubContext;
}

//destructures and maps username
export default connect(({username}) => ({username}))(PublishMessage);