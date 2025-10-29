/**
 * Mobile section component for navigation drawer
 * Displays a category title with list of items
 */

interface MobileSectionProps {
  title: string;
  items: readonly { name: string; description: string }[];
}

export function MobileSection({ title, items }: MobileSectionProps) {
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
