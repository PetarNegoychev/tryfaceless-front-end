import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Ecommerce Brand Owner",
    avatar: "SC",
    content: "TryFaceless cut our video production costs by 90%. We went from spending $500 per UGC video to creating 20+ videos a month for a fraction of the cost.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Affiliate Marketer",
    avatar: "MJ",
    content: "The AI-generated review videos look incredibly authentic. My click-through rates increased by 40% since switching to TryFaceless content.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Mobile App Developer",
    avatar: "ER",
    content: "Creating app store preview videos used to take days. Now I generate professional promo content in minutes. Game changer for indie developers.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Creators & Marketers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about TryFaceless
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-6 card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
