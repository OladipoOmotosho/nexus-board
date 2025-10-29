/**
 * Navigation sections data for landing navbar
 */

export const NAV_SECTIONS = {
  products: [
    { name: "Task Management", description: "Organize and track your work" },
    { name: "Team Collaboration", description: "Work together seamlessly" },
    { name: "Project Boards", description: "Visualize your workflow" },
    { name: "Analytics", description: "Insights and reporting" },
  ],
  solutions: [
    { name: "For Startups", description: "Scale your team efficiently" },
    { name: "For Enterprise", description: "Enterprise-grade security" },
    { name: "For Remote Teams", description: "Work from anywhere" },
    { name: "For Agencies", description: "Manage client projects" },
  ],
  resources: [
    { name: "Documentation", description: "Learn how to use Nexus" },
    { name: "Blog", description: "Latest updates and insights" },
    { name: "Community", description: "Connect with other users" },
    { name: "Support", description: "Get help when you need it" },
  ],
} as const;

export type SectionKey = keyof typeof NAV_SECTIONS;
