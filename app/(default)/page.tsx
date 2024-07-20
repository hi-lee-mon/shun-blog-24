import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: "Shun's Blog",
}

export default function Home() {
  return <div className="container py-2">home</div>
}
