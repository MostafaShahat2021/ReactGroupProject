import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
});

export default rocketsSlice.reducer;
