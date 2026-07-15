import Link from "next/link";
import { ArrowUpRight, Bot, Cloud, Compass, Database } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

const services = [
  {
    icon: Bot,
    title: "AI Product Engineering",
    description:
      "We design and build AI-native products end to end, from first prototype to production scale.",
  },
  {
    icon: Cloud,
    title: "Platform & Infrastructure",
    description:
      "Cloud-native systems engineered for reliability, security, and growth from day one.",
  },
  {
    icon: Database,
    title: "Data & Machine Learning",
    description:
      "Data pipelines, model training, and MLOps that turn raw data into a real advantage.",
  },
  {
    icon: Compass,
    title: "AI Strategy & Advisory",
    description:
      "Helping teams adopt AI responsibly, from roadmap and architecture to rollout.",
  },
];

export function Services() {
  return (
    <Section background="muted" id="services">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          What we do
        </p>
        <h2 className="mt-3">End-to-end AI product engineering</h2>
        <p className="mt-4 text-muted-foreground">
          From zero to production, we bring the engineering depth AI-native
          products demand.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.06}>
            <div className="group h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <service.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl">{service.title}</h3>
              <p className="mt-3 text-muted-foreground">
                {service.description}
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground"
              >
                Learn more
                <span className="sr-only"> about {service.title}</span>
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
