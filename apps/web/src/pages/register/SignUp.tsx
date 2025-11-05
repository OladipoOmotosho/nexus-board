import { useState } from "react";
import {
  Chrome,
  Github,
  Rocket,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (acceptTerms) {
      console.log("Account created");
    }
  };

  const benefits = [
    { icon: Rocket, text: "Get started in 60 seconds" },
    { icon: Zap, text: "No credit card required" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Users, text: "Join 10,000+ teams" },
  ];

  const steps = [
    { number: "1", title: "Create account", active: true },
    { number: "2", title: "Set up workspace", active: false },
    { number: "3", title: "Invite team", active: false },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Hero Section - Redesigned */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-foreground">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: `
                  radial-gradient(at 20% 30%, rgba(120, 119, 198, 0.3) 0px, transparent 50%),
                  radial-gradient(at 80% 70%, rgba(168, 85, 247, 0.3) 0px, transparent 50%),
                  radial-gradient(at 40% 80%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)
                `,
                backgroundSize: "200% 200%",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -25, 0],
                x: [0, Math.sin(i) * 15, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="absolute rounded-full blur-2xl"
              style={{
                width: `${70 + i * 15}px`,
                height: `${70 + i * 15}px`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0
                    ? "rgba(168, 85, 247, 0.15)"
                    : i % 3 === 1
                    ? "rgba(59, 130, 246, 0.15)"
                    : "rgba(120, 119, 198, 0.15)"
                } 0%, transparent 70%)`,
                top: `${15 + i * 18}%`,
                left: `${8 + i * 14}%`,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between py-16 px-16 text-background">
          {/* Top section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-background/10 backdrop-blur-xl border border-background/20 flex items-center justify-center shadow-2xl">
                <span className="text-background font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-semibold">Nexus Board</span>
            </div>
          </motion.div>

          {/* Middle section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block mb-6"
              >
                <div className="px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 text-sm font-medium">
                  🚀 Start your 14-day free trial
                </div>
              </motion.div>

              <h1 className="text-6xl font-bold mb-6 leading-[1.1]">
                Start your
                <br />
                journey today
              </h1>

              <p className="text-xl text-background/70 max-w-md leading-relaxed">
                Join thousands of teams already managing their projects
                efficiently with Nexus Board.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="size-10 shrink-0 rounded-lg bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center">
                    <benefit.icon className="size-5 text-background/80" />
                  </div>
                  <span className="text-lg">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress steps */}
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`size-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step.active
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/10 backdrop-blur-sm border border-background/20"
                    }`}
                  >
                    {step.active ? (
                      <CheckCircle2 className="size-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={
                      step.active ? "font-medium" : "text-background/60"
                    }
                  >
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom section - Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-4 gap-6"
          >
            {[
              { value: "10K+", label: "Teams" },
              { value: "50K+", label: "Projects" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold mb-1">{stat.value}</div>
                <div className="text-xs text-background/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="size-10 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via))`,
                }}
              >
                <span className="text-white font-semibold">N</span>
              </div>
              <span className="text-xl font-semibold">Nexus Board</span>
            </div>
            <h2 className="text-3xl font-semibold mb-2">Create your account</h2>
            <p className="text-muted-foreground">
              Get started with your free account today
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-ring/50"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-ring/50"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-ring/50"
                required
              />
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters
              </p>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 size-4 rounded border-border"
              />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
              >
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!acceptTerms}
              className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium inline-flex items-center justify-center gap-2 group"
            >
              Create Account
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                <Chrome className="size-4" />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                <Github className="size-4" />
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              type="button"
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
