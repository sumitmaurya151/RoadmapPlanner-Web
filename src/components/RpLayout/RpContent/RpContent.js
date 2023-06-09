import React from 'react'
import { Button, Layout, Row } from 'antd';
import RoadmapCards from '@roadmap-planner/components/RoadmapCards/RoadmapCards';
const {Content} = Layout


function RpContent({children}) {
     return (
          <Content
               style={{
                    margin: "0 16px",
                    background:'white',
                    margin:'8px',
                    padding:'8px',
                    borderRadius:'8px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
               }}
          >
               <div
                    style={{
                         minHeight: '100%',
                         width:'100%'
                    }}
               >
                    {children}
               </div>
          </Content>
     )
}

export default RpContent