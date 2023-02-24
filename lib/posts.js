import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "./posts");

export function getPostSlugs() {
  return [
    "1-why-impact-dao-book.md",
    "2-what-is-a-dao.md",
    "3-what-is-impactdao.md",
    "4-12-case-studies.md",
    "5-learnings-and-analysis.md",
    "6-daos-and-the-future.md",
    "7-giving-thanks.md",
    "8-dao-and-web3-glossary.md",
    "5-types-of-impact-daos.md",
  ];
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = new Map();

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items.set(field, realSlug);
    } else if (field === "content") {
      items.set(field, content);
    } else if (typeof data[field] !== "undefined") {
      items.set(field, data[field]);
    }
  });

  return Object.fromEntries(items);
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.chapter > post2.chapter ? -1 : 1));

  return posts;
}
