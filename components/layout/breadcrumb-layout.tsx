'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'
import { House } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'

export const BreadcrumbLayout = () => {
  const segments = useSelectedLayoutSegments()
  const pathname = usePathname()

  const currentSegment = pathname.split('/').at(-1)

  return (
    <div className="flex items-center gap-2 pl-5 pt-2">
      <House size="1rem" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className={cn('' === currentSegment ? 'text-foreground' : '')}>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.length === 0 ? null : <BreadcrumbSeparator />}
          {segments.map((segment, index) => {
            return (
              <div key={segment} className="flex items-center gap-2">
                <BreadcrumbItem className={cn(segment === currentSegment ? 'text-foreground' : '')}>
                  <BreadcrumbLink asChild>
                    <Link href={`/${segment}`}> {segment}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {segments.length === index + 1 ? null : <BreadcrumbSeparator />}
              </div>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
