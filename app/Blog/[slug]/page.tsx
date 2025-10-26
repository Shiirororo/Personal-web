import MarkdownArticle from "@/components/MarkdownArticle"
import { fetchBlogPost, getAvailableSlugs } from "@/lib/api"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch the blog post from API
  const blogPost = await fetchBlogPost(params.slug)
  
  if (!blogPost) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <MarkdownArticle 
          content={blogPost.content}
          metadata={{
            title: blogPost.title,
            description: blogPost.description,
            author: blogPost.author,
            publishedAt: blogPost.publishedAt,
            tags: blogPost.tags,
            coverImage: blogPost.coverImage,
            ...blogPost.metadata
          }}
        />
      </div>
    </div>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAvailableSlugs()
  
  return slugs.map((slug) => ({
    slug: slug,
  }))
}
