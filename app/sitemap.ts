import { promises as fs } from "fs"
import path from "path"
import { MetadataRoute } from "next"

async function findPageFiles(directory: string): Promise<string[]> {
    let results: string[] = []
    const entries = await fs.readdir(directory, { withFileTypes: true })
    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name)
        if (entry.isDirectory()) {
            results = results.concat(await findPageFiles(fullPath))
        } else if (entry.name === "page.tsx" || entry.name === "page.jsx") {
            results.push(fullPath)
        }
    }
    return results
}

function toRoute(baseDir: string, filePath: string): string {
    // Get the relative path from the app directory
    let route = path.relative(baseDir, filePath)
    // Remove the file name
    route = route.replace(/(\/|\\)?page\.(tsx|jsx)$/, "")
    // Handle the root page
    if (route === "") return ""
    // Normalize route separators to URL style
    route = route.split(path.sep).join("/")
    return route
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.BASE_URL || "https://cstayyab.com"
    const appDir = path.join(process.cwd(), "app")
    
    // Find all page files under the app directory
    const pageFiles = await findPageFiles(appDir)
    const routes = pageFiles.map((filePath) => {
        const route = toRoute(appDir, filePath)
        const url = route ? `${baseUrl}/${route}` : baseUrl
        return {
            url,
            lastModified: new Date().toISOString()
        }
    }) 

    return routes
}