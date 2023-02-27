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
    const recordLabel=isNewRecord ? '🥳 NEW HIGH SCORE 🥳 ' : 'HIGHEST SCORE'
    return (
        <div>
            <h3>{recordLabel} </h3>
            <h3>{record}</h3>
            <br/>
            <p> {remaining} cards reamining!</p>
            <p> {correctGuesses} correct {guessText}</p>
        </div>
    )
}

export default connect(
    ({
        deck: { remaining },
        gameState: { correctGuesses }
    }) => ({ remaining, correctGuesses })
)(gameState);