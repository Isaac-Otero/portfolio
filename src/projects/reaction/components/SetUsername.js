import React from "react";
//read user name data
import { connect } from "react-redux";
import { setUsername } from "../actions/username";

const SetUsername = ({setUsername}) =>{
  return(
    <div className="text-white justify-center items-center text-center">
      <h3>Enter in a username</h3>
      <input className="text-white border rounded-lg" onChange={setUsername} />
    </div>
  )
};

const mapDispatchToProps = dispatch =>{
  return {
    setUsername: event => dispatch(setUsername(event.target.value))
  }
}

export default connect(null,mapDispatchToProps)(SetUsername);
