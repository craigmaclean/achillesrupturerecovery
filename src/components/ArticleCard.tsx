import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const categoryColors: Record<string, string> = {
  Prevention: "bg-green-500 hover:bg-green-600",
  Recovery: "bg-teal-500 hover:bg-teal-600",
  Exercise: "bg-emerald-500 hover:bg-emerald-600",
  Nutrition: "bg-lime-500 hover:bg-lime-600",
  "Mental Health": "bg-cyan-500 hover:bg-cyan-600",
  "Injury Basics": "bg-blue-500 hover:bg-blue-600",
  "Treatment Options": "bg-purple-500 hover:bg-purple-600",
  "Recovery Guide": "bg-indigo-500 hover:bg-indigo-600",
  "Exercises": "bg-pink-500 hover:bg-pink-600",
  "Return to Activity": "bg-orange-500 hover:bg-orange-600",
};

export interface Article {
  id?: number;
  slug?: string;
  title: string;
  description?: string;
  excerpt?: string;
  category: string;
  readTime: string;
  featuredImage?: string;
  image?: string;
  alt?: string;
}

interface ArticleCardProps {
  article: Article;
  index: number;
  href?: string;
}

export default function ArticleCard({ article, index, href }: ArticleCardProps) {
  // Determine the link href - use provided href, or construct from slug/id
  const linkHref = href || `/articles/${article.slug || article.id}`;
  
  // Use either description or excerpt for the text content
  const description = article.description || article.excerpt;
  
  // Use either featuredImage or image for the image source
  const imageSrc = article.featuredImage || article.image;
  
  // Use alt text or fallback to title
  const altText = article.alt || article.title;

  return (
    <div className="h-full">
      <Link 
        href={linkHref}
        className="block h-full no-underline hover:no-underline focus:no-underline active:no-underline"
        style={{ textDecoration: 'none' }}
      >
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-0 shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}>
          {/* Featured Image */}
          <div className="relative w-full h-56 bg-muted overflow-hidden">
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-full my-0 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Category Badge */}
            <Badge
              className={`absolute top-4 left-4 ${categoryColors[article.category] || "bg-primary"} text-white border-0 font-semibold px-3 py-1`}
            >
              {article.category}
            </Badge>
          </div>

          {/* Card Content - Fixed height structure */}
          <div className="flex flex-col flex-grow">
            <CardHeader className="pb-4">
              {/* Read Time */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {article.title}
              </h3>

              {/* Description - directly below title */}
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </CardHeader>

            {/* Read More Button - pushed to bottom */}
            <CardContent className="pt-0 mt-auto">
              <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </div>
        </Card>
      </Link>
    </div>
  );
}