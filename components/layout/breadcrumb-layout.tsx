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

const HomeBreadcrumbItem = ({ currentSegment }: { currentSegment: string | undefined }) => {
  const homeActive = currentSegment === ''
  return (
    <BreadcrumbItem className={cn(homeActive ? 'text-foreground' : '')}>
      <House size="1rem" />
      {homeActive ? (
        // ホームのいるときはリンクではなくテキストを表示する
        <p className="text-foreground">Home</p>
      ) : (
        <BreadcrumbLink asChild>
          <Link href="/">Home</Link>
        </BreadcrumbLink>
      )}
    </BreadcrumbItem>
  )
}

export const BreadcrumbLayout = () => {
  const segments = useSelectedLayoutSegments()
  const pathname = usePathname()
  const currentSegment = pathname.split('/').at(-1)

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center">
        {/* ホームのリンクは常に表示する */}
        <HomeBreadcrumbItem currentSegment={currentSegment} />
        {/* 動的なセグメントのリンクを表示する */}
        {segments.map((segment, index, arr) => {
          if (arr.length === index + 1) {
            // 最後の要素の場合はリンクではなくテキストを表示する
            return (
              <div key={segment} className="flex items-center">
                <BreadcrumbSeparator className="px-1" />
                <p className="text-foreground">{segment}</p>
              </div>
            )
          }
          return (
            <div key={segment} className="flex items-center">
              <BreadcrumbSeparator className="px-1" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/${arr.slice(0, index + 1).join('/')}`}> {segment}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
