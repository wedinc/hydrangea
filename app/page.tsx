import Link from 'next/link'
import SignoutButton from './_components/SignoutButton'

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold underline text-gray-300'>Hello world!</h1>
      <Link href='/caramel' className='btn btn-primary'>
        Caramel
      </Link>
      <SignoutButton />
    </>
  )
}
