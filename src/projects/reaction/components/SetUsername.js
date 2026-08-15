import React from "react";
//read user name data
import { connect } from "react-redux";
import { setUsername } from "../actions/username";

const SetUsername = ({username,setUsername}) =>{
  return(
    <div className="reaction-identity">
      <label htmlFor="reaction-username">Username</label>
      <input
        id="reaction-username"
        value={username}
        onChange={setUsername}
      />
    </div>
  )
};

const mapDispatchToProps = dispatch =>{
  return {
    setUsername: event => dispatch(setUsername(event.target.value))
  }
}

export default connect(({ username }) => ({ username }),mapDispatchToProps)(SetUsername);
