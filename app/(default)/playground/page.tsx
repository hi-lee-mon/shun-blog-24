import Nextjs from '@/components/logo/next-logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const TAGS = {
  none: null,
  next: <Nextjs />,
}

type Content = {
  title: string
  path: string
  type: keyof typeof TAGS
}

const contents: Content[] = [
  {
    title: 'リンクカード',
    path: 'linkCard',
    type: 'none',
  },
]

export default function Page() {
  return (
    <div className="container py-2">
      {contents.map((content) => (
        <div key={content.path}>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href={`/playground/${content.path}`} className="flex gap-2">
                {TAGS[content.type]}
                {content.title}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
