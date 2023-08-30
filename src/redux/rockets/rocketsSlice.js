import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: false,
};

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchRocketsData = createAsyncThunk('rockets/fetchRocketsData', async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch rockets data');
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketReserve: (state, action) => {
      const id = action.payload;
      const updatedState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = updatedState;
    },
    rocketCancel: (state, action) => {
      const id = action.payload;
      const updatedState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      state.rockets = updatedState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRocketsData.fulfilled, (state, action) => {
        state.isLoading = false;
        const newRocket = [];
        const getRockets = action.payload;
        getRockets?.forEach((rocket) => {
          newRocket.push({
            id: rocket.id,
            name: rocket.name,
            description: rocket.description,
            image: rocket.flickr_images[0],
          });
        });
        state.rockets = newRocket;
      })
      .addCase(fetchRocketsData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { rocketReserve, rocketCancel } = rocketsSlice.actions;
export default rocketsSlice.reducer;
