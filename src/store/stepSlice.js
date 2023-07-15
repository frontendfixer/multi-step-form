import { createSlice } from '@reduxjs/toolkit';

export const stepSlice = createSlice({
  name: 'step',
  initialState: {
    value: 0,
  },
  reducers: {
    getStep: (state, action) => {
      state.value = action.payload;
    },
    nextStep: state => {
      state.value += 1;
    },
    previousStep: state => {
      state.value -= 1;
    },
  },
});

export const { getStep, nextStep, previousStep } = stepSlice.actions;

export default stepSlice.reducer;
