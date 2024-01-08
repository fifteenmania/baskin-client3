import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GnbWrapper } from './_components/gnb-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '써리원 시뮬레이터',
  description:
    'Playground for the famous Korean drinking game - Baskin Robbins 31.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className}`}>
        <GnbWrapper>
          <div className="pr-6 pl-4 pt-4">{children}</div>
        </GnbWrapper>
      </body>
    </html>
  )
}
