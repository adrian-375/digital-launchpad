import { MessageCircle, Mail, Calendar, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-background to-background" />
      
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Section */}
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
            Ready to launch your <span className="text-gradient">digital product</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's turn your knowledge into a product that sells.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="gold" size="lg" asChild>
              <a href="https://www.instagram.com/_adrian_charles/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                DM me on Instagram
              </a>
            </Button>
            <Button variant="goldOutline" size="lg" asChild>
              <a href="https://cal.com/zynaflow-otvucl/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Call
              </a>
            </Button>
          </div>

          {/* Email */}
          <a 
            href="mailto:zynaflow@gmail.com" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors duration-300 mb-16"
          >
            <Mail className="w-4 h-4" />
            zynaflow@gmail.com
          </a>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-8" />
          
          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/favicon.png" alt="ZynaFlow" className="w-8 h-8 rounded-lg" />
              <span className="font-display text-lg font-semibold">ZynaFlow</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/_adrian_charles/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:zynaflow@gmail.com" 
                className="text-muted-foreground hover:text-purple transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2026 ZynaFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple/5 to-transparent blur-2xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple/5 to-transparent blur-2xl" />
    </footer>
  );
};

export default Footer;
