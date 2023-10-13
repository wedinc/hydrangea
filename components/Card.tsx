import React from 'react'

export type CardProps = {
  by: string
  descendants: number
  id: number
  score: number
  time: number
  title: string
  type: 'job' | 'story' | 'comment' | 'poll'
  url: string
}

const Card: React.FC<CardProps> = ({ by, descendants, id, score, time, title, type, url }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      <h2 className='text-2xl font-bold mb-2'>
        {id}: {title}
      </h2>
      <p className='text-gray-600 mb-2'>By: {by}</p>
      <p className='text-gray-600 mb-2'>Score: {score}</p>
      <p className='text-gray-600 mb-2'>Type: {type}</p>
      <p className='text-gray-600 mb-2'>Time: {new Date(time * 1000).toLocaleString()}</p>
      <p className='text-gray-600 mb-2'>
        URL:{' '}
        <a href={url} className='text-blue-500 hover:underline'>
          {url}
        </a>
      </p>
      <p className='text-gray-600'>Got {descendants} comments</p>
    </div>
  )
}

export default Card
