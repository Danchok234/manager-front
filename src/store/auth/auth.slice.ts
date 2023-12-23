import { createSlice } from "@reduxjs/toolkit";
import type { IUser, IRegisterPayload } from "./auth.interface";
import type { TypeRootState } from "../store";

export interface IAuthState {
  user: IUser | null;
}

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state: TypeRootState, {name, email, password}: IRegisterPayload) => {
        state.user = {name, email, password, surname:null}
    },  
  },
});



export default authSlice.reducer;
