import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string; // ISO
  featuredImage: string;
  alt: string;
  adSlots: ("top" | "middle" | "bottom")[];
  status: "draft" | "published";
};
export type Article = ArticleMeta & { body: string };

const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

function readMdx(slug: string) {
  return fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".mdx")).map(f => f.replace(/\.mdx$/, ""));
}

export function getArticle(slug: string): Article | null {
  try {
    const raw = readMdx(slug);
    const { data, content } = matter(raw);
    const fmSlug = (data.slug as string) || slug;

    const meta: ArticleMeta = {
      slug: fmSlug,
      title: data.title,
      description: data.description,
      category: data.category,
      readTime: data.readTime,
      date: data.date,
      featuredImage: data.featuredImage,
      alt: data.alt,
      adSlots: Array.isArray(data.adSlots) ? data.adSlots : [],
      status: (data.status as ArticleMeta["status"]) ?? "draft",
    };

    return { ...meta, body: content };
  } catch {
    return null;
  }
}

export function getAllArticles(): Article[] {
  return getAllArticleSlugs()
    .map(s => getArticle(s))
    .filter((a): a is Article => Boolean(a));
}

export function getAllPublishedArticles(): Article[] {
  return getAllArticles()
    .filter(a => a.status === "published")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
