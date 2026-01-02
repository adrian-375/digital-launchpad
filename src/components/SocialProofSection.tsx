import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Excited to finally launch my first product with zero stress!",
    author: "Content Creator",
  },
  {
    quote: "Loved how simple and smooth the setup was.",
    author: "Fitness Influencer",
  },
  {
    quote: "Finally got a product live without worrying about tech stuff.",
    author: "Instagram Creator",
  },
];

const stats = [
  { value: "15+", label: "Products Launched" },
  { value: "3 Days", label: "Avg. Delivery Time" },
  { value: "$50K+", label: "Revenue Generated" },
];

const SocialProofSection = () => {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(210_45%_12%)_0%,_hsl(210_50%_5%)_70%)]" />
      
      {/* Sparkles */}
      <div className="sparkle top-[10%] left-[15%]" style={{ animationDelay: '0.5s' }} />
      <div className="sparkle top-[30%] right-[10%]" style={{ animationDelay: '1.5s' }} />
      <div className="sparkle bottom-[20%] left-[30%]" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-purple text-sm font-medium tracking-widest uppercase mb-4 block">
              Trusted by creators worldwide
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
              What creators are <span className="text-gradient">saying</span>
            </h2>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center gradient-border p-6 bg-card/50 backdrop-blur-sm">
                <div className="font-display text-2xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`gradient-border p-6 lg:p-8 bg-card/80 backdrop-blur-sm relative ${
                  index === 1 ? "md:-translate-y-4" : ""
                }`}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-purple/20" />
                
                <blockquote className="font-display text-lg lg:text-xl font-medium leading-relaxed mb-6 text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple/30 to-navy-light flex items-center justify-center text-purple text-sm font-display font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="text-sm text-muted-foreground">— {testimonial.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
