import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionSlice from './mission/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rockets: rocketsReducer,
  },
});

export default store;
