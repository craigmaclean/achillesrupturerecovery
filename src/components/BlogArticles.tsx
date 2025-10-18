import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import { getAllPublishedArticles } from "@/lib/articles";

const BlogArticles = async () => {
  // Get first 6 articles from your content directory
  const articles = getAllPublishedArticles().slice(0, 6);

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expert Recovery Guidance
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Evidence-based articles to help you understand your injury and navigate every step of your recovery journey
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

        <div className="text-center mt-12">
          <Button size="lg" className="shadow-lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;