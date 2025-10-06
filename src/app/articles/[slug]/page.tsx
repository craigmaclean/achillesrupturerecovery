import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { getAllPublishedArticles, getArticle } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/app/mdx-components";
import Ad from "@/components/ads/Ad";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

// Static paths
export function generateStaticParams() {
  return getAllPublishedArticles().map(a => ({ slug: a.slug }));
}

// Next 15: params is a Promise
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.status !== "published") return {};

  const title = `${article.title} • Articles`;
  const description = article.description ?? "Evidence-based guidance on Achilles recovery.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/articles/${article.slug}`,
      images: article.featuredImage ? [{ url: article.featuredImage, alt: article.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.featuredImage ? [article.featuredImage] : undefined,
    },
  };
}

export const revalidate = 3600;

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.status !== "published") return notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">Home</Link> <span>›</span>{" "}
        <Link href="/articles" className="hover:underline">Articles</Link> <span>›</span>{" "}
        <span className="text-foreground">{article.title}</span>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{article.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Badge>{article.category}</Badge>
          <span>{formatDate(article.date)}</span>
          <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{article.readTime}</span>
        </div>
      </header>

      {article.featuredImage && (
        <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-xl bg-muted">
          <Image
            src={article.featuredImage}
            alt={article.alt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 768px, 100vw"
          />
        </div>
      )}

      {article.adSlots.includes("top") && <Ad slot="top" />}

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={article.body} components={mdxComponents} />
      </div>

      {article.adSlots.includes("bottom") && <Ad slot="bottom" />}

      <footer className="mt-10 border-t pt-6 text-sm text-muted-foreground">
        <p>Published: {formatDate(article.date)}</p>
        <p>Category: {article.category}</p>
      </footer>
    </article>
  );
}