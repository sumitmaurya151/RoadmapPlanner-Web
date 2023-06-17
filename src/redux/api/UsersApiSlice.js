import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@roadmap-planner/constants/constants";
import { queryConfiguration } from "@roadmap-planner/utils/functions";



export const UserApi = createApi({
     reducerPath:'userApi',
     baseQuery:fetchBaseQuery({baseUrl:`${process.env.NEXT_PUBLIC_BASE_URL}`}),
     endpoints:(builder)=>({

          authenticateUser : builder.mutation({
               query:(body)=>
                    queryConfiguration({
                         url: 'user/authenticateUser',
                         method: 'POST',
                         body: body,
                    }),
          }),

          createUser : builder.mutation({
               query:(body)=>
                    queryConfiguration({
                         url: 'user/createUser',
                         method: 'POST',
                         body: body,
                    }),
          }),

          authenticateUserJWTToken : builder.mutation({
               query:(body)=>
                    queryConfiguration({
                         url: 'user/authenticateUserJWTToken',
                         method: 'POST',
                         body: body,
                    }),
          })
     })
})

export const {
     useAuthenticateUserMutation,
     useCreateUserMutation,
     useAuthenticateUserJWTTokenMutation
} = UserApi