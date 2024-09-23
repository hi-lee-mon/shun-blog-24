import { playgroundContents } from '@/constants/playground'
import { getBlogPosts } from '@/lib/blog'
import { getCurrentDateJp } from '@/lib/date'
import { getOrigin } from '@/lib/getOrigin'

export default async function sitemap() {
  const origin = getOrigin()
  const now = getCurrentDateJp()
  const routes = ['', '/blog', '/playground'].map((route) => ({
    url: `${origin}${route}`,
    lastModified: now,
  }))

  const blogs = getBlogPosts().map((post) => ({
    url: `${origin}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const playgrounds = playgroundContents.map((content) => ({
    url: `${origin}/playground/${content.path}`,
    lastModified: now,
  }))

  return [...routes, ...blogs, ...playgrounds]
}
