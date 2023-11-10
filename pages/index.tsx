import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold underline text-gray-300'>Hello world!</h1>
      <Link href='/caramel' className='btn btn-primary'>
        Caramel
      </Link>

      <button className='btn btn-secondary' onClick={() => signOut()}>
        Sign out
      </button>
    </>
  )
}
