import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  email: null,
  profileImage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.profileImage = action.payload.profileImage;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
