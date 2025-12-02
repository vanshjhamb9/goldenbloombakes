import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, categories } from "@/data/products";

export const CategoryPage = () => {
  const { category } = useParams();
  
  const categoryData = categories.find(cat => cat.slug === category);
  const categoryProducts = products.filter(
    product => product.category.toLowerCase() === categoryData?.name.toLowerCase()
  );

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-honey-yellow/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-header text-6xl md:text-7xl text-primary mb-6">
              {categoryData.name}
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              {categoryData.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categoryProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-premium transition-elegant group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-subheader text-2xl text-primary mb-2 group-hover:text-warm-gold transition-smooth">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mb-3">
                      {product.shortDescription}
                    </p>
                    <p className="text-2xl font-bold text-accent">
                      ₹{product.price}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {product.tasteNotes.slice(0, 3).map(note => (
                      <span
                        key={note}
                        className="px-3 py-1 bg-honey-yellow/20 text-dark-brown text-xs font-subheader rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-honey-yellow/20">
                    <span className="font-subheader text-sm text-warm-gold group-hover:text-primary transition-smooth">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
