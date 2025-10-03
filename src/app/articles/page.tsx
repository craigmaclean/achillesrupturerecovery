"use client";

import Link from "next/link";
import SubPageLayout from "@/app/layouts/SubPageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const articles = [
  {
    id: "understanding-achilles-tendon-injury",
    slug: "understanding-achilles-tendon-injury",
    title: "Understanding Achilles Tendon Injuries: Causes and Prevention",
    excerpt: "Learn about the most common causes of Achilles tendon injuries and how to prevent them from happening to you.",
    category: "Prevention",
    readTime: "5 min read",
    image: "/placeholder.svg",
  },
  {
    id: "recovery-timeline",
    slug: "recovery-timeline",
    title: "Achilles Tendon Recovery Timeline: What to Expect",
    excerpt: "A comprehensive guide to the recovery process, from initial injury through full rehabilitation.",
    category: "Recovery",
    readTime: "8 min read",
    image: "/placeholder.svg",
  },
  {
    id: "exercises-for-healing",
    slug: "exercises-for-healing",
    title: "Best Exercises for Achilles Tendon Healing",
    excerpt: "Discover the most effective exercises to strengthen your Achilles tendon during recovery.",
    category: "Exercise",
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
  {
    id: "nutrition-for-recovery",
    slug: "nutrition-for-recovery",
    title: "Nutrition Guide for Achilles Tendon Recovery",
    excerpt: "What you eat matters. Learn which foods can accelerate your healing process.",
    category: "Nutrition",
    readTime: "7 min read",
    image: "/placeholder.svg",
  },
  {
    id: "return-to-sports",
    slug: "return-to-sports",
    title: "Returning to Sports After Achilles Injury",
    excerpt: "When is it safe to return to your favorite activities? A practical guide for athletes.",
    category: "Recovery",
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
  {
    id: "mental-health-recovery",
    slug: "mental-health-recovery",
    title: "Mental Health During Achilles Recovery",
    excerpt: "Dealing with the psychological challenges of injury and maintaining a positive mindset.",
    category: "Mental Health",
    readTime: "5 min read",
    image: "/placeholder.svg",
  },
];

const categoryColors: Record<string, string> = {
  "Prevention": "bg-green-500 hover:bg-green-600",
  "Recovery": "bg-teal-500 hover:bg-teal-600",
  "Exercise": "bg-emerald-500 hover:bg-emerald-600",
  "Nutrition": "bg-lime-500 hover:bg-lime-600",
  "Mental Health": "bg-cyan-500 hover:bg-cyan-600",
};

export default function ArticlesPage() {
  return (
    <SubPageLayout showHeader={false} showDisclaimer={false}>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Achilles Tendon Rupture Recovery Articles & Guides</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert insights, research-backed advice, and practical tips for your Achilles tendon recovery journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/articles/${article.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="relative w-full h-48 bg-muted">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    className={`${categoryColors[article.category] || 'bg-primary'} text-white border-0`}
                  >
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
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