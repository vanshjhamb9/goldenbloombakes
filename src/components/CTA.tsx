import { Button } from "./ui/button";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";
import { Phone } from "lucide-react";

export const CTA = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-honey-yellow to-warm-gold overflow-hidden relative">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 text-5xl opacity-30 animate-float" style={{ animationDelay: "0s" }}>
        🎂
      </div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-30 animate-float" style={{ animationDelay: "1s" }}>
        🥧
      </div>
      <div className="absolute top-1/2 left-5 text-4xl opacity-20 animate-float" style={{ animationDelay: "0.5s" }}>
        🍪
      </div>
      <div className="absolute top-20 right-20 text-4xl opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>
        🧁
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper animation="scale-in" className="max-w-4xl mx-auto text-center">
          <h2 className="font-header text-5xl md:text-6xl text-primary mb-6">
            Celebrate Your Sweet Moments With Us
          </h2>
          <p className="text-xl text-foreground font-body mb-8 max-w-2xl mx-auto">
            Browse our catalog and contact us to place your order for freshly baked delights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" onClick={scrollToProducts}>
              Explore Catalog
            </Button>
            <a href="tel:+919876543210">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4" />
                Call to Order
              </Button>
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
