import { configureStore } from '@reduxjs/toolkit';

import formReducer from './formSlice';
import stepReducer from './stepSlice';

export default configureStore({
  reducer: {
    step: stepReducer,
    form: formReducer,
  },
});
