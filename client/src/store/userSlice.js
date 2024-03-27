import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: {
    id: null,
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
      state.userData = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
