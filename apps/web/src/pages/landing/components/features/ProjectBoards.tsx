import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { LayoutGrid, Columns, ArrowRight, GitBranch } from "lucide-react";
import { NavWrapper } from "../nav/NavWrapper";
import { projectBoardsFeatures, projectBoardsViewModes } from "./featuresData";

const features = projectBoardsFeatures;
const viewModes = projectBoardsViewModes;

export default function ProjectBoards() {
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

  return (
    <NavWrapper>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-15"
            style={{
              background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-to))`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{ top: "50%", left: "50%" }}
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
              <LayoutGrid className="size-4" />
              <span className="text-sm font-medium">Project Boards</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6">
              Visualize work.
              <br />
              <span className="text-muted-foreground">Stay aligned.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Flexible project boards that adapt to any workflow. Plan, track,
              and manage projects with visual clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
                Get started free
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                Explore templates
              </button>
            </div>
          </motion.div>

          {/* View modes showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
          >
            {viewModes.map((mode, index) => (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md hover:border-border transition-all"
              >
                <mode.icon className="size-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{mode.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {mode.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Board Demo */}
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
              Your workflow, visualized
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Drag-and-drop simplicity meets powerful project management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                    app.nexusboard.com/projects/website-redesign
                  </div>
                </div>
              </div>

              {/* Board Content */}
              <div className="bg-linear-to-br from-background via-muted/5 to-background p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="h-4 w-48 bg-foreground/80 rounded mb-2" />
                    <div className="h-2 w-64 bg-muted-foreground/30 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-9 w-24 bg-primary/10 rounded-lg border border-border/50" />
                    <div className="h-9 w-9 bg-muted rounded-lg border border-border/50" />
                    <div className="h-9 w-9 bg-muted rounded-lg border border-border/50" />
                  </div>
                </div>

                {/* Board columns with cards */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { title: "Backlog", cards: 4, color: "bg-muted" },
                    { title: "To Do", cards: 6, color: "bg-blue-500/20" },
                    {
                      title: "In Progress",
                      cards: 3,
                      color: "bg-yellow-500/20",
                    },
                    { title: "Done", cards: 8, color: "bg-green-500/20" },
                  ].map((column) => (
                    <div key={column.title} className="space-y-2">
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-2 w-20 bg-muted-foreground/40 rounded" />
                        <div
                          className={`h-5 w-6 ${column.color} rounded text-xs flex items-center justify-center font-medium`}
                        >
                          {column.cards}
                        </div>
                      </div>
                      {[1, 2].map((card) => (
                        <motion.div
                          key={card}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.4 + card * 0.1,
                          }}
                          className="bg-card border border-border rounded-lg p-3 space-y-2"
                        >
                          <div className="h-2 w-full bg-foreground/70 rounded" />
                          <div className="h-2 w-2/3 bg-muted-foreground/30 rounded" />
                          <div className="flex items-center justify-between pt-2">
                            <div className="size-4 rounded-full bg-primary/30" />
                            <div className="h-1.5 w-12 bg-muted rounded" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
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
              Powerful & flexible
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage projects of any size and complexity
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
              Ready to plan visually?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start organizing projects with flexible boards that work the way
              you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
                Start free trial
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                Browse templates
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
