import { createSlice } from '@reduxjs/toolkit';

// Initial states
const initialAuthState = { isAuthenticated: false };

// store slices
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

//exporting actions
export const authActions = authSlice.actions;

export default authSlice.reducer;
