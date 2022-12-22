import Head from "next/head";
import Script from "next/script";
import { FaTwitter, FaPodcast, FaBookOpen } from "react-icons/fa";

export const Layout = ({
  title = "Impact Dao Book",
  description = "The definitive guide to everything Impact DAO",
  twitter = "@impactdaos",
  image = "https://impactdaos.xyz/banner.jpg",
  children,
}) => {
  return (
    <div className="bg-white dark:bg-dark">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={twitter} />
        <meta name="twitter:image" content={image} href={image} />
        <meta name="twitter:image:alt" content={`{title} Logo`} />
        <meta property="og:image" content={image} />
      </Head>

      <div className="w-full px-2">
        <div className="w-full md:w-6/12 mx-auto flex flex-wrap gap-2 items-center justify-between bg-sky-500 p-3 px-6 rounded-b-xl shadow-md">
          <h1 className="text-2xl font-semibold text-white uppercase">
            <a href="/">Impact DAO Book</a>
          </h1>

          <div className="flex gap-4">
            <a href="https://twitter.com/impactdaos" target="_blank">
              <FaTwitter size={30} className="text-white" />
            </a>
            <a
              href="https://impactdaomedia.buzzsprout.com/share"
              target="_blank"
            >
              <FaPodcast size={30} className="text-white" />
            </a>
            <a
              href="https://cryptogood.substack.com/s/impact-daos-research"
              target="_blank"
            >
              <FaBookOpen size={30} className="text-white" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-6/12 mx-auto flex items-center justify-center p-6 mt-2 bg-lime-100 rounded-xl">
          <div id="custom-substack-embed"></div>
        </div>
      </div>

      <main className="container mx-auto p-4 flex flex-col items-center gap-6">
        {children}
      </main>

      <footer className="border-t bg-sky-500 text-white  text-center">
        <div className="container mx-auto pt-10 pb-20 px-4 max-w-3xl">
          <div id="buzzsprout-large-player"></div>
          <p className="text-3xl mt-4">
            We're a web3 media collective on a mission to elevate the stories of
            impact DAOs
          </p>
          <p className="text-xs uppercase mt-4">Impact DAO Media</p>
        </div>
      </footer>

      <Script
        src="https://www.buzzsprout.com/2057401.js?container_id=buzzsprout-large-player&player=large"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="https://substackapi.com/widget.js"
        strategy="lazyOnload"
      ></Script>

      <Script strategy="beforeInteractive">
        {`window.CustomSubstackWidget = {
            substackUrl: "cryptogood.substack.com",
            placeholder: "Enter your email",
            buttonText: "Subscribe",
            theme: "custom",
            colors: {
                primary: "limegreen",
                input: "#FFFFFD",
                email: "#1D1D1D",
                text: "#ffffff",
            }
            };`}
      </Script>
    </div>
  );
};
