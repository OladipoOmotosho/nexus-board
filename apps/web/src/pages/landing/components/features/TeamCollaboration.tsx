import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Users,
  MessageSquare,
  Video,
  ArrowRight,
  Share2,
  AtSign,
  FileText,
  Globe,
} from "lucide-react";
import { LandingNavbar } from "../nav/LandingNavbar";
import { ScrollProgress } from "../ScrollProgress";

const features = [
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description:
      "Communicate instantly with team members through threaded conversations and direct messages.",
  },
  {
    icon: AtSign,
    title: "Mentions & Notifications",
    description:
      "Tag teammates to get their attention and stay updated with smart notifications.",
  },
  {
    icon: Share2,
    title: "File Sharing",
    description:
      "Share files, images, and documents directly in conversations with unlimited storage.",
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description:
      "Start video calls instantly with screen sharing and recording capabilities.",
  },
  {
    icon: FileText,
    title: "Shared Documents",
    description:
      "Collaborate on documents in real-time with version control and commenting.",
  },
  {
    icon: Globe,
    title: "Remote-First Tools",
    description:
      "Built for distributed teams with timezone support and async collaboration features.",
  },
];

const stats = [
  { value: "85%", label: "Faster Communication" },
  { value: "10x", label: "Better Team Alignment" },
  { value: "60%", label: "Less Email Clutter" },
];

export default function TeamCollaboration() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ScrollProgress />
      <LandingNavbar />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-border/50"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: `linear-gradient(135deg, var(--hero-gradient-via), var(--hero-gradient-to))`,
            }}
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{ bottom: "10%", right: "10%" }}
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
              <Users className="size-4" />
              <span className="text-sm font-medium">Team Collaboration</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6">
              Work together.
              <br />
              <span className="text-muted-foreground">Seamlessly.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Bring your team together with tools designed for real-time
              collaboration, whether you're in the office or working remotely.
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

      {/* Chat Interface Demo */}
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
              Communication made simple
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chat, video call, and collaborate in real-time with your entire
              team
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Chat preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                    DT
                  </div>
                  <div>
                    <div className="font-medium">Design Team</div>
                    <div className="text-xs text-muted-foreground">
                      8 members
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-medium shrink-0">
                      SC
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm font-medium">Sarah Chen</span>
                        <span className="text-xs text-muted-foreground">
                          2:34 PM
                        </span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 text-sm">
                        The new landing page design is ready for review 🎨
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center text-xs font-medium shrink-0">
                      MJ
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm font-medium">
                          Mike Johnson
                        </span>
                        <span className="text-xs text-muted-foreground">
                          2:35 PM
                        </span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 text-sm">
                        Looks great! Can we hop on a quick call to discuss the
                        animations?
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium shrink-0">
                      You
                    </div>
                    <div className="flex-1">
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-sm">
                        Sure! Starting a call now...
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">
                  Collaboration features
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                    <MessageSquare className="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm mb-1">
                        Threaded Conversations
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Keep discussions organized with threads
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                    <Video className="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm mb-1">
                        Instant Video Calls
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Start calls with one click
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                    <Share2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm mb-1">
                        File Sharing
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Share files instantly in chat
                      </div>
                    </div>
                  </div>
                </div>
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
              Built for modern teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to collaborate effectively, all in one place
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
              Ready to collaborate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join teams around the world using Nexus Board for seamless
              collaboration.
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
