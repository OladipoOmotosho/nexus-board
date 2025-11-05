import {
  MessageSquare,
  AtSign,
  Share2,
  Video,
  FileText,
  Globe,
  Columns,
  Eye,
  Filter,
  Workflow,
  Layers,
  GitBranch,
  LayoutGrid,
  CheckSquare,
  Calendar,
  Bell,
  Tag,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Clock,
  Zap,
} from "lucide-react";

// Team Collaboration Data
export const teamCollaborationFeatures = [
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description:
      "Communicate instantly with team members through threaded conversations and direct messages.",
  },
  {
    icon: AtSign,
    title: "Mentions & Notifications",
    description:
      "Tag teammates to get their attention and stay updated with smart notifications.",
  },
  {
    icon: Share2,
    title: "File Sharing",
    description:
      "Share files, images, and documents directly in conversations with unlimited storage.",
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description:
      "Start video calls instantly with screen sharing and recording capabilities.",
  },
  {
    icon: FileText,
    title: "Shared Documents",
    description:
      "Collaborate on documents in real-time with version control and commenting.",
  },
  {
    icon: Globe,
    title: "Remote-First Tools",
    description:
      "Built for distributed teams with timezone support and async collaboration features.",
  },
];

export const teamCollaborationStats = [
  { value: "85%", label: "Faster Communication" },
  { value: "10x", label: "Better Team Alignment" },
  { value: "60%", label: "Less Email Clutter" },
];

// Project Boards Data
export const projectBoardsFeatures = [
  {
    icon: Columns,
    title: "Custom Columns",
    description:
      "Create unlimited columns tailored to your team's workflow and processes.",
  },
  {
    icon: Eye,
    title: "Multiple Views",
    description:
      "Switch between board, list, timeline, and calendar views effortlessly.",
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description:
      "Filter tasks by status, assignee, priority, tags, and custom fields.",
  },
  {
    icon: Workflow,
    title: "Automation Rules",
    description:
      "Set up rules to automate repetitive tasks and streamline your workflow.",
  },
  {
    icon: Layers,
    title: "Template Library",
    description:
      "Start faster with pre-built templates for common project types.",
  },
  {
    icon: GitBranch,
    title: "Dependencies",
    description:
      "Link tasks together and visualize dependencies across your projects.",
  },
];

export const projectBoardsViewModes = [
  {
    name: "Board View",
    description: "Visualize work in kanban-style columns",
    icon: LayoutGrid,
  },
  {
    name: "List View",
    description: "See all tasks in a detailed table",
    icon: Columns,
  },
  {
    name: "Timeline",
    description: "Plan projects with gantt-style timelines",
    icon: GitBranch,
  },
];

// Task Management Data
export const taskManagementFeatures = [
  {
    icon: CheckSquare,
    title: "Kanban Boards",
    description:
      "Visualize your workflow with drag-and-drop boards that make task management intuitive and efficient.",
  },
  {
    icon: Calendar,
    title: "Due Date Tracking",
    description:
      "Never miss a deadline with smart reminders and calendar integration for all your tasks.",
  },
  {
    icon: MessageSquare,
    title: "Team Assignment",
    description:
      "Assign tasks to team members instantly and track their progress in real-time.",
  },
  {
    icon: Tag,
    title: "Labels & Tags",
    description:
      "Organize tasks with custom labels, priorities, and categories for better filtering.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get notified about updates, mentions, and approaching deadlines automatically.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor task completion rates and team productivity with detailed analytics.",
  },
];

export const taskManagementStats = [
  { value: "3x", label: "Faster Task Completion" },
  { value: "94%", label: "Team Satisfaction" },
  { value: "50%", label: "Time Saved Weekly" },
];

export const taskManagementTestimonials = [
  {
    quote:
      "Task management has never been this intuitive. Our team's productivity increased by 40% in the first month.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
  },
  {
    quote:
      "The visual boards and real-time updates make it easy to keep everyone aligned and focused on priorities.",
    author: "Mike Johnson",
    role: "Engineering Lead",
    company: "StartupXYZ",
  },
];

// Analytics Feature Data
export const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Custom Dashboards",
    description:
      "Create personalized dashboards with the metrics that matter most to your team.",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description:
      "Monitor team velocity, completion rates, and productivity trends over time.",
  },
  {
    icon: PieChart,
    title: "Visual Reports",
    description:
      "Beautiful charts and graphs that make data easy to understand and share.",
  },
  {
    icon: Target,
    title: "Goal Progress",
    description:
      "Track progress towards goals and objectives with real-time updates.",
  },
  {
    icon: Clock,
    title: "Time Analytics",
    description:
      "Understand where time is spent and identify bottlenecks in your workflow.",
  },
  {
    icon: FileText,
    title: "Export Reports",
    description:
      "Generate detailed reports in PDF or CSV format for stakeholders.",
  },
];

export const analyticsMetrics = [
  {
    label: "Tasks Completed",
    value: "1,247",
    change: "+23%",
    trend: "up",
  },
  {
    label: "Team Velocity",
    value: "42 pts/week",
    change: "+15%",
    trend: "up",
  },
  {
    label: "Avg. Cycle Time",
    value: "3.2 days",
    change: "-18%",
    trend: "down",
  },
];
