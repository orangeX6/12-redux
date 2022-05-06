import { createSlice } from '@reduxjs/toolkit';

// Initial states
const initialCounterState = { counter: 0, showCounter: true };

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

//exporting actions
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
