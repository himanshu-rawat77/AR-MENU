import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tasty Bites',
  description: 'Order delicious food online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary text-primary-foreground shadow">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link href="/" className="flex-shrink-0 flex items-center">
                    <span className="text-2xl font-bold">Tasty Bites</span>
                  </Link>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link href="/" className="border-primary-foreground text-primary-foreground hover:border-secondary hover:text-secondary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Home
                    </Link>
                    <Link href="/menu" className="border-transparent text-primary-foreground hover:border-secondary hover:text-secondary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Menu
                    </Link>
                    <Link href="/cart" className="border-transparent text-primary-foreground hover:border-secondary hover:text-secondary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Cart
                    </Link>
                    <Link href="/" className="border-transparent text-primary-foreground hover:border-secondary hover:text-secondary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      About
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm">
                © 2023 Tasty Bites. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}