import chefImage from "@/assets/chef-illustration.jpg";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <ScrollAnimationWrapper animation="slide-in-left">
            <div className="rounded-2xl shadow-elegant overflow-hidden gold-border-gradient hover:scale-[1.02] transition-elegant">
              <img
                src={chefImage}
                alt="Our Chef"
                className="w-full"
              />
            </div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slide-in-right" delay={200}>
            <div>
              <h2 className="font-header text-6xl text-primary mb-8 leading-tight">
                Our Story
              </h2>
              <p className="text-lg text-foreground font-body leading-relaxed mb-6">
                Golden Bloom Bakes is Bangalore's artisan baking studio, born from a belief that every bake should carry emotion. We blend traditional recipes with modern craftsmanship, slow baking techniques, and honest ingredients.
              </p>
              <p className="text-lg text-foreground font-body leading-relaxed mb-8">
                Every creation is hand-crafted by passionate bakers, designed to make moments memorable. From flaky pastries to rich cakes, each bite blooms into a story of love, warmth, and artistry.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center p-6 bg-honey-yellow/10 rounded-xl hover:bg-honey-yellow/20 hover:scale-105 transition-elegant cursor-default">
                  <h3 className="font-subheader text-3xl text-accent mb-2">
                    Fresh
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">Baked Daily</p>
                </div>
                <div className="text-center p-6 bg-honey-yellow/10 rounded-xl hover:bg-honey-yellow/20 hover:scale-105 transition-elegant cursor-default">
                  <h3 className="font-subheader text-3xl text-accent mb-2">
                    Artisan
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">Handcrafted</p>
                </div>
                <div className="text-center p-6 bg-honey-yellow/10 rounded-xl hover:bg-honey-yellow/20 hover:scale-105 transition-elegant cursor-default">
                  <h3 className="font-subheader text-3xl text-accent mb-2">
                    Love
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">In Every Bite</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
