import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../reusableComponents/avatar";
import { Button } from "../reusableComponents/button";
import { MoreHorizontal, Plus, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../reusableComponents/dropdown-menu";

interface Member {
  name: string;
  avatar?: string;
}

interface ProjectHeaderProps {
  projectName: string;
  members: Member[];
  onAddTask?: () => void;
  onFilter?: () => void;
}

export function ProjectHeader({
  projectName,
  members,
  onAddTask,
  onFilter,
}: ProjectHeaderProps) {
  return (
    <div className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1>{projectName}</h1>
            <p className="text-muted-foreground mt-1">
              {members.length} team members
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onFilter}>
              <Filter className="size-4" />
              Filter
            </Button>
            <Button onClick={onAddTask}>
              <Plus className="size-4" />
              New Task
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {members.slice(0, 5).map((member, idx) => (
                <Avatar key={idx} className="size-8 border-2 border-background">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-xs">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
              {members.length > 5 && (
                <div className="size-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                  +{members.length - 5}
                </div>
              )}
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Project Settings</DropdownMenuItem>
              <DropdownMenuItem>Share Project</DropdownMenuItem>
              <DropdownMenuItem>Export Data</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
