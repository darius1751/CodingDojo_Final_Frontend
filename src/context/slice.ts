import { createSlice } from '@reduxjs/toolkit'
import { User } from '../interfaces/user.interface'

const initialState: { user: Partial<User> } = {
  user: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, _action) => {
      state.user = {};
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions

export default userSlice.reducer