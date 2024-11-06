import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.username = '';
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;