import { ShoppingCart, Users, Smartphone, Video } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Ecommerce Videos",
    description: "Create compelling product demos, unboxing videos, and customer testimonials that drive conversions.",
  },
  {
    icon: Users,
    title: "Affiliate Marketing",
    description: "Generate authentic review-style UGC and comparison videos that build trust and boost commissions.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Promos",
    description: "Produce engaging app store previews, tutorials, and promotional content for your mobile apps.",
  },
  {
    icon: Video,
    title: "Social Ads",
    description: "Create scroll-stopping content optimized for TikTok, Instagram Reels, and YouTube Shorts.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Platform, <span className="gradient-text">Endless Possibilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            TryFaceless helps you create professional UGC content for any marketing need, 
            all without showing your face or hiring expensive creators.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-border bg-card card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
