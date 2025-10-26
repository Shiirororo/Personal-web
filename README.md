This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

I also use ShadCN for the components
List of ShadCN components that I use:

- Button
- Card
- Dialog
- Input
- LAbel
- Textarea

## Environment Setup

Create a `.env.local` file in the root directory and add your backend API URL:

```bash
DEV_BACKEND_API_KEY=https://your-backend-url.com
```

## Blog API Integration

The blog now fetches content from your backend API. The available blog post slugs are:
- `mysql_commands_summary`
- `nextjs-guide`

The API endpoints expected are:
- `GET {DEV_BACKEND_API_KEY}/posts` - Returns list of all blog posts
- `GET {DEV_BACKEND_API_KEY}/posts/{slug}` - Returns specific blog post by slug

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

