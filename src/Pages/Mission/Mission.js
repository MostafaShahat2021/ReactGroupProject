import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission, joinMission } from '../../redux/mission/missionSlice';
import './Mission.css';

function Mission() {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.mission);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
    console.log(dispatch(joinMission(id)));
    console.log(id);
  };

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

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
                    {miss.reserved ? (
                      <span>Active Member</span>
                    ) : (
                      <span>NOT A MEMBER</span>
                    )}
                  </td>
                  <td>
                    {miss.reserved ? (
                      <button type="button">Leave Mission</button>
                    ) : (
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
