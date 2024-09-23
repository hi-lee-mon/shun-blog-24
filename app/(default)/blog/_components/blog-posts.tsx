'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { getBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import { useState } from 'react'

type AllBlogs = ReturnType<typeof getBlogPosts>
export function BlogPosts({ allBlogs }: { allBlogs: AllBlogs }) {
  const [search, setSearch] = useState('')
  const filteredBlogs = allBlogs.filter((blog) => {
    const title = blog.metadata.title.toLowerCase()
    const content = blog.content.toLowerCase()
    const publishedAt = blog.metadata.publishedAt
    return title.includes(search) || content.includes(search) || publishedAt.includes(search)
  })
  return (
    <div>
      <Label htmlFor="search" className="text-lg">
        検索
      </Label>
      <Input id="search" onChange={(e) => setSearch(e.target.value)} className="mb-6" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <div
              key={post.metadata.title}
              className="relative rounded-lg border bg-card p-4 shadow-sm transition duration-300 hover:shadow-lg dark:hover:border-stone-500"
            >
              <div className="mb-8 flex justify-center rounded-lg bg-muted py-8 text-8xl">
                {post.metadata.icon}
              </div>
              <div className="flex flex-col space-y-1">
                <h2 className="font-bold">
                  <Link href={`/blog/${post.slug}`}>
                    {post.metadata.title}
                    <span className="absolute inset-0"></span>
                  </Link>
                </h2>
                <p>{post.metadata.publishedAt}</p>
                <p className="line-clamp-3 text-muted-foreground">{post.metadata.summary}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
