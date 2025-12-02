import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { Heart, Share2, ChefHat, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8 font-body text-sm text-muted-foreground animate-fade-in">
              <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
              <span className="mx-2">/</span>
              <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-primary transition-smooth">
                {product.category}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary">{product.name}</span>
            </div>

            {/* Product Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Product Image */}
              <div className="animate-slide-up">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant gold-border-gradient">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="flex items-start justify-between mb-4">
                  <h1 className="font-header text-5xl md:text-6xl text-primary">
                    {product.name}
                  </h1>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="hover:text-accent">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-accent">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground font-body mb-6 leading-relaxed">
                  {product.shortDescription}
                </p>

                <div className="flex gap-3 flex-wrap mb-8">
                  {product.tasteNotes.map(note => (
                    <span
                      key={note}
                      className="px-4 py-2 bg-honey-yellow/20 text-dark-brown font-subheader rounded-full border border-warm-gold/30"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="text-4xl font-bold text-accent mb-2">₹{product.price}</p>
                  <p className="text-sm text-muted-foreground font-body">Price inclusive of all taxes</p>
                </div>

                {/* Catalog Notice */}
                <div className="p-4 bg-honey-yellow/10 rounded-lg border border-warm-gold/30 mb-8">
                  <p className="font-body text-sm text-foreground text-center">
                    📞 For orders, please contact us at <span className="font-subheader text-primary">+91 98765 43210</span>
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-honey-yellow/10 rounded-lg">
                    <ChefHat className="w-6 h-6 text-accent" />
                    <span className="font-body text-sm">Handcrafted</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-honey-yellow/10 rounded-lg">
                    <Leaf className="w-6 h-6 text-accent" />
                    <span className="font-body text-sm">Fresh Daily</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="animate-slide-up">
                <h2 className="font-subheader text-3xl text-primary mb-6">The Story</h2>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <h2 className="font-subheader text-3xl text-primary mb-6">Ingredients</h2>
                <ul className="space-y-3">
                  {product.ingredients.map(ingredient => (
                    <li
                      key={ingredient}
                      className="flex items-center gap-3 font-body text-foreground"
                    >
                      <span className="w-2 h-2 bg-warm-gold rounded-full" />
                      {ingredient}
                    </li>
                  ))}
                </ul>

                {product.allergens.length > 0 && (
                  <div className="mt-8 p-4 bg-muted rounded-lg">
                    <p className="font-subheader text-sm text-foreground mb-2">Allergen Information:</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Contains: {product.allergens.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="animate-fade-in">
                <h2 className="font-subheader text-4xl text-primary mb-8 text-center">
                  You May Also Like
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct, index) => (
                    <Link
                      key={relatedProduct.id}
                      to={`/product/${relatedProduct.id}`}
                      className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-premium transition-elegant group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-subheader text-lg text-primary mb-2 group-hover:text-warm-gold transition-smooth">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-xl font-bold text-accent">₹{relatedProduct.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
