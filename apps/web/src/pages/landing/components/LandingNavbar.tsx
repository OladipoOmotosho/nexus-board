import { useEffect, useMemo, useState } from "react";
import { Menu, ChevronDown, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Button } from "../../../components/reusableComponents/button";
import { useTheme } from "../../../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { LANDING_SECTIONS } from "../constants/sectionIds";
import { useScrollToSection } from "apps/web/src/hooks/useScrollToSection";

/* ------------------------- Data (memo-friendly) ------------------------- */
const NAV_SECTIONS = {
  products: [
    { name: "Task Management", description: "Organize and track your work" },
    { name: "Team Collaboration", description: "Work together seamlessly" },
    { name: "Project Boards", description: "Visualize your workflow" },
    { name: "Analytics", description: "Insights and reporting" },
  ],
  solutions: [
    { name: "For Startups", description: "Scale your team efficiently" },
    { name: "For Enterprise", description: "Enterprise-grade security" },
    { name: "For Remote Teams", description: "Work from anywhere" },
    { name: "For Agencies", description: "Manage client projects" },
  ],
  resources: [
    { name: "Documentation", description: "Learn how to use Nexus" },
    { name: "Blog", description: "Latest updates and insights" },
    { name: "Community", description: "Connect with other users" },
    { name: "Support", description: "Get help when you need it" },
  ],
} as const;

type SectionKey = keyof typeof NAV_SECTIONS;

/* ------------------------- Motion Variants ------------------------- */
const fadeDown = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const dropdownVariants = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 8, scale: 0.98 },
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

/* ------------------------- Component ------------------------- */
export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<SectionKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { theme, setTheme } = useTheme();
  const { scrollToSection } = useScrollToSection();
  const navigate = useNavigate();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // subtle scroll state for glass nav elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = useMemo(
    () => ["products", "solutions", "resources"] as SectionKey[],
    []
  );

  const baseTransition = {
    duration: reduceMotion ? 0 : 0.18,
    ease: "easeInOut" as const, // ✅ valid easing type
  };
  const handlePricingClick = () => {
    setMobileOpen(false);
    scrollToSection(LANDING_SECTIONS.PRICING);
  };

  const handleFaqClick = () => {
    setMobileOpen(false);
    scrollToSection(LANDING_SECTIONS.FAQ);
  };
  return (
    <motion.nav
      variants={fadeDown}
      initial="initial"
      animate="animate"
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full transition-colors",
        "border-b border-border/60",
        // soft glassmorphism using your tokens
        scrolled
          ? "bg-background/60 backdrop-blur-md shadow-sm"
          : "bg-background/30 backdrop-blur-sm",
      ].join(" ")}
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="size-9 rounded-lg flex items-center justify-center border border-border/60"
              style={{
                background:
                  "linear-gradient(135deg,var(--hero-gradient-from),var(--hero-gradient-via))",
              }}
            >
              <span className="text-white font-semibold">N</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              Nexus Board
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((key) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm font-medium capitalize"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === key}
                >
                  {key}
                  <ChevronDown
                    className={[
                      "size-4 transition-transform",
                      activeDropdown === key ? "rotate-180" : "",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={baseTransition}
                      className="absolute top-[110%] left-0 w-[300px] rounded-xl border border-border/70 bg-card shadow-2xl"
                      role="menu"
                    >
                      <div className="p-2">
                        {NAV_SECTIONS[key].map((item, i) => (
                          <motion.button
                            key={item.name}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              ...baseTransition,
                              delay: reduceMotion ? 0 : i * 0.03,
                            }}
                            className="w-full text-left p-3 rounded-lg hover:bg-accent/60 transition-colors"
                            role="menuitem"
                          >
                            <div className="font-medium text-foreground group-hover:text-primary">
                              {item.name}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {item.description}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button
              onClick={handlePricingClick}
              className="px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm font-medium"
            >
              Pricing
            </button>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setTheme(
                  theme === "light"
                    ? "dark"
                    : theme === "dark"
                    ? "system"
                    : "light"
                )
              }
              className="p-2 rounded-md hover:bg-accent transition"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="size-5 text-foreground" />
              ) : (
                <Sun className="size-5 text-foreground" />
              )}
            </button>
            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" onClick={() => navigate("/sign_in")}>
                Sign in
              </Button>
              <Button onClick={() => navigate("/sign_up")}>Get started</Button>
            </div>

            {/* Mobile trigger */}
            <button
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-md hover:bg-accent transition"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay - non-scrollable */}
            <motion.button
              key="overlay"
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={baseTransition}
            />
            {/* Panel - scrollable content */}
            <motion.div
              key="panel"
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                ...baseTransition,
                duration: reduceMotion ? 0 : 0.22,
              }}
              className="fixed inset-x-4 top-20 z-60 mx-auto w-[min(92vw,360px)] rounded-2xl border border-border/70 bg-card shadow-2xl flex flex-col max-h-[calc(100vh-100px)]"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between p-4 border-b border-border/60 shrink-0">
                <div className="font-semibold text-foreground">Menu</div>
                <button
                  className="inline-flex items-center justify-center size-9 rounded-md hover:bg-accent transition"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Scrollable content area */}
              <div className="p-4 space-y-6 overflow-y-auto flex-1">
                <MobileSection title="Products" items={NAV_SECTIONS.products} />
                <MobileSection
                  title="Solutions"
                  items={NAV_SECTIONS.solutions}
                />
                <div className="flex flex-col gap-3 pt-4 border-t border-border/60 space-y-2">
                  <button
                    onClick={handlePricingClick}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={handleFaqClick}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                  >
                    FAQ
                  </button>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-border/60">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setMobileOpen(false);
                      navigate("/sign_in");
                    }}
                    className="w-full"
                  >
                    Sign in
                  </Button>
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      navigate("/sign_up");
                    }}
                    className="w-full"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ------------------------- Small Mobile Section ------------------------- */
function MobileSection({
  title,
  items,
}: {
  title: string;
  items: readonly { name: string; description: string }[];
}) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.name}>
            <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
              <div className="font-medium text-sm">{it.name}</div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {it.description}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
