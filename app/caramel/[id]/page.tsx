import Link from 'next/link'
import Card from './_components/Card'
// before routing: import Card, { CardProps } from '@/components/Card'

export default async function Article({ params }: { params: { id: string } }) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${params.id}.json`)
  const article = await res.json()

  return (
    <div className='bg-[#bc611e] p-8'>
      {article ? <Card {...article} /> : <div />}
      <Link href='/caramel' className='btn btn-primary'>
        Back
      </Link>
    </div>
  )
}
