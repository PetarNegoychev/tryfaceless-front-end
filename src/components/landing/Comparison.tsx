import { X, Check, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const manualPainPoints = [
  { text: "Research trending topics manually", time: "2-3 hours" },
  { text: "Write scripts and hooks from scratch", time: "1-2 hours" },
  { text: "Create visuals and edit videos manually", time: "3-4 hours" },
  { text: "Post and manage content across platforms", time: "1-2 hours" },
  { text: "Analyze performance and optimize manually", time: "1-2 hours" },
  { text: "Stay consistent with daily posting", time: "ongoing stress" },
  { text: "Miss viral opportunities due to slow creation process", time: null },
];

const tryfacelessBenefits = [
  {
    title: "Set up your niche (2 minutes)",
    description: "Simply add your niche & competitors. TryFaceless AI automatically finds the most viral content opportunities for your business.",
  },
  {
    title: "Get viral-ready content instantly",
    description: "AI tracks trending topics and creates engaging content to surface highly-engaging posts for maximum reach.",
  },
  {
    title: "Post just 20 minutes daily",
    description: "Review curated content and post authentically. Highly effective growth with minimal time investment.",
  },
];

const Comparison = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Creating viral content feels too hard?
            <br />
            <span className="gradient-text">TryFaceless is the better way.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stop wasting hours creating content manually and start generating viral videos 
            that actually convert. TryFaceless is your Content OS.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Manual Side */}
          <motion.div 
            className="relative p-8 rounded-2xl border border-destructive/30 bg-destructive/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Creating Content Manually</h3>
            </div>

            <ul className="space-y-4 mb-8">
              {manualPainPoints.map((point, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <div>
                    <span className="text-muted-foreground">{point.text}</span>
                    {point.time && (
                      <span className="text-destructive font-medium ml-2">({point.time})</span>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
              <div className="text-sm text-muted-foreground mb-1">Total time investment</div>
              <div className="text-2xl font-bold text-destructive">8-12 hours daily + Burnout risk</div>
            </div>
          </motion.div>

          {/* TryFaceless Side */}
          <motion.div 
            className="relative p-8 rounded-2xl border border-primary/30 bg-primary/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Lightning bolt accent */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-6 h-6 text-primary-foreground" />
            </motion.div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">With TryFaceless ⚡</h3>
            </div>

            <ul className="space-y-6 mb-8">
              {tryfacelessBenefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{benefit.title}</div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6">
              <div className="text-sm text-muted-foreground mb-1">Total time investment</div>
              <div className="text-2xl font-bold gradient-text">Effective viral growth in 20 min/day</div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all glow-primary py-6 text-lg"
              >
                Start Your Transformation →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;