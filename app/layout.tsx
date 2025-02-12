import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Muhammad Tayyab Sheikh aka CSTayyab - Full Stack Web & Mobile App Developer',
  description: 'Passionate about creating seamless experiences across web and mobile platforms. Specializing in React, React Native, Node.js, and cloud technologies.',
  applicationName: 'CSTayyab Portfolio',
  authors: [
    {
      name: 'Muhammad Tayyab Sheikh',
      url: 'https://cstayyab.com',
    }
  ],
  creator: 'Muhammad Tayyab Sheikh',
  keywords: 'developer, software engineer, CS Tayyab, cstayyab'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.GA4ID ?? ''} />
    </html>
  )
}
