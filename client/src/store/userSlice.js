import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: {
    username: "",
    email: "",
    isDoctor: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.status = true;
      state.userData.email = action.payload.email;
      state.userData.username = action.payload.username;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
