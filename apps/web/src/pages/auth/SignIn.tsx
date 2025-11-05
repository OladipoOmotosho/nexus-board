import { useState } from "react";
import {
  Chrome,
  Github,
  CheckCircle2,
  Users,
  TrendingUp,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in clicked");
  };

  const features = [
    { icon: CheckCircle2, label: "Task Management" },
    { icon: Users, label: "Team Collaboration" },
    { icon: TrendingUp, label: "Progress Tracking" },
    { icon: Zap, label: "Lightning Fast" },
    { icon: Globe, label: "Global Access" },
    { icon: Shield, label: "Secure" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Hero Section - Completely Redesigned */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-foreground">
        {/* Animated mesh gradient background */}
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
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="absolute rounded-full blur-2xl"
              style={{
                width: `${80 + i * 20}px`,
                height: `${80 + i * 20}px`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0
                    ? "rgba(168, 85, 247, 0.1)"
                    : i % 3 === 1
                    ? "rgba(59, 130, 246, 0.1)"
                    : "rgba(120, 119, 198, 0.1)"
                } 0%, transparent 70%)`,
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
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

          {/* Middle section - Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block mb-6"
              >
                <div className="px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 text-sm font-medium">
                  ✨ Trusted by 10,000+ teams worldwide
                </div>
              </motion.div>

              <h1 className="text-6xl font-bold mb-6 leading-[1.1]">
                Welcome back
              </h1>

              <p className="text-xl text-background/70 max-w-md leading-relaxed">
                Continue your journey towards better project management and
                seamless team collaboration.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  className="relative group"
                >
                  <div className="size-20 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 flex flex-col items-center justify-center gap-2 hover:bg-background/10 hover:border-background/20 transition-all duration-300 hover:scale-105">
                    <feature.icon className="size-6 text-background/80" />
                    <span className="text-[10px] text-background/60 font-medium text-center px-1 leading-tight">
                      {feature.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom section - Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4"
          >
            <div className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10">
              <p className="text-lg italic mb-4 text-background/90">
                "Nexus Board transformed how our team collaborates. We're
                shipping 3x faster now."
              </p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-background/20 flex items-center justify-center text-sm font-semibold">
                  SC
                </div>
                <div>
                  <div className="font-semibold text-sm">Sarah Chen</div>
                  <div className="text-xs text-background/60">
                    Engineering Lead at Vercel
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Sign In Form - Keep original simplicity */}
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
            <h2 className="text-3xl font-semibold mb-2">
              Sign in to your account
            </h2>
            <p className="text-muted-foreground">
              Enter your credentials to continue
            </p>
          </div>

          <div className="space-y-4">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-ring/50"
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Sign In
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
            Don't have an account?{" "}
            <button
              type="button"
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
