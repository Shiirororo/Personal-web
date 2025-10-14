import MarkdownArticle from "@/components/MarkdownArticle"
import { getMarkdownFileBySlug } from "@/lib/markdown"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Try to get the markdown file
  const markdownFile = getMarkdownFileBySlug("content/blog", params.slug)
  
  if (!markdownFile) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <MarkdownArticle 
          content={markdownFile.content}
          metadata={markdownFile.metadata}
        />
      </div>
    </div>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const { getAllMarkdownFiles } = await import("@/lib/markdown")
  const posts = getAllMarkdownFiles("content/blog")
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
