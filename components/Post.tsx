import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ReactMarkdown from "react-markdown"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

interface PostData {
    title: string
    slug: string
    content: string
    coverImage?: string
}

export default async function Post({ params }: { params: { slug: string } }) {
    const res = await fetch(`${baseUrl}/api/posts/${params.slug}`, { cache: "no-store" })

    if (!res.ok) {
        console.error("Lỗi khi fetch bài viết:", res.status, res.statusText)
        return <div className="text-center text-red-500 mt-10">Không thể tải bài viết.</div>
    }

    const data: PostData | { error: string } = await res.json()

    if ("error" in data) {
        return <div className="text-center text-red-500 mt-10">Bài viết không tồn tại.</div>
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Card className="shadow-md border border-border/40">
                <CardHeader>
                    <h1 className="text-3xl font-bold mb-2">{data.title || params.slug.replaceAll("-", " ")}</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="secondary">Nhật ký</Badge>
                        <span>• 10/10/2025</span>
                    </div>
                </CardHeader>
                <Separator />
                <CardContent className="prose dark:prose-invert max-w-none mt-6">
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                </CardContent>
            </Card>
        </div>
    )
}
