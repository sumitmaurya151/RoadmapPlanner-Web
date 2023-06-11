import useModal from '@roadmap-planner/hooks/useModal'
import { Button } from 'antd'
import React from 'react'
import LoginModal from '../LoginModal/LoginModal'

function LoginButton() {
     const {isModalOpen,showModal,hideModal} = useModal()
     return (
          <>
               {    isModalOpen 
                    && 
                    <LoginModal isModalOpen={isModalOpen} hideModal={hideModal}/> 
               }
               <Button type='primary' onClick={showModal}>Login</Button>
          </>
     )
}

export default LoginButton