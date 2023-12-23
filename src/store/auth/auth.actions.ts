import type {IRegisterPayload, IUser} from "./auth.interface";
import {createAsyncThunk} from "@reduxjs/toolkit"

export const register = createAsyncThunk<IRegisterPayload, IUser>(
    'auth/register',
    async (payload:IRegisterPayload, { rejectWithValue }) => {
      
    }
  )