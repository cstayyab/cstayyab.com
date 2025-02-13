import { blogRegistry } from "@/lib/blogRegistry"
import { registerBlogSources } from "@/lib/registerSources"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon } from "lucide-react"
import Script from "next/script"
import { cstayyab } from "@/schemas/cstayyab"
import { Metadata } from "next"
import Link from "next/link"

export const revalidate = 3600 // Revalidate every hour

async function getBlogs() {
    registerBlogSources() // Register blog sources before fetching
    try {
        const blogs = await blogRegistry.fetchAllBlogs({ sortBy: "date", order: "desc" })
        return blogs
    } catch (error) {
        console.error("Error fetching blogs:", error)
        return []
    }
}

export const metadata: Metadata = {
    title: 'Blog - Muhammad Tayyab Sheikh aka CSTayyab - Full Stack Web & Mobile App Developer',
    description: 'Thoughts, ideas, and insights on software development and technology'
}

export default async function BlogsPage() {
    const blogs = await getBlogs()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: blogs.map((blog, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "BlogPosting",
                headline: blog.title,
                url: blog.url,
                image: blog.image,
                datePublished: blog.publishedAt,
                author: cstayyab,
                publisher: {
                    "@type": "Organization",
                    name: blog.source === "medium" ? "Medium" : "Dev.to",
                },
                description: blog.summary,
            },
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2 text-center">My Blog Posts</h1>
                    <p className="text-xl text-muted-foreground mb-12 text-center">
                        Thoughts, ideas, and insights on software development and technology
                    </p>
                </div>
                {blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                        {blogs.map((blog) => (
                            <div>
                                <Card key={blog.id} className="flex flex-col">
                                    <CardHeader>
                                        {blog.image && <img
                                            src={blog.image || "/placeholder.svg"}
                                            alt={blog.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />}
                                        <CardTitle className="text-xl mb-2 line-clamp-3"><a href={blog.url} target="_blank">{blog.title}</a></CardTitle>
                                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                                            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                                            {/* <Badge>{blog.source}</Badge> */}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{blog.summary}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild>
                                            <a href={blog.url} target="_blank" rel="noopener noreferrer">
                                                Read More <ExternalLinkIcon className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">No blog posts found. Please check back later.</p>
                )}
            </div>
        </>
    )
}

