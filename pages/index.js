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

        <div className="flex flex-col md:flex-row items-start gap-2 overflow-scroll" >
          {/* 1550168023968796673 */}
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">141 donors + $8250 in matching 🎉 <a href="https://twitter.com/hashtag/GR14?src=hash&amp;ref_src=twsrc%5Etfw">#GR14</a> @gictoin we are 🙏 to our donors + promoters. we are 🙏 to <a href="https://twitter.com/gitcoin?ref_src=twsrc%5Etfw">@gitcoin</a> for the platform + QF matching. <br /><br />this was our first <a href="https://twitter.com/gitcoin?ref_src=twsrc%5Etfw">@gitcoin</a> fundraise. learnings + reflections🧵 👇</p>&mdash; deepa 🏴‍☠️ 🤺👑 🌶 (Impact DAO Book+ Magazine) (@deeparocks) <a href="https://twitter.com/deeparocks/status/1550168023968796673?ref_src=twsrc%5Etfw">July 21, 2022</a></blockquote>
          {/* 1583474894821810176 */}
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">✌️ultimate guide to impact daos for the beginners. we define impact daos + features + advantages + brief history + why future is impact daos 🔥🌎🚀<a href="https://t.co/ZrqNP7Yx27">https://t.co/ZrqNP7Yx27</a></p>&mdash; ImpactDAO Media (@ImpactDAOMedia) <a href="https://twitter.com/ImpactDAOMedia/status/1583474894821810176?ref_src=twsrc%5Etfw">October 21, 2022</a></blockquote> 
          {/* 1579494001153277954 */}
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">For Ep. 73 of the Crypto Altruism Podcast, we welcome <a href="https://twitter.com/deeparocks?ref_src=twsrc%5Etfw">@deeparocks</a> &amp; <a href="https://twitter.com/0xSardius?ref_src=twsrc%5Etfw">@0xSardius</a> from <a href="https://twitter.com/ImpactDAOMedia?ref_src=twsrc%5Etfw">@ImpactDAOMedia</a> <br /><br />We discuss:<br />✨How <a href="https://twitter.com/hashtag/DAOs?src=hash&amp;ref_src=twsrc%5Etfw">#DAOs</a> help communities organize around causes<br />✨Why nonprofits should become DAOs<br />✨How DAOs &amp; <a href="https://twitter.com/hashtag/web3?src=hash&amp;ref_src=twsrc%5Etfw">#web3</a> will revolutionize work<br /><br />🎧Listen: <a href="https://t.co/hBIv9yShF1">https://t.co/hBIv9yShF1</a> <a href="https://t.co/givngveM1P">pic.twitter.com/givngveM1P</a></p>&mdash; CryptoAltruism 🇺🇦 (@Crypto_Altruism) <a href="https://twitter.com/Crypto_Altruism/status/1579494001153277954?ref_src=twsrc%5Etfw">October 10, 2022</a></blockquote>
          {/* 1583137673174487040 */}
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">15 mins until our friend <a href="https://twitter.com/deeparocks?ref_src=twsrc%5Etfw">@deeparocks</a> with <a href="https://twitter.com/ImpactDAOMedia?ref_src=twsrc%5Etfw">@ImpactDAOMedia</a> is speaking on this Twitter Space. Tune in and show some love! <a href="https://t.co/HvVE9e70iF">https://t.co/HvVE9e70iF</a></p>&mdash; humanDAO | Pocket Assistant NFTs (@humanDAO) <a href="https://twitter.com/humanDAO/status/1583137673174487040?ref_src=twsrc%5Etfw">October 20, 2022</a></blockquote>
          {/* 1580251154461888512 */}
        </div>

      </main>

      <footer className="border-t bg-green-500 text-white  text-center">
        <div className="container mx-auto pt-10 pb-20 px-4 max-w-3xl">
          <div id='buzzsprout-large-player'></div>
          <p className="text-3xl mt-4">
            We're a web3 media collective on a mission to elevate the stories of impact DAOs
          </p>
          <p className="text-xs uppercase mt-4">Impact DAO Media</p>
        </div>
      </footer>

      <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload"></Script>
      <Script src='https://www.buzzsprout.com/2057401.js?container_id=buzzsprout-large-player&player=large' ></Script>
      <Script src="https://substackapi.com/widget.js" strategy="lazyOnload"></Script>

    </div>
  )
}
