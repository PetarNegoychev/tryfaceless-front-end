import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is TryFaceless and how does it work?",
    answer: "TryFaceless is an AI-powered platform that generates professional UGC-style videos without you showing your face. Simply upload your product images or app screenshots, describe what you want to promote, and our AI creates engaging video content with natural voiceovers, captions, and visuals.",
  },
  {
    question: "Do I need video editing experience?",
    answer: "Not at all! TryFaceless is designed for everyone. Our AI handles all the complex video editing, transitions, and effects. You just provide the content and our platform does the rest.",
  },
  {
    question: "What types of videos can I create?",
    answer: "You can create product demos, unboxing videos, customer testimonials, app tutorials, review-style content, comparison videos, and social media ads optimized for TikTok, Instagram Reels, and YouTube Shorts.",
  },
  {
    question: "How long does it take to generate a video?",
    answer: "Most videos are generated within 2-5 minutes depending on complexity and length. Our AI works fast so you can iterate quickly and publish content when it matters.",
  },
  {
    question: "Can I customize the AI voice and style?",
    answer: "Yes! We offer a variety of AI voices with different tones, accents, and styles. Pro and Enterprise plans also include custom branding options and voice cloning capabilities.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Absolutely! All our plans come with a 7-day free trial. No credit card required to start. You can create up to 3 videos during your trial to experience the full platform.",
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
            Everything you need to know about TryFaceless
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
