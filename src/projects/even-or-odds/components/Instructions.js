import React from "react";
import { connect } from "react-redux";
import { expandInstructions, collapseInstructions} from "../actions/settings";

const Instructions =props =>{
    const {instructionsExpanded, expandInstructions, collapseInstructions} = props;

    if(instructionsExpanded) {
        return(
            <div className="eo-instructions"> 
                <h3> Instructions</h3>
                <p>The deck is shuffled when you start. Pick whether the next card will be even or odd, then draw.</p>
                <p>Number cards count. Face cards do not add to your score.</p>
                <button className="eo-link-button" onClick={collapseInstructions}>Show Less</button>
            </div>
        );
    }
    return (
        <div className="eo-instructions">
        <h3>Instructions</h3>
        <p>Guess even or odd before each draw. Correct number-card guesses grow your score.</p>
        <button className="eo-link-button" onClick={expandInstructions}>Read more</button>
        </div>
    );
}

export default connect(
    state => ({instructionsExpanded: state.settings.instructionsExpanded}), 
    {expandInstructions,collapseInstructions})
    (Instructions);
