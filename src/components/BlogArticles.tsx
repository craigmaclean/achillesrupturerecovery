import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Understanding Your Achilles Rupture: What Just Happened?",
    excerpt: "Learn about the anatomy of an Achilles tendon injury, why it happens, and what to expect in the first 48 hours after diagnosis.",
    category: "Injury Basics",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    id: 2,
    title: "Surgery vs. Conservative Treatment: Making the Right Choice",
    excerpt: "A comprehensive comparison of surgical and non-surgical treatment options, recovery timelines, and success rates to help you make an informed decision.",
    category: "Treatment Options",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
  },
  {
    id: 3,
    title: "Week-by-Week Recovery Timeline: What to Expect",
    excerpt: "A detailed breakdown of each phase of recovery, from immobilization through physical therapy to returning to normal activities.",
    category: "Recovery Guide",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    id: 4,
    title: "Physical Therapy Exercises for Achilles Recovery",
    excerpt: "Safe and effective exercises for each stage of recovery, with video demonstrations and tips from certified physical therapists.",
    category: "Exercises",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
  {
    id: 5,
    title: "Nutrition for Tendon Healing: Foods That Help Recovery",
    excerpt: "Discover the role of protein, collagen, and key nutrients in tendon repair and how to optimize your diet for faster healing.",
    category: "Nutrition",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  {
    id: 6,
    title: "Returning to Sports: When and How to Start Training Again",
    excerpt: "Expert guidance on safely returning to running, jumping, and sports activities without risking re-injury.",
    category: "Return to Activity",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
  },
];

const BlogArticles = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card 
              key={article.id} 
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {article.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {article.excerpt}
                </CardDescription>
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
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