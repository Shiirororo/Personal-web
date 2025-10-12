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
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '3',
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '4',
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '5',
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '6',
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '7',
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '8',
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '9',
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    },
    {
        id: '10',
        title: 'Giới thiệu Shadcn + Preview Card',
        description: 'Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog.',
        author: 'Người viết',
        publishedAt: '2025-10-01T09:00:00.000Z',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
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