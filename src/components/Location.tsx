import { MapPin, Phone, Mail } from "lucide-react";
import storefrontImage from "@/assets/storefront-sketch.jpg";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export const Location = () => {
  return (
    <section id="contact" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper animation="fade-in" className="text-center mb-12">
            <h2 className="font-header text-5xl text-primary mb-4">
              Visit Our Bakery
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Experience the warmth of our baking house in Bangalore
            </p>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="slide-in-left">
              <div className="rounded-lg overflow-hidden shadow-premium hover:shadow-elegant transition-elegant hover:scale-[1.02]">
                <img
                  src={storefrontImage}
                  alt="Golden Bloom Bakes Storefront"
                  className="w-full"
                />
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-in-right" delay={200}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-soft hover:shadow-premium hover:-translate-x-2 transition-elegant cursor-default group">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-elegant" />
                  <div>
                    <h3 className="font-subheader text-lg text-primary mb-1">
                      Our Location
                    </h3>
                    <p className="text-foreground font-body">
                      123 MG Road, Bangalore
                      <br />
                      Karnataka 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-soft hover:shadow-premium hover:-translate-x-2 transition-elegant cursor-default group">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-elegant" />
                  <div>
                    <h3 className="font-subheader text-lg text-primary mb-1">
                      Call Us
                    </h3>
                    <p className="text-foreground font-body">
                      +91 98765 43210
                      <br />
                      Open Daily: 8 AM - 9 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-soft hover:shadow-premium hover:-translate-x-2 transition-elegant cursor-default group">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-elegant" />
                  <div>
                    <h3 className="font-subheader text-lg text-primary mb-1">
                      Email Us
                    </h3>
                    <p className="text-foreground font-body">
                      hello@goldenbloombakes.com
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
