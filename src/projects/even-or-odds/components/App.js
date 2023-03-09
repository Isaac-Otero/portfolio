import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';


class App extends Component {
    startGame = () =>{
        this.props.startGame();
        this.props.fetchNewDeck();
    }

    render(){
        if(this.props.fetchState===fetchStates.error){
            return (
                <div>
                    <p> Please try reloading the app as an error as has occurred</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }
        return(
            <div>
                <h2>♡ ♤ Evens or Odds ♢ ♧</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3> Game has started!</h3>
                            <GameState />
                            <br />
                            <Guess />
                            <br />
                            <DrawCard />
                            <hr />
                            <Card />
                            <hr />
                            <button style={{color:'black'}} onClick={this.props.cancelGame}> End Game</button>
                        </div>
                    ): (
                        <div> 
                            <h3> Want to play a new game?</h3>
                            <br/>
                            <button onClick={this.startGame} style={{color:'black'}}> Start Game</button>
                            <hr />
                            <Instructions />                        
                        </div>
                        

                    )
                }
            </div>
        )
    }
}


const mapStateToProps = state =>{
    const{
        settings:{gameStarted},
        deck:{fetchState,message}
    }=state;

    return{gameStarted,fetchState,message};
}

/*const mapDispatchToProps = dispatch =>{
    return{
        startGame: () => dispatch(startGame()),
        cancelGame: () => dispatch(cancelGame()),
        fetchNewDeck: () => fetchNewDeck(dispatch)
    };
}
*/

const componentConnector=connect(
    mapStateToProps, {startGame,cancelGame,fetchNewDeck});

export default componentConnector(App);