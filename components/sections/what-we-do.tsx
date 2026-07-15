"use client";

import Link from "next/link";
import { Tabs } from "@base-ui/react/tabs";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { industries } from "@/constants/industries";
import { services } from "@/constants/services";

const aiServiceSlugs = ["ai-development", "ai-automation", "enterprise-software"];
const aiServices = services.filter((service) => aiServiceSlugs.includes(service.slug));
const otherServices = services.filter(
  (service) => !aiServiceSlugs.includes(service.slug)
);

const tabTriggerClassName =
  "flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium text-muted-foreground outline-none transition-colors data-selected:bg-background data-selected:text-foreground data-selected:shadow-sm focus-visible:ring-3 focus-visible:ring-ring/50";

export function WhatWeDo() {
  return (
    <Section id="what-we-do">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          What we do
        </p>
        <h2 className="mt-3">One team, from model to production</h2>
        <p className="mt-4 text-muted-foreground">
          Browse what we build by discipline, or by the industries we build it for.
        </p>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-12">
        <Tabs.Root defaultValue="ai" className="w-full">
          <Tabs.List className="mx-auto flex w-fit items-center gap-1 rounded-full border border-border bg-muted/50 p-1">
            <Tabs.Tab value="ai" className={tabTriggerClassName}>
              AI &amp; GenAI
            </Tabs.Tab>
            <Tabs.Tab value="services" className={tabTriggerClassName}>
              Services
            </Tabs.Tab>
            <Tabs.Tab value="industries" className={tabTriggerClassName}>
              Industries
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="ai" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aiServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="services" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="industries" className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <industry.icon className="size-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium">{industry.name}</span>
                </div>
              ))}
            </div>
          </Tabs.Panel>
        </Tabs.Root>
      </FadeIn>
    </Section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.offerings[0]?.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
    >
      {Icon && (
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon className="size-5" aria-hidden="true" />
        </div>
      )}
      <h3 className="mt-5 text-lg">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
        Learn more
        <ArrowUpRight
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
