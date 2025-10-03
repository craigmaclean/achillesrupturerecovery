import { Star, ShoppingCart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductShowcase = () => {
  const products = [
    {
      name: "Aircast Walking Boot",
      category: "Recovery Boot",
      rating: 4.4,
      reviews: 4493,
      price: "$77.99",
      originalPrice: "$119.99",
      image: "https://m.media-amazon.com/images/I/51ADFAE9DpL._AC_SX679_.jpg",
      features: ["Durable, semi-rigid shell", "Lightweight design", "Non-marking, skid resistant rubber tread"],
      affiliate: true
    },
    {
      name: "Shower Protection Cover",
      category: "Daily Care",
      rating: 4.5,
      reviews: `38,162`,
      price: "$24.99",
      originalPrice: "$34.99",
      image: "https://m.media-amazon.com/images/I/71UyWAHHFBL._SX522_.jpg",
      features: ["Superior waterproof protection", "Reusable design", "Easy application"],
      affiliate: true
    },
    {
      name: "Leg Raise Pillow",
      category: "Daily Care",
      rating: 4.4,
      reviews: 2942,
      price: "$39.99",
      originalPrice: "$48.99",
      image: "https://m.media-amazon.com/images/I/71XtNtI61AL._AC_SX679_.jpg",
      features: ["Adjustable 10-in-1 design", "Designed for improved blood flow", "Premium memory foam"],
      affiliate: true
    },
    {
      name: "Walking Boot Socks",
      category: "Recovery Support",
      rating: 4.6,
      reviews: 688,
      price: "$16.99",
      originalPrice: "",
      image: "https://m.media-amazon.com/images/I/61bvjklcr8L._SX466_.jpg",
      features: ["Compatible with all walking boots/braces", "Loose-fitting and non-binding", "Special design for reduced skin irritation"],
      affiliate: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recommended Recovery Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully selected recovery aids that can help accelerate your healing process. 
            All products are recommended by healthcare professionals and backed by positive patient outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-section hover:-translate-y-1 bg-gradient-card"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.affiliate && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-secondary/90 text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded-full">
                      25% OFF
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  {/* Category */}
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {product.category}
                  </span>

                  {/* Product Name */}
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-secondary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-foreground">
                        {product.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-all duration-300"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    View on Amazon
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-4 max-w-2xl">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Medical Disclaimer:</strong> These are affiliate links. 
              We may earn a commission from qualifying purchases. Always consult your healthcare provider 
              before using any recovery products. Individual results may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;