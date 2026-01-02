import { Button } from "@/components/ui/button";
import GeometricShapes from "./GeometricShapes";
import { MessageCircle, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(210_50%_15%)_0%,_hsl(210_50%_5%)_50%,_hsl(0_0%_0%)_100%)]" />
      
      {/* Geometric decorations */}
      <GeometricShapes />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <div className="w-12 h-px bg-gradient-to-r from-purple to-transparent" />
            <span className="text-purple text-sm font-medium tracking-widest uppercase">Digital Products Studio</span>
          </div>
          
          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6 animate-fade-up-delay-1">
            Helping creators turn what they already{" "}
            <span className="text-gradient">know</span> into digital products that{" "}
            <span className="text-gradient">sell</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-up-delay-2">
            You focus on the idea. I handle everything else: setup, launch, website, payments, automated delivery, landing pages, and upsells.
            You get a product that's ready to sell, without touching tech.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://www.instagram.com/_adrian_charles/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                DM me
              </a>
            </Button>
            <Button variant="heroSecondary" size="xl" asChild>
              <a href="https://cal.com/zynaflow-otvucl/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Call
              </a>
            </Button>
          </div>
          
          {/* Small trust indicator */}
          <div className="mt-12 flex items-center gap-3 animate-fade-up-delay-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-navy-light to-navy-mid border-2 border-background flex items-center justify-center text-xs text-purple"
                >
                  ★
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Trusted by <span className="text-foreground font-medium">creators worldwide</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
