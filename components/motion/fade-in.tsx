"use client";

import { m, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

type FadeInProps = React.ComponentProps<typeof m.div> & {
  delay?: number;
};

export function FadeIn({ delay = 0, transition, ...props }: FadeInProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay, ...transition }}
      {...props}
    />
  );
}
