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

export const joinMission = createAsyncThunk(
  'joinMission',
  async (missionId) => {
    try {
      const response = await axios.get(
        `https://api.spacexdata.com/v3/missions/${missionId}`,
        { reserved: true },
      );
      return response.data.mission_id;
    } catch (error) {
      return error.message;
    }
  },
);
export const leaveMission = createAsyncThunk(
  'leaveMission',
  async (missionId) => {
    try {
      const response = await axios.get(
        `https://api.spacexdata.com/v3/missions/${missionId}`,
        { reserved: false },
      );
      return response.data.mission_id;
    } catch (error) {
      return error.message;
    }
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,
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
    builder.addCase(joinMission.fulfilled, (state, action) => {
      const missionId = action.payload;
      state.mission = state.mission.map((mission) => (mission.mission_id !== missionId
        ? mission
        : { ...mission, reserved: true }));
      state.error = '';
    });
    builder.addCase(joinMission.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(leaveMission.fulfilled, (state, action) => {
      const missionId = action.payload;
      state.mission = state.mission.map((mission) => (mission.mission_id !== missionId
        ? mission
        : { ...mission, reserved: false }));
      state.error = '';
    });
    builder.addCase(leaveMission.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default missionSlice.reducer;
