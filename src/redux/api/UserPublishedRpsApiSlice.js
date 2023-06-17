import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@roadmap-planner/constants/constants";
import { queryConfiguration } from "@roadmap-planner/utils/functions";



export const UserPublishedRpsApiSlice = createApi({
     reducerPath:'userApi',
     baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
     endpoints:(builder)=>({

          getUsersPublishedRoadmap : builder.query({
               query:()=>
                    queryConfiguration({
                         url: 'published_roadmap/getUsersRoadmap',
                         method: 'GET',
                    }),
          }),

          createRoadmap : builder.mutation({
               query:(body)=>
                    queryConfiguration({
                         url: 'published_roadmap/createRoadmap',
                         method: 'POST',
                         body: body,
                    }),
          }),

          deleteUsersRoadmap : builder.mutation({
               query:(body)=>
                    queryConfiguration({
                         url: 'published_roadmap/deleteUsersRoadmap',
                         method: 'POST',
                         body: body,
                    }),
          }),

          updateUsersRoadmap : builder.mutation({
               query:(body)=>
                    queryConfiguration({
                         url: 'published_roadmap/updateUsersRoadmap',
                         method: 'POST',
                         body: body,
                    }),
          })
     })
})

export const {
     useGetUsersPublishedRoadmapQuery,
     useCreateRoadmapMutation,
     useUpdateUsersRoadmapMutation,
     useDeleteUsersRoadmapMutation
} = UserPublishedRpsApiSlice