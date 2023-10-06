import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

export default function Caramel() {
  const [ids, setIds] = useState<number[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      const data = await res.json()
      setIds(data)
    })()
  }, [])

  const List = () => {
    return (
      <ul>
        {ids.map((id) => (
          <li>{id}</li>
        ))}
      </ul>
    )
  }
  return (
    <div className='bg-[#bc611e]'>
      <h1 className='text-3xl font-bold underline text-gray-300'>Hello Caramel!</h1>
      <Link href='/' className='btn btn-primary'>
        Back
      </Link>
      <List />
    </div>
  )
}
