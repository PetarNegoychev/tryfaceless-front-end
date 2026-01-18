import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import tryfacelessIcon from "@/assets/tryfaceless-icon.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-start md:items-center justify-center pt-20 md:pt-16 pb-10 md:pb-8 overflow-hidden animated-gradient-bg w-full max-w-full">
      {/* Static glow blobs - no animation on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block pointer-events-none">
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
      {/* Simple static background for mobile - centered and contained */}
      <div className="absolute inset-0 overflow-hidden md:hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-primary/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-secondary/20 rounded-full blur-[60px]" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left px-2 sm:px-0 lg:pl-8 xl:pl-12">
            {/* Mobile-only tagline - pill style */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0 }}
              className="md:hidden flex justify-center mb-5"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-[11px] text-primary font-medium tracking-wide uppercase">
                Your Content OS for Viral Growth
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight mt-[140px] md:mt-0"
            >
              Get more views in{" "}
              <span className="gradient-text">3 simple steps</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4 md:mb-4"
            >
              Tell us your niche, your top 3 competitors and TryFaceless will create 
              the most highly engaging content for you to post. No scripting needed.
            </motion.p>

            {/* Tagline */}
            <motion.p 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-xs md:text-base lg:text-lg text-foreground/80 font-medium mb-6 md:mb-8"
            >
              Let us do the hard work. You focus on going viral.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all glow-primary px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg hover:scale-105"
              >
                Start Creating Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border hover:bg-muted/50 px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg hover:scale-105 transition-transform backdrop-blur-sm"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.25 }}
              className="grid grid-cols-3 gap-3 md:gap-6 max-w-sm md:max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left group">
                <div className="text-lg sm:text-xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">10K+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Videos Created</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-lg sm:text-xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">2min</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Avg. Generation</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-lg sm:text-xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">500+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Happy Users</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Abstract 3D Orb Design */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">
            {/* Main 3D Orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Outer glow */}
              <motion.div
                className="absolute -inset-20 rounded-full opacity-60"
                style={{
                  background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Orbiting ring 1 */}
              <motion.div
                className="absolute inset-[-60px] rounded-full border border-primary/30"
                style={{ transform: "rotateX(75deg)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full glow-primary" />
              </motion.div>

              {/* Orbiting ring 2 */}
              <motion.div
                className="absolute inset-[-90px] rounded-full border border-secondary/20"
                style={{ transform: "rotateX(75deg) rotateZ(60deg)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full glow-secondary" />
              </motion.div>

              {/* Orbiting ring 3 */}
              <motion.div
                className="absolute inset-[-120px] rounded-full border border-neon-pink/15"
                style={{ transform: "rotateX(75deg) rotateZ(-30deg)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neon-pink rounded-full" />
              </motion.div>

              {/* Central orb gradient sphere */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.8), hsl(var(--secondary) / 0.6) 50%, hsl(var(--neon-pink) / 0.4) 100%)",
                  boxShadow: "inset -20px -20px 60px rgba(0,0,0,0.4), inset 20px 20px 60px rgba(255,255,255,0.1), 0 0 100px hsl(var(--primary) / 0.5)",
                }}
              >
                {/* Inner shine */}
                <div 
                  className="absolute top-[15%] left-[20%] w-[30%] h-[20%] rounded-full opacity-40"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.6), transparent)",
                    filter: "blur(10px)",
                  }}
                />

                {/* Center logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.img
                    src={tryfacelessIcon}
                    alt="TryFaceless"
                    className="w-32 md:w-40 h-auto object-contain drop-shadow-2xl"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              {/* Floating geometric shapes */}
              <motion.div
                className="absolute -top-10 -right-10 w-16 h-16"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-sm border border-primary/20" 
                  style={{ transform: "rotate(45deg)" }}
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-gradient-to-br from-secondary/50 to-neon-pink/50 backdrop-blur-sm border border-secondary/20"
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute top-1/4 -left-16 w-8 h-8 rounded-full bg-primary/30 backdrop-blur-sm"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute bottom-1/4 -right-12 w-6 h-6 rounded-full bg-neon-pink/40"
                animate={{ 
                  scale: [1.2, 0.8, 1.2],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Particle dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
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
