import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userInfoReducer from '../features/userInfo/userInfoSlice'
import postReducer from '../features/posts/postSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userInfoReducer,
    posts: postReducer,
  },
})
