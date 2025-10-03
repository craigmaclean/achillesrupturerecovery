"use client";

import Hero from "@/components/Hero";
import Disclaimer from "@/components/Disclaimer";
import RecoveryStages from "@/components/RecoveryStages";
import ProductShowcase from "@/components/ProductShowcase";
import BlogArticles from "@/components/BlogArticles";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Disclaimer />
      <RecoveryStages />
      <ProductShowcase />
      <BlogArticles />
      <Newsletter />
    </main>
  );
}