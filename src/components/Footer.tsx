import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: ["Cakes", "Pastries", "Breads", "Cookies", "Brownies", "Desserts"],
    Company: ["About Us", "Our Story", "Careers", "Press"],
    Support: ["Contact", "FAQs", "Shipping", "Returns"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-header text-3xl mb-4 text-honey-yellow">
              Golden Bloom Bakes
            </h3>
            <p className="text-sm font-body opacity-90 mb-4">
              Crafted With Love, Baked With Passion
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-warm-gold transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-subheader text-lg mb-4 text-honey-yellow">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-body opacity-80 hover:opacity-100 hover:text-accent transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-accent/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-body opacity-80">
              © {currentYear} Golden Bloom Bakes. All rights reserved.
            </p>
            <p className="text-sm font-body opacity-80">
              Made with 💛 in Bangalore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
