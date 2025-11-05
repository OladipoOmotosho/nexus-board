import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  PieChart,
  Activity,
  Target,
  Clock,
  BarChart3,
} from "lucide-react";
import { NavWrapper } from "../nav/NavWrapper";
import { analyticsFeatures, analyticsMetrics } from "./featuresData";

const features = analyticsFeatures;
const metrics = analyticsMetrics;

export default function AnalyticsFeature() {
  const featuresRef = useRef(null);
  const demoRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const demoInView = useInView(demoRef, { once: true, amount: 0.3 });

  return (
    <NavWrapper>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-border/50">
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
              <BarChart3 className="size-4" />
              <span className="text-sm font-medium">Analytics & Insights</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6">
              Data-driven decisions.
              <br />
              <span className="text-muted-foreground">Better outcomes.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Turn project data into actionable insights. Make informed
              decisions with real-time analytics and comprehensive reporting.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
                Get started free
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                View sample reports
              </button>
            </div>
          </motion.div>

          {/* Metrics showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md hover:border-border transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {metric.label}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      metric.trend === "up"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-blue-500/10 text-blue-600"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-semibold">{metric.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Demo */}
      <section ref={demoRef} className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Beautiful, actionable insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visualize your team's performance with intuitive dashboards and
              reports
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              {/* Chart placeholders */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Line chart */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      Task Completion Trend
                    </h3>
                    <Activity className="size-4 text-muted-foreground" />
                  </div>
                  <div className="h-48 bg-muted/20 rounded-lg border border-border/50 flex items-end gap-1 p-4">
                    {[40, 60, 45, 75, 55, 80, 70, 90, 85, 95, 88, 100].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={
                            demoInView
                              ? { height: `${height}%` }
                              : { height: 0 }
                          }
                          transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                          className="flex-1 bg-linear-to-t from-primary/80 to-primary/40 rounded-sm"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Pie chart */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Tasks by Status</h3>
                    <PieChart className="size-4 text-muted-foreground" />
                  </div>
                  <div className="h-48 bg-muted/20 rounded-lg border border-border/50 flex items-center justify-center p-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={
                        demoInView
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -180 }
                      }
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="relative size-32"
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `conic-gradient(
                          var(--primary) 0deg 120deg,
                          var(--muted) 120deg 240deg,
                          oklch(0.723 0.219 149.579) 240deg 360deg
                        )`,
                        }}
                      />
                      <div className="absolute inset-3 rounded-full bg-card" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "On Track", value: "73%", icon: Target },
                  { label: "At Risk", value: "18%", icon: Activity },
                  { label: "Delayed", value: "9%", icon: Clock },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="bg-muted/20 rounded-lg p-4 border border-border/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="size-4 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                    <div className="text-2xl font-semibold">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Powerful analytics tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to measure, analyze, and improve team
              performance
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
              Ready for better insights?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start making data-driven decisions with powerful analytics and
              reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
                Start free trial
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                Schedule demo
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Free for 14 days. No credit card required.
            </p>
          </div>
        </motion.div>
      </section>
    </NavWrapper>
  );
}
