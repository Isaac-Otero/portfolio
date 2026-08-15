import React from 'react';
import { connect } from 'react-redux';

const Card = ({ cards }) => {
  if (!cards || !cards[0]) {
    return (
      <div className="eo-card-stage">
        <div className="eo-playing-card eo-card-back">
          <div className="eo-card-back-inner">
            <span>E/O</span>
          </div>
        </div>
        <p className="eo-card-caption">Choose even or odd, then draw.</p>
      </div>
    );
  }

  const { value, suit, image, code } = cards[0];

  return (
    <div className="eo-card-stage">
      <div className="eo-card-flip" key={code || image}>
        <div className="eo-playing-card eo-card-back eo-card-face eo-card-face-back">
          <div className="eo-card-back-inner">
            <span>E/O</span>
          </div>
        </div>
        <div className="eo-playing-card eo-card-face eo-card-face-front">
          <img src={image} alt={`${value} of ${suit}`} />
        </div>
      </div>
      <p className="eo-card-caption">{value} of {suit}</p>
    </div>
  );
}

export default connect(
  ({ deck: { cards }}) => ({ cards })
)(Card);
