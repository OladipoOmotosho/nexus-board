import { Card } from "../../../components/reusableComponents/card";
import { FadeInSection } from "./FadeInSection";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

/**
 * Reusable feature card component with icon and description
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <FadeInSection delay={delay}>
      <Card className="p-6 hover:shadow-md hover:border-border transition-all group cursor-pointer border-border/50 h-full">
        <div className="size-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-muted/80 transition-colors">
          <Icon className="size-5" />
        </div>
        <h3 className="text-base font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </Card>
    </FadeInSection>
  );
}
