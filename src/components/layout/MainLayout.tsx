import { ReactNode } from 'react'
import Link from 'next/link'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-xp-blue to-xp-light-blue">
      {/* Windows XP-style Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-xp-darker-gray flex items-center px-4 z-50">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-xp-yellow">
            <span className="text-xl">🏠</span>
            <span>Start</span>
          </Link>
          <Link href="/categories" className="text-white hover:text-xp-yellow">
            Categories
          </Link>
          <Link href="/about" className="text-white hover:text-xp-yellow">
            About
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        {/* Glass Panel Header */}
        <header className="mt-8 mb-12">
          <div className="bg-glass backdrop-blur-glass rounded-lg p-6 shadow-glass">
            <h1 className="text-4xl font-bold text-xp-blue mb-2">WPNews.net</h1>
            <p className="text-xp-darker-gray">Your AI-Powered News Source</p>
          </div>
        </header>

        {/* Content Area */}
        <div className="bg-glass backdrop-blur-glass rounded-lg p-6 shadow-glass min-h-[calc(100vh-12rem)]">
          {children}
        </div>
      </main>

      {/* Loading Cursor (hidden by default) */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-xp-blue"></div>
      </div>
    </div>
  )
} 