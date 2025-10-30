/**
 * Navigation sections data for landing navbar
 * Each item includes a route path for navigation
 */

export const NAV_SECTIONS = {
  products: [
    {
      name: "Task Management",
      description: "Organize and track your work",
      path: "/features/task-management",
    },
    {
      name: "Team Collaboration",
      description: "Work together seamlessly",
      path: "/features/team-collaboration",
    },
    {
      name: "Project Boards",
      description: "Visualize your workflow",
      path: "/features/project-boards",
    },
    {
      name: "Analytics",
      description: "Insights and reporting",
      path: "/features/analytics",
    },
  ],
  solutions: [
    {
      name: "For Startups",
      description: "Scale your team efficiently",
      path: "/solutions/startups",
    },
    {
      name: "For Enterprise",
      description: "Enterprise-grade security",
      path: "/solutions/enterprise",
    },
    {
      name: "For Remote Teams",
      description: "Work from anywhere",
      path: "/solutions/remote",
    },
    {
      name: "For Agencies",
      description: "Manage client projects",
      path: "/solutions/agencies",
    },
  ],
  resources: [
    {
      name: "Documentation",
      description: "Learn how to use Nexus",
      path: "/resources/docs",
    },
    {
      name: "Blog",
      description: "Latest updates and insights",
      path: "/resources/blog",
    },
    {
      name: "Community",
      description: "Connect with other users",
      path: "/resources/community",
    },
    {
      name: "Support",
      description: "Get help when you need it",
      path: "/resources/support",
    },
  ],
} as const;

export type SectionKey = keyof typeof NAV_SECTIONS;
