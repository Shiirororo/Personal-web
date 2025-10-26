export interface BlogPost {
  slug: string
  title: string
  description?: string
  author?: string
  publishedAt?: string
  tags?: string[]
  coverImage?: string
  content: string
  metadata?: {
    [key: string]: any
  }
}

export interface BlogPostList {
  slug: string
  title: string
  description?: string
  author?: string
  publishedAt?: string
  coverImage?: string
}

// Define the available slugs
export const AVAILABLE_SLUGS = [
  'mysql_commands_summary',
  'nextjs-guide'
] as const

export type AvailableSlug = typeof AVAILABLE_SLUGS[number]

/**
 * Fetch a single blog post by slug from the API
 */
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const apiKey = process.env.DEV_BACKEND_API_KEY
    
    if (!apiKey) {
      console.error('DEV_BACKEND_API_KEY environment variable is not set')
      return null
    }

    const response = await fetch(`${apiKey}/posts/${slug}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error(`Failed to fetch blog post: ${response.status} ${response.statusText}`)
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

/**
 * Fetch all available blog posts
 */
export async function fetchAllBlogPosts(): Promise<BlogPostList[]> {
  try {
    const apiKey = process.env.DEV_BACKEND_API_KEY
    
    if (!apiKey) {
      console.error('DEV_BACKEND_API_KEY environment variable is not set')
      return []
    }

    const response = await fetch(`${apiKey}/posts`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`)
      return []
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Get available slugs for static generation
 */
export function getAvailableSlugs(): string[] {
  return [...AVAILABLE_SLUGS]
}
