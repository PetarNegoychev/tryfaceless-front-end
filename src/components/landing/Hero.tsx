import { Button } from "@/components/ui/button";
import { Sparkles, Play, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import tryfacelessLogo from "@/assets/tryfaceless-logo.png";

const Hero = () => {
  const floatingIcons = [
    { icon: Zap, delay: 0, position: "top-20 left-10" },
    { icon: Shield, delay: 1, position: "top-32 right-16" },
    { icon: TrendingUp, delay: 2, position: "bottom-40 left-20" },
    { icon: Play, delay: 1.5, position: "bottom-32 right-10" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden animated-gradient-bg">
      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/20 rounded-full blur-[150px]"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group">
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-primary via-secondary to-neon-pink opacity-75 blur-sm"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            />
            <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-background/90 backdrop-blur-xl border border-primary/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-medium bg-gradient-to-r from-primary via-secondary to-neon-pink bg-clip-text text-transparent">
                Your Content OS for Viral Growth
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            >
              Get more views in{" "}
              <span className="gradient-text">3 simple steps</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4"
            >
              Tell us your niche, your top 3 competitors and TryFaceless will create 
              the most highly engaging content for you to post. No scripting needed.
            </motion.p>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base md:text-lg text-foreground/80 font-medium mb-8"
            >
              Let us do the hard work. You focus on going viral.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all glow-primary px-8 py-6 text-lg hover:scale-105"
              >
                Start Creating Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted/50 px-8 py-6 text-lg hover:scale-105 transition-transform backdrop-blur-sm"
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left group">
                <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">10K+</div>
                <div className="text-sm text-muted-foreground">Videos Created</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">2min</div>
                <div className="text-sm text-muted-foreground">Avg. Generation</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">500+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - 3D Floating Element */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} z-20`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + item.delay * 0.2 }}
              >
                <motion.div
                  className="p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>
            ))}

            {/* Central 3D Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--neon-pink)), hsl(var(--primary)))",
                  filter: "blur(40px)",
                  opacity: 0.4,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Glass card container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 overflow-hidden"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, -5, 0, 5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Inner gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                
                {/* Logo in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.img
                    src={tryfacelessLogo}
                    alt="TryFaceless"
                    className="w-48 md:w-56 h-auto object-contain drop-shadow-2xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Floating mini cards */}
                <motion.div
                  className="absolute top-6 right-6 px-3 py-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-xs text-primary font-medium">AI-Powered</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 px-3 py-2 rounded-lg bg-secondary/20 backdrop-blur-sm border border-secondary/30"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <span className="text-xs text-secondary font-medium">Viral Content</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 right-6 px-3 py-2 rounded-lg bg-neon-pink/20 backdrop-blur-sm border border-neon-pink/30"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                >
                  <span className="text-xs text-neon-pink font-medium">No Face Needed</span>
                </motion.div>
              </motion.div>

              {/* Orbiting particles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="absolute w-[110%] h-[110%]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full glow-primary" />
                </motion.div>
                <motion.div
                  className="absolute w-[125%] h-[125%]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full glow-secondary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
