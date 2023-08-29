import React from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const { rockets } = useSelector((store) => store.rockets);
  const renderRockets = rockets.map((rocket) => (
    rocket.name
  ));

  return (
    <article>
      {renderRockets}
    </article>
  );
}

export default Rockets;
