import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/insights");

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  excerpt: string;
  description: string;
  coverImage: string;
  content: string;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<Post, "content">),
      content,
    };
  });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();

  return posts.find((post) => post.slug === slug) ?? null;
}