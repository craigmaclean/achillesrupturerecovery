import SubPageLayout from "@/app/layouts/SubPageLayout";
import ArticleCard from "@/components/ArticleCard";
import { getAllPublishedArticles } from "@/lib/articles";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard 
            key={article.slug} 
            article={article} 
            index={index}
          />
        ))}
      </div>
    </SubPageLayout>
  );
}