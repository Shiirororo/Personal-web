import ArticleGrid, { Article } from "@/components/FeatureSection";
import { fetchAllBlogPosts } from "@/lib/api";

export default async function BlogPage() {
    const blogPosts = await fetchAllBlogPosts();
    
    // Transform API data to Article format
    const articles: Article[] = blogPosts.map((post, index) => ({
        id: (index + 1).toString(),
        title: post.title,
        description: post.description || '',
        author: post.author || 'Unknown Author',
        publishedAt: post.publishedAt || new Date().toISOString(),
        image: post.coverImage || 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
        slug: post.slug,
    }));

    return (
        <>
            <div className="min-h-screen">
                <main className="space-y-12 p-6 pt-32">
                    <ArticleGrid articles={articles} />
                </main>
            </div>
        </>
    )
}
