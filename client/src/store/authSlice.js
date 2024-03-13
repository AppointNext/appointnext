import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: {
    username: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
