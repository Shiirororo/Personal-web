import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface MarkdownFile {
  slug: string
  content: string
  metadata: {
    title: string
    description?: string
    author?: string
    publishedAt?: string
    tags?: string[]
    coverImage?: string
    [key: string]: any
  }
}

/**
 * Parse markdown content with frontmatter
 */
export function parseMarkdown(content: string, slug: string): MarkdownFile {
  const { data, content: markdownContent } = matter(content)
  
  return {
    slug,
    content: markdownContent,
    metadata: {
      title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: data.description,
      author: data.author,
      publishedAt: data.publishedAt || data.date,
      tags: data.tags || [],
      coverImage: data.coverImage || data.image,
      ...data
    }
  }
}

/**
 * Read and parse a markdown file
 */
export function readMarkdownFile(filePath: string): MarkdownFile {
  const content = fs.readFileSync(filePath, 'utf-8')
  const slug = path.basename(filePath, '.md')
  return parseMarkdown(content, slug)
}

/**
 * Get all markdown files from a directory
 */
export function getAllMarkdownFiles(directory: string): MarkdownFile[] {
  if (!fs.existsSync(directory)) {
    return []
  }
  
  const files = fs.readdirSync(directory)
  const markdownFiles = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(directory, file)
      return readMarkdownFile(filePath)
    })
    .sort((a, b) => {
      // Sort by publishedAt date, newest first
      const dateA = new Date(a.metadata.publishedAt || 0)
      const dateB = new Date(b.metadata.publishedAt || 0)
      return dateB.getTime() - dateA.getTime()
    })
  
  return markdownFiles
}

/**
 * Get a single markdown file by slug
 */
export function getMarkdownFileBySlug(directory: string, slug: string): MarkdownFile | null {
  const filePath = path.join(directory, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  return readMarkdownFile(filePath)
}

/**
 * Extract markdown metadata from content
 */
export function extractMarkdownMetadata(content: string) {
  const { data } = matter(content)
  return data
}
