import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    }
  }
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
