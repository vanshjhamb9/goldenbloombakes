import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Process />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
