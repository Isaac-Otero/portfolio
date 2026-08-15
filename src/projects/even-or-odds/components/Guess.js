import React from "react";
import { connect } from "react-redux";
import { setGuessEven, setGuessOdd} from "../actions/guess";

const Guess = ({guess,setGuessEven,setGuessOdd}) => {
    return (
        <div className="eo-guess">
            <h3>Take a guess</h3>
            <div className="eo-segmented" role="group" aria-label="Choose even or odd">
                <button
                  className={guess === 'even' ? 'eo-choice eo-choice-active' : 'eo-choice'}
                  onClick={setGuessEven}
                >
                  Even
                </button>
                <button
                  className={guess === 'odd' ? 'eo-choice eo-choice-active' : 'eo-choice'}
                  onClick={setGuessOdd}
                >
                  Odd
                </button>
            </div>
        </div>
    )
}
export default connect(
    ({gameState:{guess}}) => ({guess}),
    {setGuessEven,setGuessOdd}
)(Guess);
