import { CloseOutlined } from '@ant-design/icons'
import { Col, Form, Modal, Row, Typography } from 'antd'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import styles from './LoginModal.module.scss'
import RegisterForm from './RegisterForm'

function LoginModal({isModalOpen,hideModal}) {
     //0 -> Login ; 1->Register
     const [loginform,setLoginForm] = useState(0)

     const showRegisterForm = () =>{
          setLoginForm(1)
     }
     const showLoginForm = () =>{
          setLoginForm(0)
     }

     return (
          <Modal
               open={isModalOpen}
               closable={false}
               footer={null}
               width={400}
               centered
          >
               <Row className={styles.login_modal_div}>
                    <Col span={24} className={styles.header}>
                         <Row className={styles.header_row}>
                              <Col span={23}>
                                   <Typography className={styles.head_text}>
                                        {
                                             loginform == 0?
                                                  "Please Login to continue"
                                             :
                                                  "Please Register to continue"
                                        }
                                   </Typography>
                              </Col>
                              <Col span={1} className={styles.close_button}>
                                   <CloseOutlined onClick={hideModal}/>
                              </Col>
                         </Row>
                    </Col>
                    <Col span={24}>
                         <Row>
                              {loginform == 0?
                                   <LoginForm showRegisterForm={showRegisterForm}/>:
                                   <RegisterForm showLoginForm={showLoginForm}/>
                              }
                         </Row>
                    </Col>
               </Row>
          </Modal>
     )
}

export default LoginModal