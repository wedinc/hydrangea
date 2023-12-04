'use client'

import { signOut } from "next-auth/react"

const SignoutButton = () => {
  return (
    <button className='btn btn-secondary' onClick={() => signOut()}>
      Sign out
    </button>
  )
}

export default SignoutButton
