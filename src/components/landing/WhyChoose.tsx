import { Zap, Target, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import tryfacelessLogo from "@/assets/tryfaceless-logo.png";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const WhyChoose = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">TryFaceless?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creating viral content feels too hard? TryFaceless is the better way.
          </p>
        </motion.div>

        {/* Features Grid with Central Visual */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Floating Visual */}
          <motion.div 
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div 
                className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main orb */}
              <motion.div 
                className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/50 backdrop-blur-xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.img 
                  src={tryfacelessLogo}
                  alt="TryFaceless"
                  className="w-32 h-auto object-contain"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Orbiting dots */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% calc(50% + 96px)" }}
              />
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% calc(50% - 96px)" }}
              />
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 lg:gap-x-[320px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.number}
                className="group relative p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm card-glow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;