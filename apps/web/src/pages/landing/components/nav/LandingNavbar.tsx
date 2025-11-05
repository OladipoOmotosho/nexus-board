import { useEffect, useMemo, useState } from "react";
import { Menu, ChevronDown, X, Moon, Sun, Monitor } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Button } from "../../../../components/reusableComponents/button";
import { useTheme } from "../../../../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { LANDING_SECTIONS } from "../../constants/sectionIds";
import { useScrollToSection } from "../../../../hooks/useScrollToSection";
import { NAV_SECTIONS, SectionKey } from "./data/navData";
import {
  fadeDown,
  dropdownVariants,
  overlayVariants,
  panelVariants,
} from "./constants/navAnimations";
import { MobileSection } from "./MobileSection";

/* ------------------------- Component ------------------------- */
export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<SectionKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { theme, setTheme, getThemeTitle } = useTheme();
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
    ease: "easeInOut" as const,
  };

  const handleLogoClick = () => {
    navigate("/");
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const handlePricingClick = () => {
    setMobileOpen(false);
    scrollToSection(LANDING_SECTIONS.PRICING);
  };

  const handleFaqClick = () => {
    setMobileOpen(false);
    scrollToSection(LANDING_SECTIONS.FAQ);
  };

  const handleNavItemClick = (path: string) => {
    navigate(path);
    setActiveDropdown(null);
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
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Nexus Board home"
          >
            <div
              className="size-9 rounded-lg flex items-center justify-center border border-border/60"
              style={{
                background:
                  "linear-gradient(135deg,var(--hero-gradient-from),var(--hero-gradient-via))",
              }}
            >
              <span className="text-white font-semibold cursor-pointer">N</span>
            </div>
            <span className="text-lg font-semibold text-foreground cursor-pointer">
              Nexus Board
            </span>
          </button>

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
                            onClick={() => handleNavItemClick(item.path)}
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
              className="p-2 rounded-md hover:bg-accent transition cursor-pointer"
              title={getThemeTitle()}
              aria-label={getThemeTitle()}
            >
              {theme === "light" ? (
                <Sun className="size-5 text-foreground" />
              ) : theme === "dark" ? (
                <Moon className="size-5 text-foreground" />
              ) : (
                <Monitor className="size-5 text-foreground" />
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
                <MobileSection
                  title="Products"
                  items={NAV_SECTIONS.products}
                  onNavigate={() => setMobileOpen(false)}
                />
                <MobileSection
                  title="Solutions"
                  items={NAV_SECTIONS.solutions}
                  onNavigate={() => setMobileOpen(false)}
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
