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
      const { data } = response;
      return data;
    } catch (error) {
      return error;
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
      state.error = action.error.message;
    });
  },
});

export default missionSlice.reducer;
