import type { NextPage } from 'next'
import Head from 'next/head'
import { DarkModeToggle } from '../components/toggle'
import { Widget } from '../components/widget'
import styles from '../styles/Home.module.css'
import { useDarkMode } from 'usehooks-ts'

const Home: NextPage = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (


    <div className={styles.container}>
      <Head>
        <title>Uniswap Widget</title>
        <meta name="description" content="Uniswap Widget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <DarkModeToggle isDarkMode={isDarkMode} toggle={toggle}></DarkModeToggle>
        
        <h1 className={styles.title}>
          Uniswap Widget
        </h1>

        <Widget isDarkMode={isDarkMode} />

      </main>
    </div>
  )
}

export default Home