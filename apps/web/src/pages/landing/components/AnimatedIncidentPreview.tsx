import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { AlertTriangle, MessageSquare, Zap } from "lucide-react";

export default function AnimatedIncidentPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const messages = [
    {
      icon: <AlertTriangle className="text-red-500" size={16} />,
      user: "IncidentBot",
      text: "High error rate detected in production cluster.",
    },
    {
      icon: <MessageSquare className="text-blue-500" size={16} />,
      user: "Jane (SRE)",
      text: "Acknowledged. Rolling back latest deployment.",
    },
    {
      icon: <Zap className="text-yellow-500" size={16} />,
      user: "System",
      text: "Deployment reverted successfully. Error rate normalizing.",
    },
  ];

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative bg-card border border-border/50 rounded-2xl p-6 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-4">
          <h3 className="text-sm font-semibold text-foreground/80">
            Incident Feed
          </h3>
          <span className="text-xs text-muted-foreground">Live</span>
        </div>

        <div className="space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={
                inView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }
              }
              transition={{ delay: i * 0.3, duration: 0.5 }}
              className="flex items-start gap-3 bg-muted/30 p-3 rounded-lg border border-border/20"
            >
              {msg.icon}
              <div>
                <p className="text-sm font-medium text-foreground">
                  {msg.user}
                </p>
                <p className="text-sm text-muted-foreground">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1, duration: 0.4 }}
        className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl px-4 py-2 shadow-lg"
      >
        <div className="flex items-center gap-2 text-sm">
          <div className="size-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-medium">Live Updates</span>
        </div>
      </motion.div>
    </div>
  );
}
