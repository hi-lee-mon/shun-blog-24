import { ThemeProvider } from '@/components/theme/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
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
      <body className={cn(inter.className, 'min-h-dvh')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
