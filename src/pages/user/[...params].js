import { Avatar, Col, Row, Typography } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function UserProfile() {
     const router = useRouter()
     // <div>{router.query.params}</div>
     return (
          <Row>
               <Col span={24}>
                    <Row>
                         <Col span={8}>     
                         <Avatar
                              style={{
                                   backgroundColor: 'red',
                                   verticalAlign: 'middle',
                              }}
                              size="large"
                              >
                              V
                         </Avatar>
                         </Col>
                         <Col span={16}>
                              <Typography>Name</Typography>
                              <Typography>Description</Typography>
                         </Col>    
                    </Row>
               </Col>
               <Col span={24}>
                    <Row>
                         Published Rps
                    </Row>
               </Col>
          </Row>
     )
}

export default UserProfile