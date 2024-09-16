import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Shun',
    default: 'Shun',
  },
  description: "Shun's Blog", // TODO:ページの説明を詳細にする
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // グローバルなcontextの初期化を行う
    <html lang="ja" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-dvh text-balance')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ViewTransitions>{children}</ViewTransitions>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
