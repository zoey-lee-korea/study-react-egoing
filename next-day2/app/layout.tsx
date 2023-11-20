"use client";
import type { Metadata } from 'next'
import './globals.css'
import Link from "next/link";
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {

  })

  return (
    <html lang="en">
      <body>
        <h1><Link href='/'>Main</Link></h1>
        <input type='text' placeholder='search'></input>
        <ul>
          <li>
            <Link href='/read/1'>page1</Link>
          </li>
          <li>
            <Link href='/read/2'>page2</Link>
          </li>
        </ul>
        <article>{children}</article>
        <ul>
          <li>
            <Link href='/create'>create</Link>
          </li>
          <li>
            <Link href='/update/1'>update</Link>
          </li>
          <li>
            <button>delete</button>
          </li>
        </ul>
      </body>
    </html>
  )
}
