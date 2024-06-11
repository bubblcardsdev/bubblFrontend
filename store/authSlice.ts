import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "./store";

// Initial state
const initialState = {
  token: "",
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthToken(state, action: { type: string; payload: string }) {
      // eslint-disable-next-line no-param-reassign
      state.token = action.payload;
    },
  },
});

export const { setAuthToken } = authSlice.actions;

export const getAccessToken = (state: AppState) => state[authSlice.name].token;

export default authSlice.reducer;
