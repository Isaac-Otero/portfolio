import React from "react";
import { connect } from "react-redux";
import { setGuessEven, setGuessOdd} from "../actions/guess";

const Guess = ({guess,setGuessEven,setGuessOdd}) => {
    return (
        <div>
            <h3> Even or odd? Take a guess!</h3>
            <div>
                <button  style={  guess ==='even' ? {border:'2px solid #43a047'}: null  } className="game-buttons" onClick={setGuessEven}>Even</button>
                {' '}
                <button className="game-buttons" style={guess ==='odd' ? {border:'2px solid #43a047'}: null } onClick={setGuessOdd}>Odd</button>
            </div>
        </div>
    )
}
export default connect(
    ({gameState:{guess}}) => ({guess}),
    {setGuessEven,setGuessOdd}
)(Guess);