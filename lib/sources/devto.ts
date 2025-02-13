import type { BlogPost, FetchBlogOptions } from "@/types/blog"

export async function fetchDevToBlogs(options: FetchBlogOptions): Promise<BlogPost[]> {
  const response = await fetch(`https://dev.to/api/articles?username=cstayyab`)
  const data = await response.json()

  let blogs: BlogPost[] = data.map((article: any) => ({
    id: article.id.toString(),
    title: article.title,
    url: article.url,
    image: article.cover_image ?? article.social_image,
    summary: article.description,
    publishedAt: article.published_at,
    author: article.user.name,
    source: "devto",
  }))

  // Apply filtering by date range
  if (options.startDate) {
    blogs = blogs.filter((post) => new Date(post.publishedAt) >= new Date(options.startDate!))
  }
  if (options.endDate) {
    blogs = blogs.filter((post) => new Date(post.publishedAt) <= new Date(options.endDate!))
  }

  return blogs
}

