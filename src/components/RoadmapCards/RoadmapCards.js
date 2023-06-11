import { CommentOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import React from 'react';
import styles from './RoadmapCards.module.scss';

function RoadmapCards() {
     return (
          <Col style={{width:'100%'}} span={12}>
               <Row className={styles.card_div}>
                    <Col span={24}>
                         <Typography className={styles.card_text}>Here we will show the title of the Roadmap</Typography>
                    </Col>
                    <Col span={24}>
                         <Row>
                              <Col span={4}>
                                   <LikeOutlined />80
                              </Col>     
                              <Col span={4}>
                                   <CommentOutlined />99
                              </Col>     
                              <Col span={4}>
                                   <ShareAltOutlined />
                              </Col>     
                              <Col span={12}>
                              </Col>
                         </Row>
                    </Col>
               </Row>
               <Row>
                    
               </Row>
          </Col>
     )
}

export default RoadmapCards