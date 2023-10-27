import Card, { CardProps } from '@/components/Card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Article() {
  const router = useRouter()
  const { id } = router.query

  const [article, setArticle] = useState<CardProps>()

  useEffect(() => {
    if (!id) return
    ;(async () => {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      const article = await res.json()
      setArticle(article)
    })()
  }, [])

  return (
    <div className='bg-[#bc611e] p-8'>
      {article ? <Card {...article} /> : <div />}
      <Link href='/caramel' className='btn btn-primary'>
        Back
      </Link>
    </div>
  )
}
