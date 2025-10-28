import { FadeInSection } from "./FadeInSection";

interface SectionHeaderProps {
  title: string;
  description: string;
}

/**
 * Reusable section header component with fade-in animation
 */
export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <FadeInSection>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </FadeInSection>
  );
}
