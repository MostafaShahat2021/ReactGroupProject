import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/mission/missionSlice';
import './Mission.css';

function Mission() {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.mission);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };
  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <section className="mission">
      {mission.loading && <p>Loading...</p>}
      {!mission.loading && mission.error ? (
        <p>
          Error:
          {mission.error}
        </p>
      ) : null}
      {!mission.loading && mission.mission.length ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th aria-label="Save" />
              </tr>
            </thead>
            <tbody>
              {mission.mission.map((miss) => (
                <tr key={miss.mission_id}>
                  <td>
                    <b>{miss.mission_name}</b>
                  </td>
                  <td>{miss.description}</td>
                  <td className="member">
                    {miss.reserved && (
                      <span className="active-member">ACTIVE MEMBER</span>
                    )}
                    {!miss.reserved && (
                      <span className="not">NOT A MEMBER</span>
                    )}
                  </td>
                  <td>
                    {miss.reserved && (
                      <button
                        type="button"
                        className="btn-leave"
                        onClick={() => {
                          handleLeaveMission(miss.mission_id);
                        }}
                      >
                        Leave Mission
                      </button>
                    )}
                    {!miss.reserved && (
                      <button
                        className="btn-join"
                        type="button"
                        onClick={() => {
                          handleJoinMission(miss.mission_id);
                        }}
                      >
                        Join Misssion
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}

export default Mission;
