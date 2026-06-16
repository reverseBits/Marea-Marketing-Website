import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'content/articles')

export interface ArticleMeta {
  slug: string
  title: string
  hook: string
  tags: string[]
  category: string
  readTime: string
  image?: string
  content: string
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const files = fs.readdirSync(articlesDir)
  return files.filter(f => f.endsWith('.mdx')).map(f => f.replace(/\.mdx$/, ''))
}

export async function getArticleBySlug(slug: string): Promise<ArticleMeta | null> {
  const filePath = path.join(articlesDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    hook: data.hook as string,
    tags: (data.tags as string[]) ?? [],
    category: (data.category as string) ?? '',
    readTime: (data.readTime as string) ?? '8 min',
    image: data.image as string | undefined,
    content,
  }
}

export async function getAllArticles(): Promise<ArticleMeta[]> {
  const slugs = await getAllArticleSlugs()
  const articles = await Promise.all(slugs.map(getArticleBySlug))
  return articles.filter(Boolean) as ArticleMeta[]
}
