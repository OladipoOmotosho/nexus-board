import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "You get full access to all Pro features for 14 days, no credit card required. After the trial ends, you can choose to upgrade or continue with the free plan.",
    },
    {
      question: "Can I change plans at any time?",
      answer:
        "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-level encryption, SOC 2 Type II compliance, and regular security audits to ensure your data is protected.",
    },
    {
      question: "How many team members can I add?",
      answer:
        "The Free plan supports up to 10 team members. Pro and Enterprise plans support unlimited team members.",
    },
    {
      question:
        "Do you offer discounts for nonprofits or educational institutions?",
      answer:
        "Yes! We offer 50% discounts for nonprofits and educational institutions. Contact our sales team to learn more.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with Slack, GitHub, Google Drive, Figma, Zoom, Notion, Linear, Jira, and many more. We also offer a powerful API for custom integrations.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Nexus Board
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="#" className="text-primary hover:underline font-medium">
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
