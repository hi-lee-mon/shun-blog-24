import { appConstants } from '@/constants/app'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from '../theme/mode-toggle'

export default function Header() {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center container">
        <div className="flex gap-4 flex-1 items-center">
          <Button variant="ghost" asChild>
            <Link href="/">{appConstants.title}</Link>
          </Button>
        </div>
        <div className='flex gap-4'>
        <ModeToggle/>
        <Button variant="ghost" asChild>
          <Link href="/playground">playground</Link>
        </Button>
        </div>
      </div>
    </header>
  )
}
