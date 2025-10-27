import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface LandingNavbarProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

const products = [
  { name: "Task Management", description: "Organize and track your work" },
  { name: "Team Collaboration", description: "Work together seamlessly" },
  { name: "Project Boards", description: "Visualize your workflow" },
  { name: "Analytics", description: "Insights and reporting" },
];

const solutions = [
  { name: "For Startups", description: "Scale your team efficiently" },
  { name: "For Enterprise", description: "Enterprise-grade security" },
  { name: "For Remote Teams", description: "Work from anywhere" },
  { name: "For Agencies", description: "Manage client projects" },
];

const resources = [
  { name: "Documentation", description: "Learn how to use Nexus" },
  { name: "Blog", description: "Latest updates and insights" },
  { name: "Community", description: "Connect with other users" },
  { name: "Support", description: "Get help when you need it" },
];

export function LandingNavbar({ onGetStarted, onSignIn }: LandingNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownContent = {
    products,
    solutions,
    resources,
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div
              className="size-9 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via))`,
              }}
            >
              <span className="text-white font-semibold">N</span>
            </div>
            <span className="text-xl font-semibold">Nexus Board</span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {(["products", "solutions", "resources"] as const).map(
              (item, idx) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-accent transition-colors capitalize"
                  >
                    {item}
                    <ChevronDown
                      className={`size-4 transition-transform ${
                        activeDropdown === item ? "rotate-180" : ""
                      }`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {activeDropdown === item && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {dropdownContent[item].map((subItem, subIdx) => (
                            <motion.button
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIdx * 0.05 }}
                              className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors group"
                            >
                              <div className="font-medium mb-0.5 group-hover:text-primary transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {subItem.description}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}

            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="px-4 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              Pricing
            </motion.button>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <Button
              variant="ghost"
              onClick={onSignIn}
              className="hidden sm:flex"
            >
              Sign in
            </Button>
            <Button onClick={onGetStarted} className="hidden sm:flex">
              Get started
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm text-muted-foreground">
                      Products
                    </h4>
                    {products.map((item) => (
                      <button
                        key={item.name}
                        className="block w-full text-left"
                      >
                        <div className="font-medium">{item.name}</div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-sm text-muted-foreground">
                      Solutions
                    </h4>
                    {solutions.map((item) => (
                      <button
                        key={item.name}
                        className="block w-full text-left"
                      >
                        <div className="font-medium">{item.name}</div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 pt-6 border-t">
                    <Button
                      variant="outline"
                      onClick={onSignIn}
                      className="w-full"
                    >
                      Sign in
                    </Button>
                    <Button onClick={onGetStarted} className="w-full">
                      Get started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
