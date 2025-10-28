import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "../reusableComponents/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
  count?: number;
}

export function SidebarItem({
  icon: Icon,
  label,
  active,
  onClick,
  count,
}: SidebarItemProps) {
  // Use a div instead of a native <button> because this component is often
  // rendered inside a <NavLink> (which outputs an <a>). Nesting a button
  // inside an anchor creates invalid HTML and can cause React ref warnings
  // when libraries clone elements. A focusable div with role="button"
  // preserves keyboard accessibility while avoiding nested <a><button>.
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group",
        active
          ? "bg-primary text-primary-foreground"
          : "hover:bg-accent text-foreground hover:text-accent-foreground"
      )}
      style={{ borderRadius: "var(--radius-md)" }}
    >
      <Icon
        className={cn(
          "size-5 shrink-0",
          active
            ? "text-primary-foreground"
            : "text-muted-foreground group-hover:text-accent-foreground"
        )}
      />
      <span className="flex-1 text-left">{label}</span>
      {count !== undefined && (
        <span
          className={cn(
            "text-xs px-2 py-0.5 rounded-full",
            active
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          {count}
        </span>
      )}
    </div>
  );
}
