import Link from 'next/link'

export default function Caramel() {
  const responses = [
    {
      by: 'dhouston',
      descendants: 71,
      id: 8863,
      kids: [
        8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865,
        8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870,
        8980, 8934, 8876,
      ],
      score: 111,
      time: 1175714200,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      type: 'story',
      url: 'http://www.getdropbox.com/u/2/screencast.html',
    },
    {
      by: 'dhouston',
      descendants: 71,
      id: 8864,
      kids: [
        8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865,
        8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870,
        8980, 8934, 8876,
      ],
      score: 111,
      time: 1175714200,
      title: 'kaitokosuge',
      type: 'story',
      url: 'http://www.getdropbox.com/u/2/screencast.html',
    },
  ]
  const List = () => {
    return (
      <ul>
        {responses.map((response) => (
          <li>{response.title}</li>
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
