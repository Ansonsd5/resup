import { createSlice } from '@reduxjs/toolkit';



const initialState = {};

export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    saveFormDataConfig: (state, action) => {
      return action.payload;
    },
    updateFieldValue: (state, action) => {
      const { id, value } = action.payload;
      state[id].value = value;
    },
  },
});

export const { saveFormDataConfig, updateFieldValue } = landingSlice.actions;

export default landingSlice.reducer;
