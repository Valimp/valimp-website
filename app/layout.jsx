import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Valimp | Website',
  description: 'By Valentin Chauvet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className='flex flex-row'>
          <Header />
          { children }
        </div>
      </body>
    </html>
  )
}
