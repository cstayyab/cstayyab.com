import Parser from "rss-parser"
import type { BlogPost, FetchBlogOptions } from "@/types/blog"

const parser = new Parser()

export async function fetchMediumBlogs(options: FetchBlogOptions): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(`https://medium.com/feed/@cstayyab`)

    if (!feed || !feed.items) {
      console.error("Medium feed is empty or undefined")
      return []
    }

    let blogs = feed.items.map((item) => ({
      id: item.guid ?? item.link ?? "",
      title: item.title ?? "Untitled",
      url: item.link ?? "",
      summary: item.contentSnippet ?? "",
      publishedAt: item.isoDate ?? new Date().toISOString(),
      author: item.creator ?? "Unknown",
      source: "medium",
    }))

    // Apply filtering by date range
    if (options.startDate) {
      blogs = blogs.filter((post) => new Date(post.publishedAt) >= new Date(options.startDate!))
    }
    if (options.endDate) {
      blogs = blogs.filter((post) => new Date(post.publishedAt) <= new Date(options.endDate!))
    }

    return blogs
  } catch (error) {
    console.error("Error fetching Medium blogs:", error)
    return []
  }
}

