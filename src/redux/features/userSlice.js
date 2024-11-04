import { createSlice } from "@reduxjs/toolkit";

const initialState = null
export const userSlice = createSlice ({
  name:"user",
  initialState,
  reducers:{
    setUser: (state, action) => {
      return state = {...action.payload}
    },
    logOut: (state) => {
      return initialState 
    }
  }
})

export const {setUser, logOut} = userSlice.actions

export default userSlice.reducer