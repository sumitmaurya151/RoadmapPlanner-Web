import { UserOutlined } from '@ant-design/icons'
import { setUserLoggedOut } from '@roadmap-planner/redux/slice/userSlice'
import { Avatar, Dropdown } from 'antd'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './LoggedInUser.module.scss'



function LoggedInUser() {
     const username = useSelector((state)=>state.user.username)
     const dispatch = useDispatch();

     const items = [
          {
            key: '1',
            label: <Link href={`http://localhost:3000/user/${username}`}>{username}</Link>,
          },
          {
            key: '2',
            label: "Logout",
          }
     ];

     const dropdownButtonClickHandler = ({key}) =>{
          if(key == 1){
               console.log("redirect to profile page of user")
          }
          else if(key == 2){
               dispatch(setUserLoggedOut())
          }
     }
     return (
          <Dropdown
                    menu={{
                         items,
                         onClick:dropdownButtonClickHandler
                    }}
                    placement="bottomRight"
          >
               <Avatar 
                    style={{ backgroundColor: '#087ea4' }} 
                    icon={<UserOutlined />}
               />
          </Dropdown>
     )
}

export default LoggedInUser