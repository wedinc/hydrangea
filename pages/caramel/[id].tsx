import { useRouter } from 'next/router'

export default function Article() {
  const router = useRouter()
  const { id } = router.query

  return <p>Article: {id}</p>
}
