import { CustomMdxRemote } from '@/app/(default)/blog/[slug]/_components/custom-mdx-remote'
import { formatDate, getBlogPosts } from '@/lib/blog'
import { getOrigin } from '@/lib/getOrigin'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }
  const { title, publishedAt, summary, image } = post.metadata
  const origin = getOrigin()
  const ogImage = image ?? `${origin}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: publishedAt,
      url: `${origin}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const origin = getOrigin()

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${origin}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${origin}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title text-4xl font-semibold tracking-tighter">{post.metadata.title}</h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt, true)}
        </p>
      </div>
      <article>
        <Suspense fallback={<div className="font-bold">読み込み中...</div>}>
          <CustomMdxRemote source={post.content} />
        </Suspense>
      </article>
    </section>
  )
}
