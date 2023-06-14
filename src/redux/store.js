import { configureStore } from "@reduxjs/toolkit";
import { UserApi, userApiSlice } from "./api/usersApiSlice";
import UserApiReducer from './api/usersApiSlice'
import UserReducer from './slice/userSlice'

export default configureStore({
     reducer: {
          user:UserReducer,
          userApi:UserApiReducer,
          

          [UserApi.reducerPath]:UserApi.reducer,
     },

     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(UserApi.middleware)
})
