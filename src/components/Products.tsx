import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";
import cakeImage from "@/assets/cake-sketch.jpg";
import pastriesImage from "@/assets/pastries-sketch.jpg";
import breadsImage from "@/assets/breads-sketch.jpg";
import cookiesImage from "@/assets/cookies-sketch.jpg";
import browniesImage from "@/assets/brownies-sketch.jpg";
import dessertJarsImage from "@/assets/dessert-jars-sketch.jpg";

const categories = [
  { name: "Cakes", slug: "cakes", image: cakeImage, description: "Handcrafted celebration cakes", featured: true },
  { name: "Pastries", slug: "pastries", image: pastriesImage, description: "Flaky European pastries" },
  { name: "Breads & Loaves", slug: "breads", image: breadsImage, description: "Traditional artisan breads" },
  { name: "Cookies", slug: "cookies", image: cookiesImage, description: "Gourmet cookies baked fresh" },
  { name: "Brownies", slug: "brownies", image: browniesImage, description: "Rich, fudgy chocolate brownies" },
  { name: "Dessert Jars", slug: "dessert-jars", image: dessertJarsImage, description: "Elegant layered desserts", featured: true },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fade-in" className="text-center mb-16">
          <h2 className="font-header text-6xl md:text-7xl text-primary mb-6">
            Our Delicious Collection
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Each creation is handcrafted with premium ingredients, artisan techniques, and baked with love every single day
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <ScrollAnimationWrapper
              key={category.name}
              animation="slide-up"
              delay={index * 100}
            >
              <Link
                to={`/category/${category.slug}`}
                className="bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-elegant transition-elegant group block card-hover"
              >
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                  />
                  {category.featured && (
                    <span className="absolute top-4 right-4 px-4 py-2 bg-warm-gold text-white text-xs font-subheader rounded-full shadow-medium animate-bounce-subtle">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-subheader text-2xl text-primary mb-3 group-hover:text-warm-gold transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-subheader text-sm text-warm-gold group-hover:text-primary transition-smooth">
                      Explore Collection
                    </span>
                    <ArrowRight className="w-4 h-4 text-warm-gold group-hover:translate-x-2 group-hover:text-primary transition-smooth" />
                  </div>
                </div>
              </Link>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
