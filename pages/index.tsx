import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ember.co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home__header}>
        <div className={styles.home__header_container}>
          <h1 className={styles.home__header_title}>
            <span>Invoices that get</span>
            <span>you paid on time.</span>
          </h1>
          <Link href="/calculate">
            <a className={styles.home__action_btn}>
              Send better invoices now 
              <img src="./button-arrow.svg" alt="Arrow icon."/>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.home__image}>
        <img src="./invoice.png" alt="Example invoice document."/>
      </div>  
    </div>
  )
}

export default Home