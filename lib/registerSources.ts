import { blogRegistry } from "@/lib/blogRegistry"
import { fetchMediumBlogs } from "@/lib/sources/medium"
import { fetchDevToBlogs } from "@/lib/sources/devto"

export function registerBlogSources() {
  // blogRegistry.registerSource("medium", fetchMediumBlogs)
  blogRegistry.registerSource("devto", fetchDevToBlogs)
}

