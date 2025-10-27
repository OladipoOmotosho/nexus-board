import React from "react";
import { motion, useInView } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  CheckCircle2,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Users,
} from "lucide-react";

export function BentoGrid() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time",
      icon: Users,
      gradient: "from-blue-500/10 to-cyan-500/10",
      span: "md:col-span-2",
    },
    {
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
      icon: Zap,
      gradient: "from-yellow-500/10 to-orange-500/10",
      span: "md:col-span-1",
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights with powerful analytics",
      icon: BarChart3,
      gradient: "from-purple-500/10 to-pink-500/10",
      span: "md:col-span-1",
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance",
      icon: Shield,
      gradient: "from-green-500/10 to-emerald-500/10",
      span: "md:col-span-2",
    },
    {
      title: "Global Access",
      description: "Access from anywhere, on any device",
      icon: Globe,
      gradient: "from-indigo-500/10 to-blue-500/10",
      span: "md:col-span-2",
    },
    {
      title: "Auto-save Everything",
      description: "Never lose your work with automatic saving",
      icon: CheckCircle2,
      gradient: "from-teal-500/10 to-cyan-500/10",
      span: "md:col-span-1",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">Built for modern teams</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage projects, collaborate with your team,
            and ship faster
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-fr">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={feature.span}
            >
              <Card
                className={`p-8 h-full bg-gradient-to-br ${feature.gradient} border-border/50 hover:border-primary/20 transition-all group cursor-pointer`}
              >
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
