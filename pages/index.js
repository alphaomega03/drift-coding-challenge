import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import LearnMore from './components/LearnMore'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drift Protocol</title>
        <meta name="description" content="Verifies user identity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <Content />

        <LearnMore/>
      </main>
      <Footer />
    </div>
  )
}
