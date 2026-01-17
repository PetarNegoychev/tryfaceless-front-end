import { Zap, Target, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Our AI scans trending topics and competitor content to surface the best opportunities for you.",
  },
  {
    number: "02",
    icon: Target,
    title: "Niche-Specific Content",
    description: "Every piece of content is tailored to your specific niche and target audience for maximum impact.",
  },
  {
    number: "03",
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description: "Stop spending hours on research and scripting. Get ready-to-post content in minutes.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Proven Viral Patterns",
    description: "We analyze what's already working in your space and replicate those winning formulas.",
  },
];

const WhyChoose = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">TryFaceless?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creating viral content feels too hard? TryFaceless is the better way.
          </p>
        </div>

        {/* Features Grid with Central Visual */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Floating Visual */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 items-center justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl animate-pulse" />
              
              {/* Main orb */}
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/50 backdrop-blur-xl flex items-center justify-center floating">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-primary-foreground">TF</span>
                </div>
              </div>
              
              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-x-[320px]">
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className="group relative p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm card-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-bold gradient-text">{feature.number}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
