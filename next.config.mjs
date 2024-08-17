import createMDX from '@next/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const options = {}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkGfm, // md記法拡張
      remarkBreaks, // 改行
      [remarkToc, { maxDepth: 3, heading: '目次' }], // 目次(目次の作成)
    ],
    rehypePlugins: [
      [rehypePrettyCode, options], // コードハイライト
      rehypeSlug, // 目次(heading要素にid属性を付与)
      [rehypeAutolinkHeadings, { behavior: 'wrap' }], // 目次(heading要素にaタグを追加する)
    ],
  },
})

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)
