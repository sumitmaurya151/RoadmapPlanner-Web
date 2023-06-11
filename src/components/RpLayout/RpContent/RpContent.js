import React from 'react'
import { Button, Layout, Row } from 'antd';
import RoadmapCards from '@roadmap-planner/components/RoadmapCards/RoadmapCards';
const {Content} = Layout


function RpContent() {
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
                    <Row>
                    {
                         [...Array(12)].map((e, i) =>{
                              return <RoadmapCards key={i}/>
                         })
                    }
                    </Row>
               </div>
          </Content>
     )
}

export default RpContent