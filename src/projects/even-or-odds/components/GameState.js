import React from "react";
import { connect } from "react-redux";

const correctGuessesRecordKey ='CORRECT_GUESSES_RECORD_foopa_woopa_123_Sing_Sang_Song';

const checkRecord = correctGuesses =>{
    const record=Number(localStorage.getItem(correctGuessesRecordKey));
    if(correctGuesses>record){
        localStorage.setItem(correctGuessesRecordKey,correctGuesses);

        return {record:correctGuesses,isNewRecord:true};
    }
    return {record,isNewRecord:false};
};

const gameState = ({remaining,correctGuesses}) => {
    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';
    const {record,isNewRecord}=checkRecord(correctGuesses);
    const recordLabel=isNewRecord ? 'New high score' : 'Highest score'
    return (
        <div className="eo-scoreboard">
            <div className={isNewRecord ? 'eo-stat eo-stat-highlight' : 'eo-stat'}>
              <span>{recordLabel}</span>
              <strong>{record || 0}</strong>
            </div>
            <div className="eo-stat">
              <span>Cards remaining</span>
              <strong>{remaining}</strong>
            </div>
            <div className="eo-stat">
              <span>Current score</span>
              <strong>{correctGuesses}</strong>
              <small>{guessText}</small>
            </div>
        </div>
    )
}

export default connect(
    ({
        deck: { remaining },
        gameState: { correctGuesses }
    }) => ({ remaining, correctGuesses })
)(gameState);
