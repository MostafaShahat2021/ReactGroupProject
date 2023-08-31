import React from 'react';
import './MyProfile.css';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.mission.mission);
  return (
    <div className="profile-container">
      <article className="missions-container">
        <h2>My Missions</h2>
        <ul className="missions-list">
          {missions
            .filter((mission) => mission.reserved === true)
            .map((miss) => (
              <li key={miss.mission_id}>{miss.mission_name}</li>
            ))}
        </ul>
      </article>
      <article className="rockets-cntainer">
        <h2>My Rockets</h2>
        <ul className="rockets-list">
          {rockets
            .filter((rocket) => rocket.reserved === true)
            .map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
        </ul>
      </article>
    </div>
  );
}

export default MyProfile;
