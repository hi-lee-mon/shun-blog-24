'use client'
import MdxLayout from '@/app/(default)/playground/mdx/mdx-layout'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Test from './Test.mdx'

const MarkdownEditor = dynamic(
  () => import('@/app/(default)/playground/mdx/markdown-editor'),
  {
    ssr: false,
  },
)

export default function Page() {
  return (
    <div className="py-4">
      <MdxLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <MarkdownEditor markdown="# Hello World" />
        </Suspense>
        <Test />
      </MdxLayout>
    </div>
  )
}
