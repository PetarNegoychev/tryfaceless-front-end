import { Check, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    description: "Try before you commit",
    features: [
      "Unlimited niche + competitor analysis",
      "15 viral content ideas per week",
      "2 watermarked exports per month",
      "Basic templates + default avatars",
      "No scheduling / publishing",
    ],
    cta: "Start Creating Free",
    highlighted: false,
  },
  {
    name: "Starter",
    monthlyPrice: 29,
    description: "For solo creators getting started",
    features: [
      "20 watermark-free exports / month",
      "Up to 60s per video",
      "Full template library + default avatars",
      "1 Brand Kit",
      "Basic performance tracking",
    ],
    cta: "Buy Now",
    highlighted: false,
  },
  {
    name: "Growth",
    monthlyPrice: 79,
    description: "Scale your content game",
    features: [
      "80 watermark-free exports / month",
      "Up to 60s per video",
      "Slideshow generator",
      "Scheduling + auto-publish",
      "3 Brand Kits",
      "Viral patterns library",
    ],
    cta: "Buy Now",
    highlighted: true,
  },
  {
    name: "Scale",
    monthlyPrice: 149,
    description: "For teams & agencies",
    features: [
      "250 watermark-free exports / month",
      "Up to 60s per video",
      "3–5 team seats",
      "Priority render queue",
      "Priority support",
      "Workspaces (for agencies/clients)",
    ],
    cta: "Buy Now",
    highlighted: false,
  },
];

const addOnCredits = [
  { credits: 20, price: 15 },
  { credits: 80, price: 49 },
  { credits: 200, price: 99 },
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

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return 0;
    if (isAnnual) {
      // 2 months free = 10 months price for 12 months
      return Math.round((monthlyPrice * 10) / 12);
    }
    return monthlyPrice;
  };

  const getAnnualTotal = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return 0;
    return monthlyPrice * 10; // 10 months price (2 months free)
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden w-full max-w-full">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your content creation needs
          </p>

          {/* Annual Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-2 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold"
              >
                2 months free
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-xl border p-5 flex flex-col ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-b from-primary/10 to-card glow-primary lg:scale-105"
                  : "border-border bg-card card-glow"
              }`}
              variants={itemVariants}
              whileHover={{ scale: plan.highlighted ? 1.07 : 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <motion.div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-semibold flex items-center gap-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-5 pt-2">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold gradient-text">
                    ${getPrice(plan.monthlyPrice)}
                  </span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                {isAnnual && plan.monthlyPrice > 0 && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-muted-foreground mt-1"
                  >
                    ${getAnnualTotal(plan.monthlyPrice)} billed annually
                  </motion.p>
                )}
                <p className="text-xs text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-5 flex-1">
                {plan.features.map((feature, index) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start gap-2 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-xs">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={`w-full text-sm ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                      : plan.monthlyPrice === 0
                      ? "bg-muted text-foreground hover:bg-muted/80"
                      : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* How Exports Work Note */}
        <motion.div 
          className="text-center mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
            <Zap className="w-4 h-4 text-primary" />
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">How exports work:</span> Exports are watermark-free videos up to 60 seconds. Longer videos use additional credits.
            </p>
          </div>
        </motion.div>

        {/* Add-ons Section */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Add-ons</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Extra Credits Packs */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Extra Credit Packs
              </h4>
              <div className="space-y-3">
                {addOnCredits.map((pack) => (
                  <div 
                    key={pack.credits}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <span className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{pack.credits}</span> credits
                    </span>
                    <span className="font-semibold text-foreground">${pack.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Avatar Pack */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Custom Avatar Pack
              </h4>
              <p className="text-xs text-muted-foreground mb-4">
                Create your own AI avatar from your photos and videos
              </p>
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold gradient-text">$99</span>
                  <span className="text-xs text-muted-foreground">one-time setup</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  + $19/mo to keep your avatar active
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-3 w-full text-xs border-primary/30 text-primary hover:bg-primary/10"
                >
                  Add Custom Avatar
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
