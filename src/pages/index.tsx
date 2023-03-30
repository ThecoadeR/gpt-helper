import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import DashboardSearch from '@/components/Dashboard/Search'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <DashboardSearch />
    </>
  )
}
