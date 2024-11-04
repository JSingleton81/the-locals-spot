import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_business_list: [],
  all_business_list: []
}
export const userSlice = createSlice ({
  name:"business_list",
  initialState,
  reducers:{
    setUserBusinessList: (state, action) => {
      state.user_business_list.push(...action.payload)
    },
    setBusinessList: (state, action) => {
      state.all_business_list = [...action.payload] 
    },
    updateUserBusinessList: ()=>{

    },
    updateBusinessList: ()=>{},
  }
})

export const {  
setUserBusinessList,
setBusinessList,
updateUserBusinessList,
updateBusinessList} = userSlice.actions

export default userSlice.reducer