import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  CheckSquare,
  Calendar,
  Bell,
  Filter,
  Tag,
  TrendingUp,
} from "lucide-react";

const features = [
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
    icon: Users,
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

const stats = [
  { value: "3x", label: "Faster Task Completion" },
  { value: "94%", label: "Team Satisfaction" },
  { value: "50%", label: "Time Saved Weekly" },
];

const testimonials = [
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

export default function TaskManagementFeature() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const demoRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const demoInView = useInView(demoRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-border/50"
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via))`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{ top: "10%", left: "10%" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full mb-6">
              <CheckSquare className="size-4" />
              <span className="text-sm font-medium">Task Management</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6">
              Organize work.
              <br />
              <span className="text-muted-foreground">Ship faster.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Powerful task management that helps teams stay organized,
              prioritize work, and deliver projects on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
                Get started free
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                Watch demo
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-semibold mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section ref={demoRef} className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              See it in action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how teams use Nexus Board to manage tasks and collaborate
              seamlessly
            </p>
          </motion.div>

          {/* Demo board mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-border/30 rounded-2xl p-1 shadow-2xl"
          >
            <div className="bg-background rounded-xl overflow-hidden border border-border">
              {/* Browser chrome */}
              <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/20" />
                  <div className="size-3 rounded-full bg-yellow-500/20" />
                  <div className="size-3 rounded-full bg-green-500/20" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground border border-border/50">
                    app.nexusboard.com/tasks
                  </div>
                </div>
              </div>

              {/* Kanban Board Content */}
              <div className="bg-gradient-to-br from-background via-muted/5 to-background p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="h-3 w-32 bg-foreground/80 rounded mb-2" />
                    <div className="h-2 w-48 bg-muted-foreground/30 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-20 bg-primary/10 rounded-lg" />
                    <div className="h-8 w-8 bg-muted rounded-lg" />
                  </div>
                </div>

                {/* Kanban Columns */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      title: "To Do",
                      count: 5,
                      color: "bg-muted-foreground/40",
                    },
                    { title: "In Progress", count: 3, color: "bg-primary/40" },
                    { title: "Done", count: 8, color: "bg-green-500/40" },
                  ].map((column, colIndex) => (
                    <div key={column.title} className="space-y-3">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`h-2 w-16 ${column.color} rounded`} />
                        <div className="h-5 w-6 bg-muted rounded text-xs flex items-center justify-center">
                          {column.count}
                        </div>
                      </div>
                      {[1, 2, 3].map((item) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            demoInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + colIndex * 0.1 + item * 0.05,
                          }}
                          className="bg-card border border-border rounded-lg p-3"
                        >
                          <div className="h-2 w-full bg-foreground/70 rounded mb-2" />
                          <div className="h-2 w-3/4 bg-muted-foreground/30 rounded mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="size-5 rounded-full bg-primary/20" />
                            <div className="h-1.5 w-12 bg-muted rounded" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating indicators */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                demoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute -top-4 -left-4 bg-background border border-border rounded-xl px-4 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2 text-sm">
                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium">Live updates</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                demoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.4, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl px-4 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2 text-sm">
                <Users className="size-4 text-blue-500" />
                <span className="font-medium">Real-time collaboration</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Everything you need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help teams manage tasks efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md hover:border-border transition-all"
              >
                <div className="size-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what teams are saying about our task management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-card border border-border/50 rounded-lg p-6"
              >
                <p className="mb-6 text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-2xl border border-border/50 p-12 md:p-16 text-center relative overflow-hidden bg-muted/30"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Ready to get organized?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of teams using Nexus Board to manage tasks and ship
              faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
                Start free trial
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                Talk to sales
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Free for 14 days. No credit card required.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
