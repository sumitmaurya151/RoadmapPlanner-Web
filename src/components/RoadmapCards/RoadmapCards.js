import { CommentOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import React from 'react';
import styles from './RoadmapCards.module.scss';
import useModal from '@roadmap-planner/hooks/useModal';
import ShareModal from '../ShareModal/ShareModal';

function RoadmapCards() {
     const {isModalOpen:isShareModalOpen,showModal:showShareModal,hideModal:hideShareModal} = useModal()
     return (
          <>
               <ShareModal isModalOpen={isShareModalOpen} hideModal={hideShareModal}/>
               <Col style={{width:'100%'}} span={24}>
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
                                        <ShareAltOutlined onClick={showShareModal}/>
                                   </Col>     
                                   <Col span={12}>
                                   </Col>
                              </Row>
                         </Col>
                    </Row>
                    <Row>
                         
                    </Row>
               </Col>
          </>
     )
}

export default RoadmapCards