import { Globe, Users, Rocket, ArrowRight, Sparkles, CheckCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Globe,
    number: "1",
    title: "Add your niche details",
    description:
      "We analyze your niche and identify highly relevant trends and viral content opportunities to maximize your reach.",
    color: "primary",
    mockup: (
      <div className="mt-6 relative">
        <motion.div 
          className="p-4 rounded-xl bg-gradient-to-br from-muted/80 to-muted/40 border border-border backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
            <Globe className="w-3 h-3" /> Your website
          </div>
          <motion.div 
            className="relative bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-primary/30 shadow-inner"
            animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0)", "0 0 20px 2px hsl(var(--primary) / 0.3)", "0 0 0 0 hsl(var(--primary) / 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-foreground/80">myproduct.com</span>
            <motion.span
              className="inline-block w-0.5 h-4 bg-primary ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    ),
  },
  {
    icon: Users,
    number: "2",
    title: "Add your top 3 competitors",
    description:
      "Your top three competitors help us analyze successful content patterns and identify gaps in the market for you to exploit.",
    color: "secondary",
    mockup: (
      <div className="mt-6 space-y-3">
        {["competitor1.com", "competitor2.com", "competitor3.com"].map((comp, i) => (
          <motion.div 
            key={i} 
            className="p-3 rounded-xl bg-gradient-to-r from-muted/60 to-transparent border border-border backdrop-blur-sm flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
          >
            <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
              {i + 1}
            </div>
            <div className="flex-1 bg-background/50 rounded-lg px-3 py-2 text-sm text-foreground/70 border border-border">
              {comp}
            </div>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </motion.div>
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
    color: "neon-pink",
    mockup: (
      <div className="mt-6">
        <motion.div 
          className="p-5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/10 to-neon-pink/20 border border-primary/40 backdrop-blur-sm relative overflow-hidden"
          animate={{ 
            borderColor: ["hsl(var(--primary) / 0.4)", "hsl(var(--secondary) / 0.6)", "hsl(var(--primary) / 0.4)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <motion.div 
                className="w-2.5 h-2.5 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-xs text-primary font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> AI Generated
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>15 viral content ideas ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Optimized for your niche</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden w-full max-w-full">
      {/* Background effects - constrained */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">Simple Process</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Three simple steps to go from zero to viral-ready content
          </p>
        </motion.div>

        {/* Progress Line (Desktop) */}
        <div className="hidden md:block relative max-w-5xl mx-auto mb-8">
          <motion.div 
            className="absolute top-6 left-[16%] right-[16%] h-1 bg-gradient-to-r from-primary via-secondary to-neon-pink rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <div className="flex justify-between px-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              >
                {step.number}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              variants={itemVariants}
            >
              {/* Arrow connector (mobile hidden) */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:flex absolute top-1/2 -right-4 z-20"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </motion.div>
              )}

              <motion.div 
                className="relative p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm h-full group"
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Mobile step number */}
                <div className="md:hidden absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-4 mt-2 md:mt-0 border border-primary/20"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Visual Mockup */}
                {step.mockup}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
