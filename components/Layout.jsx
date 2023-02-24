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

      <div className="w-full">
        <div className="mx-auto flex flex-wrap gap-2 items-center justify-between border-b p-3 px-6">
          <h1 className="text-xl font-semibold text-black">
            <a href="/">Impact DAO Book</a>
          </h1>

          <div className="flex gap-4">
            <a href="https://twitter.com/impactdaos" target="_blank">
              <FaTwitter size={30} className="text-blue-500" />
            </a>
            <a href="https://impactdaos.buzzsprout.com/" target="_blank">
              <FaPodcast size={30} className="text-lime-500" />
            </a>
            <a
              href="https://cryptogood.substack.com/s/impact-daos-research"
              target="_blank"
            >
              <FaBookOpen size={30} className="text-white" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-6/12 mx-auto flex items-center justify-center p-2 mt-2">
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
                primary: "#02badf",
                input: "#FFFFFD",
                email: "#1D1D1D",
                text: "#ffffff",
            }
            };`}
      </Script>
    </div>
  );
};
