import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden animated-gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl floating" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl floating" style={{ animationDelay: "-1.5s" }} />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">AI-Powered UGC Generation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Generate{" "}
            <span className="gradient-text">Faceless UGC</span>
            <br />
            Videos with AI
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Create professional UGC-style videos for ecommerce, affiliate marketing, 
            and mobile app promotion — without showing your face or hiring creators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all glow-primary px-8 py-6 text-lg"
            >
              Start Creating Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted/50 px-8 py-6 text-lg group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">2min</div>
              <div className="text-sm text-muted-foreground">Avg. Generation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
