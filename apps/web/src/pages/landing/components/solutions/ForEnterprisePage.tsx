import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Shield,
  ArrowRight,
  Lock,
  FileText,
  Users,
  Headphones,
  Award,
  Database,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { ScrollProgress } from "../ScrollProgress";
import { LandingNavbar } from "../nav/LandingNavbar";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption, SOC 2 Type II compliance, and regular security audits.",
  },
  {
    icon: Lock,
    title: "SSO & SAML",
    description:
      "Single sign-on with SAML, OAuth, and Active Directory integration.",
  },
  {
    icon: FileText,
    title: "Advanced Permissions",
    description:
      "Granular access controls and role-based permissions for teams.",
  },
  {
    icon: Database,
    title: "Dedicated Infrastructure",
    description: "Private cloud or on-premise deployment options available.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description:
      "24/7 dedicated support with guaranteed response times and SLAs.",
  },
  {
    icon: Award,
    title: "Custom Contracts",
    description: "Flexible contracts tailored to your organization's needs.",
  },
];

const compliance = [
  "SOC 2 Type II certified",
  "GDPR compliant",
  "HIPAA compliant",
  "ISO 27001 certified",
  "Regular security audits",
  "Data residency options",
];

export default function ForEnterprisePage() {
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);

  const featuresInView = useInView(solutionsRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ScrollProgress />
      <LandingNavbar />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-border/50"
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary/2 via-transparent to-primary/3" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full text-sm"
            >
              <Building2 className="size-4 text-primary" />
              <span className="font-medium">For Enterprise</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                Enterprise-grade{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">security</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M1 8.5C50 3 100 1 150 2.5C200 4 250 6.5 299 8.5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Built for large organizations with advanced security,
                compliance, and support requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] text-base font-medium shadow-sm">
                Contact sales
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                Request demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-12"
            >
              <p className="text-sm text-muted-foreground mb-6">
                Trusted by industry leaders
              </p>
              <div className="flex items-center justify-center gap-8 text-muted-foreground">
                {["Fortune 500", "Government", "Healthcare", "Finance"].map(
                  (industry) => (
                    <span key={industry} className="text-sm font-medium">
                      {industry}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={solutionsRef} className="py-24 px-6">
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
              Built for enterprise scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features and infrastructure for the world's largest
              organizations
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

      {/* Compliance Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Shield className="size-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Security & compliance
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the highest standards for data protection and regulatory
              compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {compliance.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-card border border-border/50 rounded-lg p-4"
              >
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span className="text-base font-medium">{item}</span>
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
              Ready for enterprise?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Nexus Board can meet your organization's unique
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
                Contact sales
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                Schedule demo
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Custom pricing and contracts available
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
