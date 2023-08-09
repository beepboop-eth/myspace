
export const dynamic = 'force-static';
import NextAuth from 'next-auth';

import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
  description: 'We are a social media company',
}

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company!</p>
    </main>
  )
}