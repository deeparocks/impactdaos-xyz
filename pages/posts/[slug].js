import { getPostBySlug, getAllPosts } from '../../lib/posts'
import { markdownToHtml} from "../../lib/markdown"
import { Layout } from "../../components/Layout"

export default function Post({ post }) {
  return (
    <Layout
      title={post.title}
      description={post.description}
      image={post.image}
      >
         <article className="prose lg:prose-xl" 
         dangerouslySetInnerHTML={{__html: post.content}} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'date',
    'slug',
    'author',
    'content',
    'image',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}