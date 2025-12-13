export default function NotFound() {
    return (
        <html>

            <body>
                <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground text-center">
                    <h1 className="text-5xl font-bold mb-4 text-blue-400">404</h1>
                    <p className="text-lg mb-6">Trang bạn tìm không tồn tại.</p>
                    <a href="/" className="underline text-blue-400">Quay về trang chủ</a>
                </div>
            </body>
        </html>
    )
}
