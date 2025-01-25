import { ThemeProvider } from '@/app/common/theme-provider'
import { Toaster } from '@ui/sonner'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ModeToggle } from './common/modeToggle'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Default Next.js app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  /* remove suppressHydrationWarning will cause warnings because next-themes updates that element.
  This property only applies one level deep, so it won't block hydration
  warnings on other elements. */
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['sun', 'system', 'light', 'dark']}
        >
          {children}
          <Toaster richColors />
          <div className="fixed bottom-4 right-4">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
