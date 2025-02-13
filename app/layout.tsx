import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/Header'

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
  keywords: 'developer, software engineer, CS Tayyab, cstayyab',
  openGraph: {
    type: 'profile',
    username: 'cstayyab',
    firstName: 'Muhammad Tayyab',
    lastName: 'Sheikh',
    url: 'https://cstayyab.com',
    emails: [
      "me@cstayyab.com",
      "hire@cstayyab.com",
    ],
    gender: 'Male',
    images: [
      'https://apna.link/CSTayyabAvatar'
    ],
    countryName: 'Pakistan',
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'Muhammad Tayyab Sheikh',
    creatorId: '@CSTayyab',
    images: [
      'https://apna.link/CSTayyabAvatar'
    ],
  },
  verification: {
    google: '1EF6Z63u4zhPPvD0LnAv2UVR88R2z0YMvcmhol2txwk'
  }
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
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 pt-20">
            {children}
          </main>

          <footer className="container mx-auto px-4 py-8 mt-16 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Tayyab Sheikh (CSTayyab). All rights reserved.
          </footer>
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.GA4ID ?? ''} />
    </html>
  )
}
