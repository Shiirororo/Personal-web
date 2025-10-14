import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"

interface ArticleMetadata {
  title: string
  description?: string
  author?: string
  publishedAt?: string
  tags?: string[]
  coverImage?: string
}

interface MarkdownArticleProps {
  content: string
  metadata?: ArticleMetadata
  className?: string
}

export default function MarkdownArticle({ 
  content, 
  metadata, 
  className 
}: MarkdownArticleProps) {
  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      <Card className="shadow-lg border border-gray-700 bg-black text-white">
        {metadata && (
          <>
            <CardHeader className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  {metadata.title}
                </h1>
                {metadata.description && (
                  <p className="text-lg text-gray-300">
                    {metadata.description}
                  </p>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                {metadata.author && (
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">By {metadata.author}</span>
                  </div>
                )}
                {metadata.publishedAt && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">•</span>
                    <time dateTime={metadata.publishedAt} className="text-gray-400">
                      {new Date(metadata.publishedAt).toLocaleDateString('vi-VN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                )}
              </div>

              {metadata.tags && metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {metadata.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
            <Separator />
          </>
        )}
        
        <CardContent className="prose prose-lg max-w-none py-8 text-white">
          <ReactMarkdown
            components={{
              // Headings
              h1: ({ children, ...props }) => (
                <h1 className="text-3xl font-bold mb-4 mt-8 first:mt-0 text-white" {...props}>
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }) => (
                <h2 className="text-2xl font-semibold mb-3 mt-6 text-white" {...props}>
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3 className="text-xl font-semibold mb-2 mt-4 text-white" {...props}>
                  {children}
                </h3>
              ),
              h4: ({ children, ...props }) => (
                <h4 className="text-lg font-medium mb-2 mt-3 text-white" {...props}>
                  {children}
                </h4>
              ),
              
              // Paragraphs
              p: ({ children, ...props }) => (
                <p className="mb-4 leading-relaxed text-white" {...props}>
                  {children}
                </p>
              ),
              
              // Links
              a: ({ children, href, ...props }) => (
                <a 
                  href={href} 
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors" 
                  {...props}
                >
                  {children}
                </a>
              ),
              
              // Lists
              ul: ({ children, ...props }) => (
                <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="text-white" {...props}>
                  {children}
                </li>
              ),
              
              // Code blocks
              code: ({ children, className, ...props }) => {
                const isInline = !className
                if (isInline) {
                  return (
                    <code 
                      className="bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-green-400" 
                      {...props}
                    >
                      {children}
                    </code>
                  )
                }
                return (
                  <code className={cn("block", className)} {...props}>
                    {children}
                  </code>
                )
              },
              pre: ({ children, ...props }) => (
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700 text-green-400" {...props}>
                  {children}
                </pre>
              ),
              
              // Blockquotes
              blockquote: ({ children, ...props }) => (
                <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-300 mb-4" {...props}>
                  {children}
                </blockquote>
              ),
              
              // Tables
              table: ({ children, ...props }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-700" {...props}>
                    {children}
                  </table>
                </div>
              ),
              th: ({ children, ...props }) => (
                <th className="border border-gray-700 bg-gray-800 px-4 py-2 text-left font-semibold text-white" {...props}>
                  {children}
                </th>
              ),
              td: ({ children, ...props }) => (
                <td className="border border-gray-700 px-4 py-2 text-white" {...props}>
                  {children}
                </td>
              ),
              
              // Images
              img: ({ src, alt, ...props }) => (
                <img 
                  src={src} 
                  alt={alt} 
                  className="max-w-full h-auto rounded-lg mb-4 shadow-sm" 
                  {...props}
                />
              ),
              
              // Horizontal rule
              hr: ({ ...props }) => (
                <hr className="my-8 border-gray-700" {...props} />
              ),
              
              // Strong and emphasis
              strong: ({ children, ...props }) => (
                <strong className="font-semibold text-white" {...props}>
                  {children}
                </strong>
              ),
              em: ({ children, ...props }) => (
                <em className="italic text-white" {...props}>
                  {children}
                </em>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </CardContent>
      </Card>
    </div>
  )
}
