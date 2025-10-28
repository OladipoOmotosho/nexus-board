import { Users } from "lucide-react";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

function AnimatedProductPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Dashboard Mockup */}
          <div className="relative bg-border/30 rounded-2xl p-1 shadow-2xl">
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
                    app.nexusboard.com/projects
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-linear-to-br from-background via-muted/5 to-background p-8">
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

                {/* Kanban Board */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((col) => (
                    <div key={col} className="space-y-3">
                      <div className="h-2 w-16 bg-muted-foreground/40 rounded mb-4" />
                      {[1, 2, 3].map((item) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: col * 0.1 + item * 0.05,
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
          </div>

          {/* Floating indicators */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.4, delay: 0.6 }}
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
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.4, delay: 0.8 }}
            className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl px-4 py-2 shadow-lg"
          >
            <div className="flex items-center gap-2 text-sm">
              <Users className="size-4 text-blue-500" />
              <span className="font-medium">8 collaborators</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AnimatedProductPreview;
