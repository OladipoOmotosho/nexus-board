import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "../../components/reusableComponents/button";
import { TaskCard } from "./components/TaskCard";

export interface Task {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  assignee?: {
    name: string;
    avatar?: string;
  };
  labels?: string[];
  dueDate?: string;
  priority?: "low" | "medium" | "high";
}

interface TaskBoardProps {
  tasks: Task[];
  onTaskMove: (taskId: string, newStatus: Task["status"]) => void;
  onAddTask?: (status: Task["status"]) => void;
}

const columns: Array<{ id: Task["status"]; title: string; color: string }> = [
  { id: "todo", title: "To Do", color: "bg-muted" },
  { id: "in-progress", title: "In Progress", color: "bg-blue-500/10" },
  { id: "done", title: "Done", color: "bg-green-500/10" },
];

export function TaskBoard({ tasks, onTaskMove, onAddTask }: TaskBoardProps) {
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTask(taskId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, status: Task["status"]) => {
    e.preventDefault();
    if (draggedTask) {
      onTaskMove(draggedTask, status);
    }
  };

  const getTasksByStatus = (status: Task["status"]) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {columns.map((column) => (
        <div
          key={column.id}
          className="flex flex-col"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column.id)}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3>{column.title}</h3>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {getTasksByStatus(column.id).length}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="size-7"
              onClick={() => onAddTask?.(column.id)}
            >
              <Plus className="size-4" />
            </Button>
          </div>

          <div
            className={`flex-1 rounded-lg p-4 space-y-3 min-h-[500px] transition-colors ${
              draggedTask &&
              column.id !== tasks.find((t) => t.id === draggedTask)?.status
                ? "bg-accent/50 border-2 border-dashed border-primary/30"
                : "bg-secondary/20"
            }`}
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            {getTasksByStatus(column.id).map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                assignee={task.assignee}
                labels={task.labels}
                dueDate={task.dueDate}
                priority={task.priority}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
