import { Button, Layout } from 'antd'
import React from 'react'
import RpContent from './RpContent/RpContent'
import RpFooter from './RpFooter/RpFooter'
import RpHeader from './RpHeader/RpHeader'
import RpSlider from './RpSlider/RpSlider'

const {Content} = Layout;

function RpLayout() {
     return (
          <Layout
               style={{
                    minHeight: "100vh",
                    maxWidth:'1000px',
                    margin:'auto'
               }}
          >               
               <RpSlider/>
               <Layout>
                    <RpHeader/>
                    <RpContent/>
                    {/* <RpFooter/> */}
               </Layout>
          </Layout>
     )
}

export default RpLayout