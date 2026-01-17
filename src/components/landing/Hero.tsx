import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import tryfacelessLogo from "@/assets/tryfaceless-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden animated-gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl floating" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl floating" style={{ animationDelay: "-1.5s" }} />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/60 particle-float"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          />
        ))}
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
          
          {/* Animated Logo Visual */}
          <div className="relative mb-8 animate-fade-in">
            <div className="relative inline-block">
              {/* Orbiting rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 border border-primary/30 rounded-full orbit-1" />
                <div className="absolute w-56 h-56 md:w-72 md:h-72 border border-secondary/20 rounded-full orbit-2" />
                <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-neon-pink/10 rounded-full orbit-3" />
              </div>
              
              {/* Orbiting dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 relative orbit-1">
                  <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-primary rounded-full glow-primary" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 relative orbit-2-reverse">
                  <div className="absolute top-1/2 -right-1.5 w-2.5 h-2.5 bg-secondary rounded-full glow-secondary" />
                </div>
              </div>
              
              {/* Central logo with glow */}
              <div className="relative z-10 floating">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 blur-2xl rounded-full scale-75" />
                <img 
                  src={tryfacelessLogo} 
                  alt="TryFaceless" 
                  className="relative w-32 h-32 md:w-40 md:h-40 object-contain pulse-glow rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary">Your Content OS for Viral Growth</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Get more views in{" "}
            <span className="gradient-text">3 simple steps</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Tell us your niche, your top 3 competitors and TryFaceless will create 
            the most highly engaging content for you to post. No scripting needed.
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-foreground/80 font-medium mb-8 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            Let us do the hard work. You focus on going viral.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all glow-primary px-8 py-6 text-lg hover:scale-105"
            >
              Start Creating Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted/50 px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">10K+</div>
              <div className="text-sm text-muted-foreground">Videos Created</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">2min</div>
              <div className="text-sm text-muted-foreground">Avg. Generation</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">500+</div>
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
