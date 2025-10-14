import ArticleGrid, { Article } from "@/components/FeatureSection";
const sampleArticles: Article[] = [
    {
        id: '1',
        title: 'Cheatsheat cơ bản về MySQL',
        description: 'Các câu lệnh cơ bản dùng trong MySQL',
        author: 'Không Phải Nhân',
        publishedAt: '2025-10-11T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '2',
        title: 'Giới thiệu về NextJS',
        description: 'Hướng dẫn cơ bản về các chưsc năng của nextJS ',
        author: 'Nhân Nguyễn',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.viblo.asia/60/c9457140-6d50-4c63-87d1-f6f84360df33.png',
        slug: 'nextjs-guide',
    },
    
    // ...more
];
export default function BlogPage() {
    return (
        <>
            <div className="min-h-screen">
                <main className="space-y-12 p-6 pt-32">
                    <ArticleGrid articles={sampleArticles} />

                </main>
            </div>
        </>

    )
}