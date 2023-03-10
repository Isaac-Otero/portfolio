import React from "react";
//read user name data
import { connect } from "react-redux";
import { setUsername } from "../actions/username";

const SetUsername = ({setUsername}) =>{
    return(
        <div>
            <h3>username</h3>
            <input style={{color:'black'}} onChange={setUsername} />
        </div>
    )
};

const mapDispatchToProps = dispatch =>{
    return {
        setUsername: event => dispatch(setUsername(event.target.value))
    }
}

export default connect(null,mapDispatchToProps)(SetUsername);