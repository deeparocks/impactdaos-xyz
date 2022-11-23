import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), './posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = new Map()

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items.set(field, realSlug)
    }
    else if (field === 'content') {
      items.set(field, content)
    }
    else if (typeof data[field] !== 'undefined') {
      items.set(field, data[field])
    }
  })

  return Object.fromEntries(items)
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.chapter > post2.chapter ? -1 : 1))

  return posts
}