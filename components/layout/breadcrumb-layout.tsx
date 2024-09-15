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

  console.log({ segments })

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center">
        {/* ホームのリンクは常に表示する */}
        <BreadcrumbItem className={cn('' === currentSegment ? 'text-foreground' : '')}>
          <House size="1rem" />
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index, arr) => {
          if (arr.length === index + 1) {
            // 最後の要素の場合はリンクではなくテキストを表示する
            return (
              <>
                <BreadcrumbSeparator className="px-1" />
                <p key={segment} className={segment === currentSegment ? 'text-foreground' : ''}>
                  {segment}
                </p>
              </>
            )
          }
          return (
            <>
              <BreadcrumbSeparator className="px-1" />
              <BreadcrumbItem key={segment}>
                <BreadcrumbLink asChild>
                  <Link href={`/${arr.slice(0, index + 1).join('/')}`}> {segment}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
