import { Factory, GraduationCap, HeartPulse, Landmark, ShoppingCart, Truck } from "lucide-react";

import type { Industry } from "@/types";

export const industries: Industry[] = [
  { icon: Landmark, name: "Fintech & Banking" },
  { icon: HeartPulse, name: "Healthcare & Life Sciences" },
  { icon: ShoppingCart, name: "E-commerce & Retail" },
  { icon: GraduationCap, name: "Education & EdTech" },
  { icon: Truck, name: "Logistics & Supply Chain" },
  { icon: Factory, name: "Manufacturing" },
];
