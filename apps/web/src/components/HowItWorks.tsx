import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { PenTool, Users, Rocket, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      number: "01",
      title: "Create your workspace",
      description:
        "Set up your workspace in seconds. Invite your team and get started instantly.",
      icon: PenTool,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Collaborate with your team",
      description:
        "Work together in real-time. Assign tasks, set deadlines, and track progress.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Ship faster",
      description:
        "Streamline your workflow and deliver projects faster than ever before.",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      title: "Achieve your goals",
      description:
        "Track your progress, celebrate wins, and continuously improve.",
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-500",
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
            How it works
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">Get started in minutes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From setup to success, we make project management effortless
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: idx % 2 === 0 ? -40 : 40 }
              }
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="p-8 h-full relative overflow-hidden group hover:shadow-lg transition-all">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                <div className="relative z-10">
                  {/* Step number */}
                  <div className="flex items-start gap-6 mb-4">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`size-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <step.icon className="size-6 text-white" />
                    </div>
                  </div>

                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Connecting line (except last item) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.2 }}
                    className={`hidden md:block absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b ${step.color} origin-top`}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
