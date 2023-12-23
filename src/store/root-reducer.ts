import { reducer as toastrReducer } from "react-redux-toastr";

import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";

export const rootReducer = combineReducers({
  auth: authReducer,
  toastr: toastrReducer,
});
