import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const session = await getServerSession(); 

  if (!session) {
    redirect('api/auth/signin');
  }
 
  return (
    <main className={styles.main}>
      
    </main>
  )
}
