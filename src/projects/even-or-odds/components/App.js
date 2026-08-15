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
                <div className="eo-shell">
                  <div className="eo-panel eo-error">
                    <p> Please try reloading the app as an error as has occurred</p>
                    <p>{this.props.message}</p>
                  </div>
                </div>
            )
        }
        return(
            <main className="eo-shell">
              <section className="eo-panel">
                <div className="eo-header">
                  <p className="eo-kicker">Card Prediction</p>
                  <h2>Evens or Odds</h2>
                  <p className="eo-subtitle">Pick a side, draw a card, and build the longest correct streak you can.</p>
                </div>
                {
                    this.props.gameStarted ? (
                        <div className="eo-game-grid">
                            <GameState />
                            <div className="eo-table">
                              <Card />
                            </div>
                            <div className="eo-controls">
                              <Guess />
                              <DrawCard />
                              <button className="eo-button eo-button-secondary" onClick={this.props.cancelGame}>End Game</button>
                            </div>
                        </div>
                    ): (
                        <div className="eo-start"> 
                            <button className="eo-button eo-button-primary" onClick={this.startGame}>Start Game</button>
                            <Instructions />                        
                        </div>
                    )
                }
              </section>
            </main>
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
