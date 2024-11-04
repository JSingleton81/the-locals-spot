import { combineReducers } from "redux";
import initialState from "./state";

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.payload,
      };
    
    case "SIGN_UP":
      return{
        ...state,
        user: action.payload
      };


    default:
      return state;
  }
};

const businesses = (state = initialState.businesses, action) => {
  switch (action.type) {
    case "ADD_BUSINESS":
      return [...state, action.payload];
    case "UPDATE_BUSINESS":
      return state.map((business) =>
        business.id === action.payload.id ? action.payload : business
      );
    case "REMOVE_BUSINESS":
      return state.filter((business) => business.id !== action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({ user, businesses });
