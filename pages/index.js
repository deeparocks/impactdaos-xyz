import Image from 'next/image'


import { Layout } from "../components/Layout"
import { getAllPosts} from "../lib/posts"

import bookImage from '../public/book.png'
import tweet1 from '../public/tweet1.png'
import tweet2 from '../public/tweet2.png'
import tweet3 from '../public/tweet3.png'
import tweet4 from '../public/tweet4.png'

const tweets = [
  [tweet1, "1550168023968796673"], 
  [tweet2, "1583474894821810176"],
  [tweet3, "1579494001153277954"],
  [tweet4, "1583137673174487040"]
]

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'description',
    'image',
  ])


  return { props: {  posts: allPosts  }}
}

export default function Home({ posts }) {
  return (
   <Layout>

        <Image
          src={bookImage}
          alt="Picture of the book"
          width={220}
          height={220}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />

      <div className="flex flex-col gap-4 text-center">
        <p className="italic text-xl max-w-lg text-green-500">
           "The guide to everything Impact DAO. A book written by a DAO for those who want to build their own DAOs"
        </p>
      </div>

      <div className="flex flex-col border">
      {posts.map((post, i) => (
        <div key={i} className="hover:bg-gray-50 p-6 border-t first:border-t-0">
          <a href={`/posts/${post.slug}`} className="text-2xl font-semibold">{post.title}</a>
          <p>{post.description}</p>
        </div>
      ))}
      </div>

        {/* <div className="flex flex-col md:flex-row items-start gap-2 overflow-scroll" >
          {tweets.map(([src, tweetId], i) => (
              <a href={`https://twitter.com/impactdaos/status/${tweetId}`} 
              target="_blank"
              className="border rounded-md p-2"
              key={i}>
              <Image
              src={src}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            /> 
            </a>
            ))}
        </div> */}
    </Layout>
  )
}
