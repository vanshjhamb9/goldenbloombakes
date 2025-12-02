import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bakery-sketch.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 opacity-20 animate-float" style={{ animationDelay: "0s" }}>
        <span className="text-6xl">🥐</span>
      </div>
      <div className="absolute top-40 right-20 w-16 h-16 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <span className="text-5xl">🍰</span>
      </div>
      <div className="absolute bottom-40 left-20 w-16 h-16 opacity-20 animate-float" style={{ animationDelay: "0.5s" }}>
        <span className="text-5xl">🧁</span>
      </div>
      <div className="absolute bottom-60 right-10 w-20 h-20 opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>
        <span className="text-6xl">🍞</span>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-header text-6xl md:text-8xl mb-6 text-primary animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
            Where Every Bite Blooms Into Joy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground font-body animate-fade-in opacity-0" style={{ animationDelay: "400ms" }}>
            Handcrafted bakes, artisan flavors, made fresh daily in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: "600ms" }}>
            <Button variant="hero" size="lg" onClick={scrollToProducts}>
              Explore Catalog
            </Button>
            <Link to="/#about">
              <Button variant="premium" size="lg">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle group"
      >
        <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center bg-background/30 backdrop-blur-sm hover:bg-accent/20 transition-smooth">
          <ArrowDown className="w-5 h-5 text-accent group-hover:translate-y-1 transition-smooth" />
        </div>
      </button>
    </section>
  );
};
