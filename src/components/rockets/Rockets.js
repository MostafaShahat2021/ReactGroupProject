import React from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const { rockets } = useSelector((store) => store.rockets);
  const renderRockets = rockets.map((rocket) => (
    <div className="rocket-container" key={rocket.id}>
      <div className="rocket-img">
        <img src={rocket.image} alt={rocket.name} />
      </div>
      <div className="rocket-info">
        <h2>{rocket.name}</h2>
      </div>
      <div className="info-cntainer">
        <span className="description">{rocket.description}</span>
      </div>
      <button className="rocket-btn" type="button">Reserve Rocket</button>
    </div>
  ));

  return (
    <article>
      {renderRockets}
    </article>
  );
}

export default Rockets;
