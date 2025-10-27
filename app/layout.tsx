import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tnsaai.com'),
  title: 'TNSA AI - Advancing Artificial Intelligence',
  description: 'Advancing artificial intelligence through cutting-edge research, innovative models, and responsible development for a better future.',
  keywords: 'AI, artificial intelligence, machine learning, research, models, API',
  authors: [{ name: 'TNSA AI' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'TNSA AI - Advancing Artificial Intelligence',
    description: 'Advancing artificial intelligence through cutting-edge research, innovative models, and responsible development for a better future.',
    url: 'https://tnsaai.com',
    siteName: 'TNSA AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.className} dark`}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
