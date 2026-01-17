import { Zap, Target, Clock, TrendingUp, Sparkles, Brain, Wand2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our AI scans trending topics and competitor content to surface the best opportunities for you.",
    gradient: "from-primary to-secondary",
    size: "large",
  },
  {
    icon: Target,
    title: "Niche-Specific Content",
    description: "Tailored to your specific niche and target audience.",
    gradient: "from-secondary to-neon-pink",
    size: "small",
  },
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description: "Stop spending hours on research and scripting.",
    gradient: "from-neon-pink to-primary",
    size: "small",
  },
  {
    icon: TrendingUp,
    title: "Proven Viral Patterns",
    description: "We analyze what's already working in your space and replicate those winning formulas for your content.",
    gradient: "from-primary to-neon-pink",
    size: "large",
  },
  {
    icon: Wand2,
    title: "One-Click Generation",
    description: "Generate complete content with a single click.",
    gradient: "from-secondary to-primary",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description: "Track what content performs best for your audience.",
    gradient: "from-neon-pink to-secondary",
    size: "small",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-xs font-medium text-secondary">Powerful Features</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">TryFaceless?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Creating viral content feels too hard? TryFaceless is the better way.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden ${
                feature.size === "large" ? "md:col-span-2 p-8" : "p-6"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient border on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              
              {/* Gradient glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className={`font-semibold mb-2 text-foreground ${feature.size === "large" ? "text-xl" : "text-lg"}`}>
                  {feature.title}
                </h3>
                <p className={`text-muted-foreground ${feature.size === "large" ? "text-base" : "text-sm"}`}>
                  {feature.description}
                </p>

                {/* Large card extra decoration */}
                {feature.size === "large" && (
                  <div className="mt-6 flex items-center gap-3">
                    <motion.div 
                      className="flex -space-x-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.gradient} border-2 border-background flex items-center justify-center`}
                        >
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                      ))}
                    </motion.div>
                    <span className="text-xs text-muted-foreground">Trusted by 500+ creators</span>
                  </div>
                )}
              </div>

              {/* Corner accent */}
              <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${feature.gradient} opacity-5 rounded-tl-full`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            Join thousands of creators already using TryFaceless →
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
