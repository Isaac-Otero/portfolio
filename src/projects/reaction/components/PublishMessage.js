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
            <div>
                <h3>  What you wanna say?</h3>
                <input style={{color:'black'}} onChange={this.updateText} onKeyPress={this.handleKeyPress} />
                {' '}
                <button onClick={this.publishMessage} style={{color:'black'}}> Send it!</button>
            </div>
        )
    }
    static contextType=PubSubContext;
}

//destructures and maps username
export default connect(({username}) => ({username}))(PublishMessage);