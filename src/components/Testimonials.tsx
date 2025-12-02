import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    content:
      "The cakes from Golden Bloom are simply divine! Every celebration feels extra special with their creations.",
    avatar: "👩",
  },
  {
    name: "Rajesh Kumar",
    role: "Corporate Client",
    content:
      "We order from them for all our office events. Their brownies and cookies are absolutely addictive!",
    avatar: "👨",
  },
  {
    name: "Anita Desai",
    role: "Food Blogger",
    content:
      "A hidden gem in Bangalore! The artisan breads and pastries remind me of European patisseries.",
    avatar: "👩‍🦰",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fade-in" className="text-center mb-12">
          <h2 className="font-header text-5xl text-primary mb-4">
            Baked with Love, Enjoyed with Smiles
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            What our customers say about us
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper
              key={testimonial.name}
              animation="scale-in"
              delay={index * 150}
            >
              <div className="bg-card rounded-lg p-8 shadow-soft hover:shadow-premium hover:-translate-y-2 transition-elegant h-full group cursor-default">
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-elegant">
                  {testimonial.avatar}
                </div>
                <div className="mb-4">
                  <div className="text-accent text-3xl mb-2">"</div>
                  <p className="text-foreground font-body italic leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
                <div className="border-t-2 border-accent pt-4 mt-4">
                  <p className="font-subheader text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-body">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
