import { connect } from "react-redux";
import React, { Component } from "react";
import CreateReaction from "./CreateReaction";

const MessageReactions = ({ messageReactions }) => {
  if (!messageReactions || messageReactions.length === 0) return null;

  return (
    <div className="reaction-bubble-reactions">
    {messageReactions.map(reaction => {
      const{id,emoji}=reaction;
      return(
        <span key={id}>
          {emoji}
        </span>
      )
    })}
    </div>
  )
}

class MessageBoard extends Component {
  messagesEndRef = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    const previousCount = prevProps.messages.items.length;
    const nextCount = this.props.messages.items.length;

    if (previousCount !== nextCount) {
      this.scrollToBottom();
    }
  }

  scrollToBottom = () => {
    if (this.messagesEndRef.current) {
      this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  render() {
    const { messages, reactions, username: activeUsername } = this.props;

    return (
      <div className="reaction-message-list">
        {
          messages.items.length === 0 ? (
            <div className="reaction-empty-state">
              <p>No messages yet.</p>
            </div>
          ) : (
            messages.items.map(messageItem => {
              const { id, text, timestamp, username } = messageItem;
              const isOwnMessage = username === activeUsername;

              return (
                <article
                  key={id}
                  className={isOwnMessage ? 'reaction-message reaction-message-own' : 'reaction-message'}
                >
                  <div className="reaction-message-meta">
                    <span>{username}</span>
                    <time>{new Date(timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</time>
                  </div>
                  <p>{text}</p>
                  <CreateReaction messageId={id} />
                  <MessageReactions messageReactions={reactions[id]} />
                </article>
              )
            })
          )
        }
        <div ref={this.messagesEndRef} />
      </div>
    )
  }
}

export default connect(
  ({ messages, reactions, username }) => ({ messages, reactions, username })
)(MessageBoard);
