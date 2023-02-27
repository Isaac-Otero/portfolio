import React, { Component } from "react";
import { connect } from "react-redux";
import { REACTION_OBJECTS } from "../actions/types";
import { PubSubContext } from "../pubsub";
import { createReaction } from "../actions/reactions";

class CreateReaction extends Component {
    //returns a function with the data, returns a function to be used
    publishReaction = ({ type, emoji }) => () => {
        const { username, messageId } = this.props;

        this.context.pubsub.publish(createReaction({ type, emoji, username, messageId }));
    }

    render() {
        return (
            <div>
                {
                    REACTION_OBJECTS.map(REACTION_OBJECT => {
                        const { type, emoji } = REACTION_OBJECT;

                        return (
                            <span
                                onClick={this.publishReaction({ type, emoji })}
                                style={{ margin: '5px', cursor: 'pointer' }}
                                key={type}
                            >{emoji} </span>
                        )
                    })
                }
            </div>
        )
    }
    static contextType = PubSubContext;
}

export default connect(({ username }) => ({ username }))(CreateReaction);