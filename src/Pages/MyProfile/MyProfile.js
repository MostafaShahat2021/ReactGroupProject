import React from 'react';
import './MyProfile.css';

function MyProfile() {
  return (
    <div className="profile-container">
      <article className="missions-container">
        <h2>My Missions</h2>
        <ul className="missions-list">
          <li>Mission-1</li>
          <li>Mission-2</li>
          <li>Mission-3</li>
          <li>Mission-4</li>
        </ul>
      </article>
      <article className="rockets-cntainer">
        <h2>My Rockets</h2>
        <ul className="rockets-list">
          <li>Rocket-1</li>
          <li>Rocket-2</li>
          <li>Rocket-3</li>
          <li>Rocket-4</li>
        </ul>
      </article>
    </div>
  );
}

export default MyProfile;
