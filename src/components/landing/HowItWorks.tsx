import { Globe, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: Globe,
    number: "1",
    title: "Add your niche details",
    description:
      "We analyze your niche and identify highly relevant trends and viral content opportunities to maximize your reach.",
    mockup: (
      <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border">
        <div className="text-xs text-muted-foreground mb-2">Your website</div>
        <div className="bg-background rounded px-3 py-2 text-sm text-foreground/70 border border-border">
          myproduct.com
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    number: "2",
    title: "Add your top 3 competitors",
    description:
      "Your top three competitors help us analyze successful content patterns and identify gaps in the market for you to exploit.",
    mockup: (
      <div className="mt-4 space-y-2">
        {["competitor1.com", "competitor2.com", "competitor3.com"].map((comp, i) => (
          <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border">
            <div className="bg-background rounded px-3 py-2 text-sm text-foreground/70 border border-border">
              {comp}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Rocket,
    number: "3",
    title: "Get viral-ready content",
    description:
      "Get a list of the most engaging content ideas where you can dominate. These videos are crafted for your target audience and optimized for maximum reach.",
    mockup: (
      <div className="mt-4 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-primary font-medium">AI Generated</span>
        </div>
        <div className="text-sm text-foreground">
          ✨ 15 viral content ideas ready
        </div>
      </div>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to go from zero to viral-ready content
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative p-6 rounded-xl border border-border bg-card card-glow h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>

                {/* Visual Mockup */}
                {step.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
