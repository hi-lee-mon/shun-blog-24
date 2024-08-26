import { BlogPosts } from '@/app/(default)/blog/_components/blog-posts'
import { Rss } from 'lucide-react'

export default function Blog() {
  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-balance text-4xl font-bold">ブログ一覧</h1>
        <a
          className="inline-block items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="/blog/rss"
        >
          <Rss className="transition-all duration-300 hover:text-blue-500" />
          <span className="sr-only">RSSフィード</span>
        </a>
      </div>
      <BlogPosts />
    </div>
  )
}
