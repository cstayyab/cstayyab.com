import type { BlogPost, FetchBlogFunction, FetchBlogOptions } from "@/types/blog"

class BlogRegistry {
  private sources: Record<string, FetchBlogFunction> = {}

  registerSource(name: string, fetchFunction: FetchBlogFunction) {
    this.sources[name] = fetchFunction
  }

  async fetchAllBlogs(options: FetchBlogOptions = {}): Promise<BlogPost[]> {
    const results = await Promise.all(
      Object.entries(this.sources).map(async ([name, fetchFunction]) => {
        try {
          const blogs = await fetchFunction(options)
          if (blogs.length === 0) {
            console.warn(`No blogs fetched from ${name}`)
          }
          return blogs
        } catch (error) {
          console.error(`Error fetching blogs from ${name}:`, error)
          return []
        }
      }),
    )

    const blogs = results.flat()

    if (blogs.length === 0) {
      console.warn("No blogs fetched from any source")
    }

    if (options.sortBy === "date") {
      blogs.sort((a, b) =>
        options.order === "asc"
          ? new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
          : new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      )
    } else if (options.sortBy === "title") {
      blogs.sort((a, b) => (options.order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)))
    }

    return blogs
  }
}

export const blogRegistry = new BlogRegistry()

