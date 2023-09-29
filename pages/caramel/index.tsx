import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[#bc611e]'>
      <h1 className='text-3xl font-bold underline text-gray-300'>Hello Caramel!</h1>
      <Link href='/' className='btn btn-primary'>
        Back
      </Link>
    </div>
  )
}
