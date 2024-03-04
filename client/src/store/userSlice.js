import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
