import { configureStore } from "@reduxjs/toolkit";
// import {thunk} from "redux-thunk";
import userReducer from "./features/userSlice";
import businessReducer from './features/businessSlice'

const store = configureStore({
  reducer:{
    user: userReducer,
    business_list: businessReducer
  }
})
export default store;