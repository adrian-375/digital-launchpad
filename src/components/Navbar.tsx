import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-6 py-3 bg-card/30 backdrop-blur-md rounded-2xl border border-border/30">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple to-purple-light rounded-lg flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-sm">Z</span>
            </div>
            <span className="font-display text-lg font-semibold hidden sm:block">ZynaFlow</span>
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Process
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Testimonials
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </div>
          
          {/* CTA */}
          <Button variant="gold" size="sm" className="shadow-none">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Let's Talk</span>
            <span className="sm:hidden">DM</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
