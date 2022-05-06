import { createSlice, configureStore } from '@reduxjs/toolkit';

// Initial states
const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

// store slices
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Combining slices(reducers)
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

//exporting actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
