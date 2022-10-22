import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import {  TwitterTweetEmbed  } from 'react-twitter-embed';
import { FaTwitter, FaPodcast, FaBookOpen } from "react-icons/fa";

import styles from '../styles/Home.module.css'
import bookImage from '../public/book.png'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Impact Dao Book</title>
        <meta name="description" content="The definitive guide to everything Impact DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-green-500 p-2 w-full text-center"></div>
      <main className="container mx-auto p-4 flex flex-col items-center gap-6">
        <Image
          src={bookImage}
          alt="Picture of the book"
          width={220}
          height={220}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />

      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-5xl mb-3 uppercase">
          Impact DAO Book
        </h1>
        <p className="text-lg max-w-lg text-gray-500">
           The guide to everything Impact DAO. A book written by a DAO for those who want to build their own DAOs
        </p>
      </div>

      <div className="my-4 mb-8">
        <p className="text-sm mb-2 text-center">Book coming soon. Subscribe below to stay updated</p>
        <div id="custom-substack-embed"></div>

        <Script strategy="lazyOnload">
        {`window.CustomSubstackWidget = {
          substackUrl: "cryptogood.substack.com",
          placeholder: "your-email@gmail.com",
          buttonText: "Subscribe",
          theme: "custom",
          colors: {
            primary: "#FFEE59",
            input: "#FFFFFD",
            email: "#1D1D1D",
            text: "#000000",
          }
        };`}
        </Script>
        <Script src="https://substackapi.com/widget.js" strategy="lazyOnload"></Script>
        </div>

        <div className="flex gap-8 items-center justify-center mb-4">
          <a href="https://twitter.com/ImpactDAOMedia" target="_blank">
            <FaTwitter size={60} className="text-blue-500"/>
          </a>
          <a href="https://impactdaomedia.buzzsprout.com/share" target="_blank">
            <FaPodcast size={60} className="text-purple-500" />
          </a>
          <a href="https://cryptogood.substack.com/s/impact-daos-research" target="_blank">
            <FaBookOpen size={60} className="text-green-500" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <TwitterTweetEmbed tweetId={'1550168023968796673'}  />
          <TwitterTweetEmbed tweetId={'1583474894821810176'}  />
          <TwitterTweetEmbed tweetId={'1579494001153277954'}  />
          <TwitterTweetEmbed tweetId={'1583137673174487040'}  />
          <TwitterTweetEmbed tweetId={'1580251154461888512'}  />
          </div>

       
      </main>

      <footer className="border-t bg-green-500 text-white  text-center">
        <div className="container mx-auto pt-10 pb-20 max-w-3xl">
          <div id='buzzsprout-large-player'></div>
          <Script src='https://www.buzzsprout.com/2057401.js?container_id=buzzsprout-large-player&player=large' strategy="lazyOnload"></Script>
          <p className="text-3xl mt-4">
            We're a web3 media collective on a mission to elevate the stories of impact DAOs
          </p>
          <p className="text-xs uppercase mt-4">Impact DAO Media</p>
        </div>
      </footer>
    </div>
  )
}
