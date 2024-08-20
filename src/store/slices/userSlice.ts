import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

export interface IUser {
  name: string;
  email: string;
}
export interface IUserState {
  user: IUser;
  status?: string;
  error?: string;
}

const initialState: IUserState = {
  user: {
    name: '',
    email: '',
  },
  status: 'idle',
  error: '',
};

export const activateUser = createAsyncThunk(
  'user/activateUser',
  async userName => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/1`,
    );
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUserData: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    },
    clearUserData: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(activateUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(activateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        //here should be some interaction with user data, but i don't have any idea what can be fun OR interesting for test purpose :)
      })
      .addCase(activateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const {storeUserData, clearUserData} = userSlice.actions;

export default userSlice.reducer;
