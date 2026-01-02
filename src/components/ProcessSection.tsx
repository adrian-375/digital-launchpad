import { Send, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "You send your content",
    description: "Share your ideas, knowledge, or existing content: notes, videos, voice memos, or rough drafts. I'll handle the research, structure, and execution.",
    highlight: false,
  },
  {
    number: "02",
    icon: Wrench,
    title: "I build & set everything up",
    description: "I handle all the complicated work: design, tech setup, payment integration, landing pages, and delivery systems.",
    highlight: true,
  },
  {
    number: "03",
    icon: Rocket,
    title: "You share & profit",
    description: "Your product is ready to sell. Share it with your audience and watch the sales roll in.",
    highlight: false,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-mid/20 to-background" />
      
      {/* Decorative diagonal line */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple/20 to-transparent transform -skew-x-12" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-purple text-sm font-medium tracking-widest uppercase mb-4 block">
            Simple Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            From idea to income in{" "}
            <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No tech skills required. No endless tutorials. Just results.
          </p>
        </div>
        
        {/* Steps grid - asymmetrical layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent transform -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative group ${
                  index === 1 ? "lg:-translate-y-8" : ""
                } ${index === 2 ? "lg:translate-y-4" : ""}`}
              >
                <div
                  className={`gradient-border p-8 h-full transition-all duration-500 hover:scale-105 ${
                    step.highlight
                      ? "bg-gradient-to-br from-navy-mid to-card shadow-[0_0_40px_hsl(var(--purple)/0.15)]"
                      : "bg-card hover:shadow-[0_0_30px_hsl(var(--purple)/0.1)]"
                  }`}
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-display text-4xl font-bold ${
                      step.highlight ? "text-purple" : "text-purple/40"
                    }`}>
                      {step.number}
                    </span>
                    <div className={`p-3 rounded-xl ${
                      step.highlight 
                        ? "bg-gradient-to-br from-purple/20 to-purple/5 text-purple" 
                        : "bg-navy-light/50 text-muted-foreground group-hover:text-purple transition-colors"
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Highlight badge */}
                  {step.highlight && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-purple to-purple-light text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                      I do this
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
