import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import tryfacelessIcon from "@/assets/tryfaceless-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
        when: "afterChildren" as const,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={tryfacelessIcon} 
              alt="TryFaceless" 
              className="h-12 md:h-[88px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity glow-primary h-9 text-sm px-4"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden relative w-6 h-6 flex items-center justify-center text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="absolute w-5 h-0.5 bg-foreground rounded-full"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 0 : -4,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute w-5 h-0.5 bg-foreground rounded-full"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                scaleX: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute w-5 h-0.5 bg-foreground rounded-full"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? 0 : 4,
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Mobile Menu with smooth animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden border-t border-border/50"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col gap-3 py-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    variants={itemVariants}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div variants={itemVariants}>
                  <Button
                    className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity w-full"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
