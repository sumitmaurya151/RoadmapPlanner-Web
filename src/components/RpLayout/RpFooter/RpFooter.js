import { Layout } from 'antd';
const {Footer} = Layout
import React from 'react'

function RpFooter() {
     return (
          <Footer
               style={{
                    background:'white',
                    margin:'8px',
                    padding:'8px',
                    borderRadius:'8px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    height:'60px'
               }}
          >
               Roadmap Planner ©2023 Created by Sumit and Vaibhav
          </Footer>
     )
}

export default RpFooter