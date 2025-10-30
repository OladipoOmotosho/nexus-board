import { useNavigate } from "react-router-dom";

/**
 * Mobile section component for navigation drawer
 * Displays a category title with list of items
 * Each item navigates to its specified route
 */

interface MobileSectionProps {
  title: string;
  items: readonly {
    name: string;
    description: string;
    path: string;
  }[];
  onNavigate?: () => void; // Callback to close mobile menu after navigation
}

export function MobileSection({
  title,
  items,
  onNavigate,
}: MobileSectionProps) {
  const navigate = useNavigate();

  const handleItemClick = (path: string) => {
    navigate(path);
    onNavigate?.(); // Close mobile menu
  };

  return (
    <div className="space-y-3">
      <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.name}>
            <button
              onClick={() => handleItemClick(it.path)}
              className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors"
            >
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
