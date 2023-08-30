import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Rockets.css';
import { rocketReserve, rocketCancel } from '../../redux/rockets/rocketsSlice';

function Rockets() {
  const { rockets, isLoading } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  if (isLoading) {
    return <div><h3>Loading...</h3></div>;
  }
  const renderRockets = rockets.map((rocket) => (
    <div className="rocket-container" key={rocket.id}>
      <div className="rocket-img">
        <img src={rocket.image} alt={rocket.name} />
      </div>
      <div className="rocket-info">
        <h2>{rocket.name}</h2>
        <div className="info-cntainer">
          <span className="description">{rocket.description}</span>
        </div>
        <button className="rocket-btn" type="button" onClick={() => dispatch(rocketReserve(rocket.id))}>
          Reserve Rocket
        </button>
        <button className="rocket-btn" type="button" onClick={() => dispatch(rocketCancel(rocket.id))}>
          Cansel Reservaition
        </button>
      </div>
    </div>
  ));

  return <article>{renderRockets}</article>;
}

export default Rockets;
