import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

export const CustomMdxRemote = (props: MDXRemoteProps) => {
  return (
    <MDXRemote
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks, [remarkToc, { maxDepth: 3, heading: '目次' }]],
          rehypePlugins: [
            [rehypePrettyCode],
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ],
        },
      }}
      {...props}
      components={{
        h2: (props) => (
          <h2 className="mb-4 border-b pb-2 text-2xl font-bold tracking-tight" {...props} />
        ),
      }}
    />
  )
}
