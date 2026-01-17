import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    question: "How many videos can I generate per month?",
    answer: "It depends on your plan: Starter gives you 10 videos/month, Growth gives you 50 videos/month, and Scale gives you 150 videos/month.",
  },
  {
    question: "Can I publish directly to social platforms?",
    answer: "Yes! Growth and Scale plans include direct publishing to social platforms, plus scheduling and automation features to streamline your workflow.",
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
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about TryFaceless and AI-generated UGC content
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
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
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
