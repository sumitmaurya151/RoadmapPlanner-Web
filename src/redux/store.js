import { configureStore } from "@reduxjs/toolkit";
import { UserApi, userApiSlice } from "./api/UsersApiSlice";
import UserApiReducer from './api/UsersApiSlice'
import UserReducer from './slice/UserSlice'

export default configureStore({
     reducer: {
          user:UserReducer,
          userApi:UserApiReducer,
          

          [UserApi.reducerPath]:UserApi.reducer,
     },

     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(UserApi.middleware)
})
