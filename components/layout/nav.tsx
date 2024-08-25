import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        <li>
          <Button variant="ghost" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" asChild>
            <Link href="/playground">Playground</Link>
          </Button>
        </li>
      </ul>
    </nav>
  )
}
