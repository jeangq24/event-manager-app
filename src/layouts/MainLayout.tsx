import { type ReactNode } from 'react'
import Navbar from '../components/navbar'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen h-auto bg-gradient-to-b from-blue-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-2 xs:py-3 sm:py-6 px-2 xs:px-3 sm:px-4">
        <Navbar/>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-2 xs:py-3 sm:py-6 px-1 xs:px-2 sm:px-4 w-full gap-8">
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-2 sm:px-4 py-4 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Event Manager. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}