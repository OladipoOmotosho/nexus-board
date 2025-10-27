import React from 'react';
import { Card } from './ui/card';
import { ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Progress } from './ui/progress';

export function Dashboard() {
  const stats = [
    {
      label: 'Total Tasks',
      value: '142',
      change: '+12%',
      trend: 'up',
      icon: CheckCircle2,
    },
    {
      label: 'In Progress',
      value: '23',
      change: '+5%',
      trend: 'up',
      icon: Clock,
    },
    {
      label: 'Completed',
      value: '98',
      change: '+18%',
      trend: 'up',
      icon: CheckCircle2,
    },
    {
      label: 'Overdue',
      value: '8',
      change: '-3%',
      trend: 'down',
      icon: AlertCircle,
    },
  ];

  const projects = [
    { name: 'Website Redesign', progress: 75, tasks: 12, dueDate: 'Nov 15' },
    { name: 'Mobile App', progress: 45, tasks: 8, dueDate: 'Nov 30' },
    { name: 'Marketing Campaign', progress: 90, tasks: 5, dueDate: 'Nov 5' },
  ];

  const recentActivity = [
    { user: 'Sarah Chen', action: 'completed', task: 'Design homepage mockup', time: '2h ago' },
    { user: 'Mike Johnson', action: 'commented on', task: 'User authentication flow', time: '3h ago' },
    { user: 'Emma Wilson', action: 'created', task: 'API documentation', time: '5h ago' },
    { user: 'Alex Brown', action: 'moved', task: 'Payment integration', time: '6h ago' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of your projects and tasks</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <h2 className="mb-2">{stat.value}</h2>
                <div className="flex items-center gap-1">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="size-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="size-4 text-red-600" />
                  )}
                  <span className={`text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">vs last week</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <stat.icon className="size-5 text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Projects and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Projects */}
        <Card className="p-6">
          <h3 className="mb-6">Active Projects</h3>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <h4>{project.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    Due {project.dueDate}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Progress value={project.progress} className="flex-1" />
                  <span className="text-sm text-muted-foreground">{project.progress}%</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.tasks} tasks remaining
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-primary">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>
                    {' '}{activity.action}{' '}
                    <span className="font-medium">"{activity.task}"</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
