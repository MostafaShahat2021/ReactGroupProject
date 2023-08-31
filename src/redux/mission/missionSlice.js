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
      throw new Error(error.message);
    }
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.mission = state.mission.map((mission) => {
        if (mission.mission_id !== missionId) return mission;
        return { ...mission, reserved: true };
      });
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.mission = state.mission.map((mission) => {
        if (mission.mission_id !== missionId) return mission;
        return { ...mission, reserved: false };
      });
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
      state.error = action.error.message;
    });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
