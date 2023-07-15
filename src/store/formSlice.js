import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  isYearly: false,
  yearlyDiscount: 0.18,
  plan: {
    id: 'arcade',
    name: 'Arcade',
    price: 9,
  },
  addOns: [],
  status: {
    isSubmitted: false,
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    toYearly: (state, action) => {
      state.isYearly = action.payload;
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    addAddOns: (state, action) => {
      state.addOns = action.payload;
    },
    submitForm: (state, action) => {
      state.status.isSubmitted = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const {
  addPersonalInfo,
  toYearly,
  setPlan,
  addAddOns,
  submitForm,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
