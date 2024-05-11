import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "JIELKO",
  description: "Application pour téléchargement de videos Youtube"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar/>
          <main className="relative">
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  )
}
