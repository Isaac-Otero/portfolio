import React from 'react';
import { connect } from 'react-redux';
import { fetchDrawCard } from '../actions/deck';

const DrawCard = ({ deck_id, guess, fetchDrawCard }) => {
  const canDraw = Boolean(deck_id && guess);

  return (
    <div className="eo-draw">
      <button
        className="eo-button eo-button-primary"
        disabled={!canDraw}
        onClick={fetchDrawCard(deck_id)}
      >
        Draw Card
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
  }
}

export default connect(
  ({ deck: { deck_id }, gameState: { guess } }) => ({ deck_id, guess }),
  mapDispatchToProps
)(DrawCard);
