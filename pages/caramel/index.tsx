import ListItem, { ListItemProps } from '@/components/ListItem'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'

export default function Caramel() {
  const [ids, setIds] = useState<number[]>([])
  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      const data = await res.json()
      setIds(data)
    })()
  }, [])

  const [articles, setArticles] = useState<ListItemProps[]>([])

  useEffect(() => {
    if (!ids || ids.length === 0) return
    ;(async () => {
      const slicedIds = ids.slice(0, 10)
      const articles = await Promise.all(
        slicedIds.map(async (id) => {
          const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          return await res.json()
        }),
      )
      setArticles(articles)
    })()
  }, [ids])

  return (
    <div className='bg-[#bc611e] p-8'>
      <h1 className='text-3xl font-bold underline text-gray-300'>Hello Caramel!</h1>
      <Link href='/' className='btn btn-primary'>
        Back
      </Link>
      <ul className='flex flex-col gap-4 w-1/3'>
        {articles.map((article) => {
          const newArticle = { ...article, title: article.title.repeat(2) }
          return <ListItem {...newArticle} key={newArticle.title} className='h-36' />
        })}
      </ul>
      <button className='btn btn-secondary' onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  )
}
