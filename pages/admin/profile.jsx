import React from 'react'
import withAuth from '../../components/auth/withAuth'

function profile() {
  return (
    <div>profile</div>
  )
}

export default withAuth(profile)