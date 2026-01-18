import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does TryFaceless work?",
    answer: "TryFaceless analyzes your niche and competitors to identify trending content opportunities. Simply enter your details, and our AI generates viral-ready content ideas optimized for your target audience.",
  },
  {
    question: "Do I need to show my face or hire creators?",
    answer: "Not at all! TryFaceless creates UGC-style content using AI avatars. You get professional videos without showing your face or hiring expensive creators.",
  },
  {
    question: "What makes TryFaceless different from other tools?",
    answer: "TryFaceless is a complete Content OS, not just a video generator. We analyze your niche, track competitors, and identify the exact content opportunities that will help you go viral.",
  },
  {
    question: "How realistic are the AI avatars?",
    answer: "Our AI avatars are highly realistic and designed for UGC-style content. With 200+ default avatars included, plus the ability to create custom avatars, you'll have endless options for your videos.",
  },
  {
    question: "Do I keep the rights to my videos?",
    answer: "Absolutely! All videos you create with TryFaceless are 100% yours. You own full commercial rights to use them however you want.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. Your access continues until the end of your billing period.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "We're confident you'll love TryFaceless. If you're not satisfied, reach out to our support team and we'll work with you to resolve any issues.",
  },
  {
    question: "Do you offer support and training?",
    answer: "Yes! All plans include access to our knowledge base and email support. Scale plan users get priority support. We also provide onboarding guides and best practices to help you maximize your results.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden w-full max-w-full">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about TryFaceless and AI-generated UGC content
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border rounded-lg bg-card px-6 card-glow"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;