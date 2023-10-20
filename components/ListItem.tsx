import React from 'react'
import clsx from 'clsx'

export type ListItemProps = {
  title: string
  type: 'job' | 'story' | 'comment' | 'poll'
  className?: string
}

const ListItem: React.FC<ListItemProps> = ({ title, type, className }) => {
  let badgeColor = ''
  let badgeText = ''
  switch (type) {
    case 'job':
      badgeColor = 'bg-green-500'
      badgeText = 'Job'
      break
    case 'story':
      badgeColor = 'bg-blue-500'
      badgeText = 'Story'
      break
    case 'comment':
      badgeColor = 'bg-yellow-500'
      badgeText = 'Comment'
      break
    case 'poll':
      badgeColor = 'bg-purple-500'
      badgeText = 'Poll'
      break
    default:
      badgeColor = 'bg-gray-500'
      badgeText = 'Unknown'
      break
  }
  return (
    <div className={clsx('bg-white rounded-lg shadow-lg p-6', className)}>
      <div
        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${badgeColor} mb-2`}
      >
        {badgeText}
      </div>
      <h2 className='text-lg font-bold mb-2 line-clamp-2'>{title}</h2>
    </div>
  )
}

export default ListItem
