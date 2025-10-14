---
title: "Giới thiệu Shadcn + Preview Card"
description: "Một ví dụ về mapping JSON lên các card của shadcn và mở preview bằng Dialog."
author: "Người viết"
publishedAt: "2025-10-01T09:00:00.000Z"
tags: ["Next.js", "React", "Tutorial", "Web Development"]
coverImage: "https://images.unsplash.com/photo-1557800636-894a64c1696f"
---

# ⚡ Giới thiệu Next.js

**Next.js** là một framework mạnh mẽ dựa trên **React**, giúp bạn xây dựng **ứng dụng web hiện đại, nhanh, và tối ưu SEO** với hỗ trợ sẵn cho **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)** và **API Routes**.

---

## 🚀  1. Giới thiệu
Next.js ra mắt vào năm 2016 do Vercel phát triển, được tạo ra để giải quyết các vấn đề của ứng dụng trang đơn (SPA) như tối ưu hóa SEO, tốc độ tải trang và phân tách mã. Framework này đã nhanh chóng trở nên phổ biến nhờ cung cấp các tính năng như Server-Side Rendering (SSR) và Static Site Generation (SSG), giúp nhà phát triển xây dựng các ứng dụng React có hiệu suất cao một cách dễ dàng. 


## ⚙️ 2. Cài đặt Next.js

### Yêu cầu:
- Node.js >= 18.0.0
- npm hoặc yarn

### Tạo project mới:
```bash
npx create-next-app@latest my-next-app
# hoặc:
yarn create next-app my-next-app
```
Khi cài đặt, bạn sẽ thấy các lời nhắc sau:

```bash
What is your project named? my-app
Would you like to use TypeScript? No / <u>Yes</u>
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack? (recommended) No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*

```
Khuyến nghị nên sử dụng Typescript, AppRouter và TailwindCSS 


### Chạy ứng dụng:
```bash
cd my-next-app
npm run dev
# hoặc:
yarn dev
```

## 3. Những điểm mạnh của NextJS
### I. Hiệu năng cao 
- SSR (Server-Side Rendering): Trang được render sẵn trên server → tốc độ tải nhanh, tốt cho SEO.

- SSG (Static Site Generation): Trang được build sẵn dưới dạng HTML tĩnh → siêu nhanh, giảm tải cho server.

- ISR (Incremental Static Regeneration): Kết hợp giữa SSR và SSG → tự động cập nhật nội dung tĩnh mà không cần rebuild toàn bộ site.

- Image Optimization: next/image tối ưu kích thước, lazy-loading, và nén ảnh tự động.

### II. Tối ưu SEO

- Nhờ SSR và SSG, các công cụ tìm kiếm có thể quét nội dung thật thay vì JavaScript → SEO hiệu quả hơn so với React thuần.

- Tích hợp metadata API, Open Graph tags, và dynamic routing giúp tối ưu SEO từng trang dễ dàng.