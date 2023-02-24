import Image from "next/image";

import { Layout } from "../components/Layout";
import { getAllPosts } from "../lib/posts";

import bookImage from "../public/book.jpg";
// import tweet1 from '../public/tweet1.png'
// import tweet2 from '../public/tweet2.png'
// import tweet3 from '../public/tweet3.png'
// import tweet4 from '../public/tweet4.png'

// const tweets = [
//   [tweet1, "1550168023968796673"],
//   [tweet2, "1583474894821810176"],
//   [tweet3, "1579494001153277954"],
//   [tweet4, "1583137673174487040"]
// ]

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "description", "image"]);

  return { props: { posts: allPosts } };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="flex flex-col w-full md:w-6/12">
        <a href="/posts/1-why-impact-dao-book">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-2 shadow">
            <Image
              className="text-left"
              src={bookImage}
              alt="Picture of the book"
              height={450}
              objectFit="scale-down"
              placeholder="blur" // Optional blur-up while loading
            />
            <div className="italic text-xl text-center md:text-left md:text-2xl text-[#03bbc7]">
              "The guide to everything Impact DAO. A book written by a DAO for
              those who want to build their own DAOs"
            </div>
          </div>
        </a>
        <div>
          {posts.map((post, i) => (
            <div
              key={i}
              className="hover:bg-gray-50 py-6 border-t border-green-100 first:border-t-0"
            >
              <a
                href={`/posts/${post.slug}`}
                className="text-2xl font-semibold"
              >
                {post.title}
              </a>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
