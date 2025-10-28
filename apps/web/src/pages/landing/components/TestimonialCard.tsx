import { Card } from "../../../components/reusableComponents/card";
import { FadeInSection } from "./FadeInSection";
import { ImageWithFallback } from "./ImageWithFallback";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  delay?: number;
}

/**
 * Reusable testimonial card component with avatar and attribution
 */
export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <FadeInSection delay={delay}>
      <Card className="p-6 hover:shadow-lg hover:border-border transition-all h-full border-border/50">
        <p className="mb-6 text-base leading-relaxed">"{quote}"</p>
        <div className="flex items-center gap-3 mt-auto">
          <ImageWithFallback
            src={avatar}
            alt={author}
            className="size-10 rounded-full"
          />
          <div>
            <div className="font-medium text-sm">{author}</div>
            <div className="text-xs text-muted-foreground">
              {role} · {company}
            </div>
          </div>
        </div>
      </Card>
    </FadeInSection>
  );
}
