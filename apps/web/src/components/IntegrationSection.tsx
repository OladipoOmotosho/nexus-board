import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "./ui/badge";

export function IntegrationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const integrations = [
    { name: "Slack", logo: "💬" },
    { name: "GitHub", logo: "🐙" },
    { name: "Google Drive", logo: "📁" },
    { name: "Figma", logo: "🎨" },
    { name: "Zoom", logo: "📹" },
    { name: "Notion", logo: "📝" },
    { name: "Linear", logo: "⚡" },
    { name: "Jira", logo: "📊" },
  ];

  return (
    <section ref={ref} className="py-16 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground mb-4">
            Integrates seamlessly with your favorite tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {integrations.map((integration, idx) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/30 transition-all cursor-pointer"
            >
              <span className="text-2xl">{integration.logo}</span>
              <span className="font-medium">{integration.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
