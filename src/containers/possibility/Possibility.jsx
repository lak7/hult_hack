import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Like dragons, soar beyond the ordinary, unleash your imagination and behold the boundless horizons.</h1>
      <p>Enter a realm where the possibilities are beyond your wildest imagination. In our vibrant community, every corner holds the promise of discovery and growth. From connecting with diverse societies to exploring countless events, the journey ahead is limited only by the scope of your creativity. Embrace the boundless opportunities that await, and let your aspirations soar higher than ever before.</p>
    </div>
  </div>
);

export default Possibility;
