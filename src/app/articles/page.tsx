import Link from "next/link";
import SubPageLayout from "@/app/layouts/SubPageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { getAllPublishedArticles } from "@/lib/articles";

const categoryColors: Record<string, string> = {
  Prevention: "bg-green-500 hover:bg-green-600",
  Recovery: "bg-teal-500 hover:bg-teal-600",
  Exercise: "bg-emerald-500 hover:bg-emerald-600",
  Nutrition: "bg-lime-500 hover:bg-lime-600",
  "Mental Health": "bg-cyan-500 hover:bg-cyan-600",
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export const metadata = {
  title: "Articles • Achilles Tendon Rupture Recovery",
  description:
    "Expert recovery guidance: evidence-based articles to help you understand your injury and navigate every step of recovery.",
};

export default function ArticlesPage() {
  const articles = getAllPublishedArticles();

  return (
    <SubPageLayout showHeader={false} showDisclaimer={false}>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Achilles Tendon Rupture Recovery Articles &amp; Guides
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert insights, research-backed advice, and practical tips for your
          Achilles tendon recovery journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="relative w-full h-48 bg-muted">
                <img
                  src={article.featuredImage}
                  alt={article.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    className={`${categoryColors[article.category] || "bg-primary"} text-white border-0`}
                  >
                    {article.category}
                  </Badge>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    {/*<span className="hidden sm:inline">{formatDate(article.date)}</span>*/}
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <Button variant="link" className="p-0 text-primary">
                  Read Article →
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </SubPageLayout>
  );
}
