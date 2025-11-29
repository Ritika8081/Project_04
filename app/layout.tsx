import '../styles/globals.css'
import React from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'SoulConnect',
  description: 'Heal, Understand, Grow — Love Smarter, Not Harder.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen p-6">
          <Header />
          <main className="flex items-center justify-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
