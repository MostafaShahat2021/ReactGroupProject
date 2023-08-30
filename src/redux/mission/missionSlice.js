import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  mission: [],
  error: '',
};

export const fetchMission = createAsyncThunk(
  'mission/fetchMission',
  async () => {
    try {
      const response = await axios.get(
        'https://api.spacexdata.com/v3/missions',
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      const updatedState = state.mission.map((mission) => (mission.mission_id !== missionId
        ? mission
        : { ...mission, reserved: true }));
      state.mission = updatedState;
    },

    leaveMission: (state, action) => {
      const missionId = action.payload;
      const updatedState = state.mission.map((mission) => (mission.mission_id !== missionId
        ? mission
        : { ...mission, reserved: false }));
      state.mission = updatedState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMission.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMission.fulfilled, (state, action) => {
      state.loading = false;
      state.mission = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMission.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
