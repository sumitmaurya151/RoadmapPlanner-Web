import { useRouter } from 'next/router'
import React from 'react'

function UserProfile() {
     const router = useRouter()
     return (
          <div>{router.query.params}</div>
     )
}

export default UserProfile