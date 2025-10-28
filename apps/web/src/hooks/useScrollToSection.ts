import { useCallback } from "react";
import { SectionId } from "../pages/landing/constants/sectionIds";

/**
 * Custom hook for smooth scrolling to sections on the page
 * Handles offset calculation for fixed navbar
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: SectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(`Section with id "${sectionId}" not found`);
      return;
    }

    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 64;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight - 16; // 16px extra padding

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  return { scrollToSection };
}
