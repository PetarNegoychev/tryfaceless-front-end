import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyChoose from "@/components/landing/WhyChoose";
import Comparison from "@/components/landing/Comparison";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <Comparison />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
