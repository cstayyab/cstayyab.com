export interface BlogPost {
    id: string
    title: string
    url: string
    image?: string
    summary: string
    publishedAt: string
    author: string
    source: string
  }
  
  export interface FetchBlogOptions {
    startDate?: string
    endDate?: string
    sortBy?: "date" | "title"
    order?: "asc" | "desc"
  }
  
  export type FetchBlogFunction = (options: FetchBlogOptions) => Promise<BlogPost[]>
  
  