import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'chuskybrowser — The browser runtime for AI agents',
  description: 'Give your AI the ability to browse, interact, and get work done on the web with chuskybrowser.',
  viewport: { width: 'device-width', initialScale: 1, viewportFit: 'cover' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
