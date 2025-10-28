import React from "react";
import { Calendar, GripVertical } from "lucide-react";
import { Badge } from "apps/web/src/components/reusableComponents/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "apps/web/src/components/reusableComponents/avatar";

interface TaskCardProps {
  id: string;
  title: string;
  assignee?: {
    name: string;
    avatar?: string;
  };
  labels?: string[];
  dueDate?: string;
  priority?: "low" | "medium" | "high";
  onDragStart?: (e: React.DragEvent, taskId: string) => void;
  onDragEnd?: (e: React.DragEvent) => void;
}

export function TaskCard({
  id,
  title,
  assignee,
  labels = [],
  dueDate,
  priority,
  onDragStart,
  onDragEnd,
}: TaskCardProps) {
  const getPriorityColor = () => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400";
      case "medium":
        return "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400";
      case "low":
        return "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400";
      default:
        return "bg-accent text-accent-foreground";
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart?.(e, id)}
      onDragEnd={onDragEnd}
      className="group relative bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all cursor-grab active:cursor-grabbing hover:border-primary/20"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <GripVertical className="size-4 text-muted-foreground" />
      </div>

      <h4 className="mb-3 pr-6">{title}</h4>

      {labels.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {labels.map((label, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {label}
            </Badge>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
        {assignee && (
          <Avatar className="size-6">
            <AvatarImage src={assignee.avatar} alt={assignee.name} />
            <AvatarFallback className="text-xs">
              {assignee.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        )}

        {dueDate && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="size-3.5" />
            <span>{dueDate}</span>
          </div>
        )}

        {priority && (
          <Badge variant="outline" className={`text-xs ${getPriorityColor()}`}>
            {priority}
          </Badge>
        )}
      </div>
    </div>
  );
}
