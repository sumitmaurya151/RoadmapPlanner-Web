import RoadmapCards from '@roadmap-planner/components/RoadmapCards/RoadmapCards'
import React, { useEffect } from 'react'

function index() {
    return (
        <>
            {[...Array(5)].map((item)=>{
                return <RoadmapCards/>
            })}   
        </>
    )
}

export default index