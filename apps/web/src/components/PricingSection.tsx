import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle2, Zap, Sparkles } from "lucide-react";

export function PricingSection({ onGetStarted }: { onGetStarted: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out Nexus Board",
      features: [
        "Up to 10 team members",
        "3 projects",
        "Basic task management",
        "Mobile apps",
        "Community support",
      ],
      cta: "Get started",
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$12",
      description: "For growing teams",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Advanced permissions",
        "Unlimited file storage",
      ],
      cta: "Start free trial",
      variant: "default" as const,
      popular: true,
      icon: Zap,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "Advanced security",
        "Dedicated support",
        "SLA guarantee",
        "Custom contracts",
        "On-premise option",
      ],
      cta: "Contact sales",
      variant: "outline" as const,
      icon: Sparkles,
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
          <h2 className="text-4xl md:text-5xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your team. Always know what you'll
            pay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card
                className={`p-8 h-full flex flex-col relative ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10 scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-via text-white border-0">
                    Most Popular
                  </Badge>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3>{plan.name}</h3>
                    {plan.icon && <plan.icon className="size-5 text-primary" />}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.variant}
                  className="w-full"
                  size="lg"
                  onClick={onGetStarted}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-muted-foreground mt-8"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
