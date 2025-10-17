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
        image: 'https://techvccloud.mediacdn.vn/280518386289090560/2024/8/20/nextjs-17241427687401007111163-20-0-582-1000-crop-1724142772135873217359.jpg',
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
