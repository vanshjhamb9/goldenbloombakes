import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

const processSteps = [
  {
    number: "01",
    title: "Quality Ingredients",
    description: "We source only the finest ingredients",
    icon: "🌾",
  },
  {
    number: "02",
    title: "Handcrafting",
    description: "Each item is crafted by skilled bakers",
    icon: "🥖",
  },
  {
    number: "03",
    title: "Slow Baking",
    description: "Perfect temperature, perfect timing",
    icon: "🔥",
  },
  {
    number: "04",
    title: "Decoration",
    description: "Artful finishing touches",
    icon: "🎨",
  },
  {
    number: "05",
    title: "Packed with Love",
    description: "Ready for your celebrations",
    icon: "💝",
  },
];

export const Process = () => {
  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fade-in" className="text-center mb-16">
          <h2 className="font-header text-5xl text-primary mb-4">
            Our Baking Process
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Every step is crafted with precision and love
          </p>
        </ScrollAnimationWrapper>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <ScrollAnimationWrapper
                key={step.number}
                animation="scale-in"
                delay={index * 100}
              >
                <div className="relative h-full">
                  <div className="bg-background rounded-lg p-6 shadow-soft hover:shadow-premium hover:-translate-y-2 transition-elegant h-full group cursor-default">
                    <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-elegant">
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-header text-4xl text-accent mb-2 group-hover:text-warm-gold transition-smooth">
                        {step.number}
                      </div>
                      <h3 className="font-subheader text-lg text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent" />
                  )}
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
