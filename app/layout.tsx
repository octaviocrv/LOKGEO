import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SearchContextProvider } from './context/search'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lokgeo Locacao de Veiculos',
  description: 'Locacao mensal de carros, picapes e caminhonetes com quilometragem livre.',
  icons: {
    icon: '/icons/logo-lokgeo.svg',
    shortcut: '/icons/logo-lokgeo.svg',
    apple: '/icons/logo-lokgeo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SearchContextProvider>
       <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

    </SearchContextProvider>
   
  )
}
