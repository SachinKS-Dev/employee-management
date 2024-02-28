// Store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define a slice for employee data
const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Export the actions and the Redux store
export const { addEmployee } = employeeSlice.actions;

// Configure the Redux store
export const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
});

// export default store;  // Export the Redux store as default
