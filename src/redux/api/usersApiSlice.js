import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const UserApi = createApi({
     reducerPath:'userApi',
     baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
     endpoints:(builder)=>({
          getPosts:builder.query({
               query:()=>'/todos',
          })
     })
})

export const {
     useGetPostsQuery
} = UserApi