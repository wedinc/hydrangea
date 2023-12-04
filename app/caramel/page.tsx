import ListItem, { ListItemProps } from '@/components/ListItem'
import Link from 'next/link'
import SignoutButton from '../_components/SignoutButton'

export default async function Caramel() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
  const ids: number[] = await res.json()

  const slicedIds = ids.slice(0, 10)
  const articles = await Promise.all(slicedIds.map(async (id) => {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    return await res.json() as ListItemProps
  }))

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
      <SignoutButton />
    </div>
  )
}
