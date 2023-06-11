import { CloseOutlined } from '@ant-design/icons'
import { Col, Form, Modal, Row } from 'antd'
import React from 'react'

function LoginModal({isModalOpen,hideModal}) {
     return (
          <Modal
               open={isModalOpen}
               closable={false}
               footer={null}
          >
               <Row>
                    <Col span={24}>
                         <CloseOutlined />
                    </Col>
                    <Col span={24}>
                         <Row>
                              <Form>
                                   <Col></Col>
                                   <Col></Col>
                              </Form>
                         </Row>
                    </Col>
                    <Col span={24}>
                    </Col>
               </Row>
          </Modal>
     )
}

export default LoginModal