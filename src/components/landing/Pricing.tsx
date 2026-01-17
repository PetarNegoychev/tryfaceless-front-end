import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "per month",
    description: "Perfect for getting started",
    features: [
      "Generate 10 videos per month",
      "Use default 200+ UGC avatars included",
      "Create your own AI avatars (25 images, 5 videos)",
    ],
    cta: "Buy Now",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "per month",
    description: "Everything in Starter, plus...",
    features: [
      "Generate 50 videos per month",
      "AI slideshow generator access",
      "Create your own AI avatars (100 images, 25 videos)",
      "Publish directly to social platforms",
      "Schedule and automate videos",
    ],
    cta: "Buy Now",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$95",
    period: "per month",
    description: "Everything in Growth, plus...",
    features: [
      "Generate 150 videos per month",
      "Create your own AI avatars (200 images, 50 videos)",
      "Priority support",
    ],
    cta: "Buy Now",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your content creation needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-6 animate-fade-in ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-b from-primary/10 to-card glow-primary"
                  : "border-border bg-card card-glow"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                </div>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
