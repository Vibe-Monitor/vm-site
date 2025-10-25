import type { Metadata } from 'next'
import './globals.css'
import { PostHogProvider } from '@/components/PostHog/PostHogProvider'
import { CleanFooter } from '@/components/CleanFooter'
export const metadata: Metadata = {
  title: 'Vibemonitor.ai',
  description: 'Landing Page of Vibemonitor.ai',
  icons: {
    icon: '/logo.svg?v=2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <PostHogProvider>
        <html lang="en">
        <body>{children}</body>
        </html>
        <CleanFooter />
      </PostHogProvider>

  )
}
