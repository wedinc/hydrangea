import Card, { CardProps } from '@/components/Card'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Caramel() {
  const [ids, setIds] = useState<number[]>([])
  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      const data = await res.json()
      setIds(data)
    })()
  }, [])

  const [cards, setCards] = useState<CardProps[]>([])

  useEffect(() => {
    if (!ids || ids.length === 0) return
    ;(async () => {
      const slicedIds = ids.slice(0, 10)
      const cards = await Promise.all(
        slicedIds.map(async (id) => {
          const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          return await res.json()
        }),
      )
      setCards(cards)
    })()
  }, [ids])

  return (
    <div className='bg-[#bc611e]'>
      <h1 className='text-3xl font-bold underline text-gray-300'>Hello Caramel!</h1>
      <Link href='/' className='btn btn-primary'>
        Back
      </Link>
      <ul className='flex flex-col gap-4'>
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </ul>
    </div>
  )
}
