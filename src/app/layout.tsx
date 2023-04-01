import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Vargent App',
  description: 'A vargent app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100 text-text-color">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
