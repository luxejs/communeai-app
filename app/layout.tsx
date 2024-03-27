import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Commune AI',
  description:
    'Commune AI: Revolutionizing software development for everyone. Join our Discord community today!',
  robots: 'all',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} h-full relative bg-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
