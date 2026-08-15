import React, { Component } from 'react';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import SetUsername from './SetUsername';

class App extends Component {
  render() {
    return (
      <main className="reaction-shell">
        <section className="reaction-phone">
          <div className="reaction-phone-top">
            <div className="reaction-speaker" />
          </div>
          <div className="reaction-header">
            <div>
              <p>Live Room</p>
              <h2>Messaging Board</h2>
            </div>
            <span className="reaction-status">Live</span>
          </div>
          <SetUsername />
          <MessageBoard />
          <PublishMessage />
        </section>
      </main>
    ); 
  }
}

export default App;
