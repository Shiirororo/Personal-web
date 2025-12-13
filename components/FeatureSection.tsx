'use client'
import { useState } from "react";
import Link from "next/link";
// import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export type Article = {
    id: string;
    title: string;
    description?: string;
    author?: string;
    publishedAt?: string;
    image?: string;
    content?: string;  //FullHTML/TEXT
    slug?: string;     // For dynamic routing
}
export default function ArticleGrid({ articles }: { articles: Article[] }) {
    const [openArticle, setOpenArticle] = useState<Article | null>(null);
    return (
        <div className="space-y-8">
            {articles.map((a) => (
                <div
                    key={a.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border pb-6"
                >
                    {/* Left: Text content */}
                    <div className="flex-1 pr-4">
                        {a.slug ? (
                            <Link href={`/Blog/${a.slug}`}>
                                                <h2 className="text-2xl font-semibold text-foreground hover:underline cursor-pointer">
                                    {a.title}
                                </h2>
                            </Link>
                        ) : (
                            <h2 className="text-2xl font-semibold text-foreground hover:underline cursor-pointer">
                                {a.title}
                            </h2>
                        )}
                        <div className="text-sm text-muted-foreground mt-1 flex items-center space-x-3">
                            {a.publishedAt && (
                                <span>
                                    {new Date(a.publishedAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            )}
                            <span>📖 5 min read</span>
                        </div>
                        <p className="mt-2 text-muted-foreground">{a.description}</p>
                        <Button variant="link" className="p-0 mt-2 text-sm underline">
                            Xem preview
                        </Button>
                    </div>

                    {/* Right: Thumbnail */}
                    {a.image && (
                        <div className="w-32 h-32 flex-shrink-0 mt-4 sm:mt-0">
                            <img
                                src={a.image}
                                alt={a.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}