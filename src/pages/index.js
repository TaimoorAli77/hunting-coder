import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import homeImg from '../../public/h.jpg'
// import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
    <style jsx>
      {`
      .cen{
        text-align:center;
        padding-bottom:3em;
      }
     
      `}
    </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='next js , hunting coder , huntingCoder blog' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script  src='/sc.js' strategy='lazyOnload'></Script> */}

     


      <main className={`${styles.main} ${inter.className}`}>

        <main >
          <h1 className={styles.huntingHead}> 
          <span className=''>
            Hunting Coder 
            </span>
            </h1>
            <div className='cen'>

            <Image className={styles.myimg} alt='Coder Puc' priority={true}  src={homeImg} height={100} width={134}>
            </Image>
            </div>


          <h2>Popular Blogs</h2><br></br>

          <div>
            <h3>How to learn javaScript in 2023?</h3>
            <p>Javascript is the language used to design web logic.</p>
          </div>
          <br></br>

          <div>
            <h3>How to learn javaScript in 2023?</h3>
            <p>Javascript is the language used to design web logic.</p>
            <br></br>
          </div>
          <div>
            <h3>How to learn javaScript in 2023?</h3>
            <p>Javascript is the language used to design web logic.</p>
            <br></br>
          </div><div>
            <h3>How to learn javaScript in 2023?</h3>
            <p>Javascript is the language used to design web logic.</p>
            <br></br>
          </div>


        </main>






      


      </main>
    </>
  )
}
