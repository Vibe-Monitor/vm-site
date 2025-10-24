import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibemonitor.ai - Landing Page',
  description: 'Create Landing Page for Vibemonitor.ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
