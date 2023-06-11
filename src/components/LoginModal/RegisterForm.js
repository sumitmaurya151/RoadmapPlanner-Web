import { AliwangwangOutlined, LockOutlined, QqOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd'
import React from 'react'
import styles from './RegisterForm.module.scss'

function RegisterForm({showLoginForm}) {
     const onFinish = (values) => {
          console.log('Received values of form: ', values);
     };
     return (
          <Form
               name="normal_login"
               initialValues={{
                    remember: true,
               }}
               onFinish={onFinish}
               className={styles.form}
          >
               <Form.Item
                    name="name"
                    rules={[
                         {
                              required: true,
                              message: 'Please input your name!',
                         },
                    ]}
               >
                    <Input prefix={<AliwangwangOutlined className="site-form-item-icon" />} placeholder="name" className={styles.input}/>
               </Form.Item>
               <Form.Item
                    name="username"
                    rules={[
                         {
                              required: true,
                              message: 'Please input your Username!',
                         },
                    ]}
               >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" className={styles.input}/>
               </Form.Item>
               <Form.Item
                    name="password"
                    rules={[
                         {
                              required: true,
                              message: 'Please input your Password!',
                         },
                    ]}
               >
                    <Input
                         prefix={<LockOutlined className="site-form-item-icon" />}
                         type="password"
                         placeholder="Password"
                         className={styles.input}
                    />
               </Form.Item>
               <Form.Item className={styles.button}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                         Register
                    </Button>
               </Form.Item>
               <Typography className={styles.footer_text}>
                    Already have an account!!!&nbsp;
                    <Button type='default' onClick={showLoginForm} className={styles.register}>Login</Button>
               </Typography>
          </Form>
     )
}

export default RegisterForm