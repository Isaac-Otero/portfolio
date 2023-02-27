import React from "react";
import { connect } from "react-redux";
import { expandInstructions, collapseInstructions} from "../actions/settings";

const Instructions =props =>{
    const {instructionsExpanded, expandInstructions, collapseInstructions} = props;

    if(instructionsExpanded) {
        return(
            <div> 
                <h3> Instructions</h3>
                <p> Welcome to Even or odds! The game is played like this </p>
                <p> The deck is going to get shuffled. Then you have to predict whether or not the next card is either even or odd</p>
                <p> Let's see how many you get right </p>
                <p> (Face cards don't card btw)</p>
                <br />
                <button onClick={collapseInstructions}> Show Less</button>
            </div>
        );
    }
    return (
        <div>
        <h3> Instructions</h3>
        <p> Welcome to Even or odds! The game is played like this.....</p>
        <button onClick={expandInstructions}> Read more</button>
        </div>
    );
}

export default connect(
    state => ({instructionsExpanded: state.settings.instructionsExpanded}), 
    {expandInstructions,collapseInstructions})
    (Instructions);