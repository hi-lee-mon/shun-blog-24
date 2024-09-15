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
    <Breadcrumb>
      <BreadcrumbList className="flex items-center pl-5 pt-8">
        <BreadcrumbItem className={cn('' === currentSegment ? 'text-foreground' : '')}>
          <House size="1rem" />
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment) => {
          return (
            <>
              <BreadcrumbSeparator className="px-1" />
              <BreadcrumbItem
                key={segment}
                className={cn(segment === currentSegment ? 'text-foreground' : '')}
              >
                <BreadcrumbLink asChild>
                  <Link href={`/${segment}`}> {segment}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
