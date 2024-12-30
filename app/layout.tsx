import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Dev Blog',
  description: 'Learn frontend web development with our comprehensive tutorials and tips.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <nav className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
                Frontend Dev Blog
              </Link>
              <ul className="flex space-x-4">
                <li><Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link></li>
                <li><Link href="/roadmap" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Roadmap</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p>Frontend Dev Blog is dedicated to helping developers master the art of frontend web development.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link></li>
                  <li><Link href="/roadmap" className="hover:text-blue-400 transition-colors duration-300">Roadmap</Link></li>
                  <li><Link href="#" className="hover:text-blue-400 transition-colors duration-300">About</Link></li>
                  <li><Link href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">Twitter</a>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">GitHub</a>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>© 2023 Frontend Dev Blog. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

