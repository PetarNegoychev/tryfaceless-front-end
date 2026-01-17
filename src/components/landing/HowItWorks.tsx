import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Content",
    description: "Add your product images, app screenshots, or brand assets. Describe what you want to promote.",
  },
  {
    icon: Wand2,
    number: "02",
    title: "AI Generates Video",
    description: "Our AI creates professional UGC-style video with natural voiceover, captions, and engaging visuals.",
  },
  {
    icon: Download,
    number: "03",
    title: "Export & Publish",
    description: "Download your video in any format. Share directly to TikTok, Instagram, YouTube, or your ad platform.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">TryFaceless</span> Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Go from idea to publish-ready video in minutes, not days. 
            No video editing skills required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50" />
              )}

              <div className="relative bg-card border border-border rounded-xl p-6 text-center card-glow">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mt-4 mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
