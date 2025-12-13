'use client'

import { useEffect } from "react"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        // 👇 Lưu ý: bọc toàn bộ trong <html><body> để bỏ qua layout.tsx
        <html>
            <body className="flex flex-col items-center justify-center h-screen bg-background text-foreground text-center">
                <h1 className="text-5xl font-bold mb-4 text-destructive">Đã xảy ra lỗi 😢</h1>
                <p className="mb-6 text-lg text-muted-foreground">{error.message || "Có sự cố trong hệ thống."}</p>

                <button
                    onClick={() => reset()}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:bg-primary/90 transition-all"
                >
                    Thử lại
                </button>

                <a
                    href="/"
                    className="mt-6 text-primary underline hover:text-primary/80 transition"
                >
                    Quay về trang chủ
                </a>
            </body>
        </html>
    )
}
