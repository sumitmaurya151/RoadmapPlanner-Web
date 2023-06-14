import RoadmapCards from '@roadmap-planner/components/RoadmapCards/RoadmapCards'
import { useGetPostsQuery } from '@roadmap-planner/redux/api/usersApiSlice'
import React, { useEffect } from 'react'

function index() {
    const data = useGetPostsQuery();
    
    useEffect(()=>{
        console.log(data)
    },[data])


    return (
        <>
            {[...Array(5)].map((item)=>{
                return <RoadmapCards/>
            })}   
        </>
    )
}

export default index