import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd'
import React, { useEffect } from 'react'
import styles from './LoginForm.module.scss'
import { useDispatch } from 'react-redux'
import { setUserLoggedIn } from '@roadmap-planner/redux/slice/UserSlice';
import { useAuthenticateUserMutation } from '@roadmap-planner/redux/api/UsersApiSlice';

function LoginForm({showRegisterForm}) {

     const dispatch = useDispatch();
     const [authenticateUser,authenticateUserResult] = useAuthenticateUserMutation();

     const onFinish = (values) => {
          console.log('Received values of form: ', values);
          dispatch(setUserLoggedIn())
          authenticateUser()
     };

     useEffect(()=>{
          console.log(authenticateUserResult)
     },[authenticateUserResult])

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
                         Log in
                    </Button>
               </Form.Item>
               <Typography className={styles.footer_text}>
                    Don't have an account!!!&nbsp;
                    <Button type='default' onClick={showRegisterForm} className={styles.register}>Register</Button>
               </Typography>
          </Form>
     )
}

export default LoginForm