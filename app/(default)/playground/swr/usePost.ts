import useSWR from 'swr'

type Response = {
  userId: number
  id: number
  title: string
  body: string
}

/**
 * usePostを抽象化することでusePostを複数個所で読みだしてもデータが共有されるようになる（fetchが1回で良くなる）
 */
export const usePost = (id: string) => {
  const res = useSWR<Response>(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return res
}
