import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1><a href='/'>Main</a></h1>
        <ul>
          <li>
            <a href='/read/1'>page1</a>
          </li>
          <li>
            <a href='/read/2'>page2</a>
          </li>
        </ul>
        <article>{children}</article>
        <ul>
          <li>
            <a href='/create'>create</a>
          </li>
          <li>
            <a href='/update/1'>update</a>
          </li>
          <li>
            <button>delete</button>
          </li>
        </ul>
      </body>
    </html>
  )
}
