import { aiAutomation } from "./ai-automation";
import { aiDevelopment } from "./ai-development";
import { cloudSolutions } from "./cloud-solutions";
import { customSoftwareDevelopment } from "./custom-software-development";
import { devops } from "./devops";
import { digitalTransformation } from "./digital-transformation";
import { enterpriseSoftware } from "./enterprise-software";
import { mobileAppDevelopment } from "./mobile-app-development";
import { uiUxDesign } from "./ui-ux-design";
import { webDevelopment } from "./web-development";

import type { ServicePageContent } from "@/types";

export const services: ServicePageContent[] = [
  aiDevelopment,
  customSoftwareDevelopment,
  webDevelopment,
  mobileAppDevelopment,
  cloudSolutions,
  uiUxDesign,
  devops,
  aiAutomation,
  enterpriseSoftware,
  digitalTransformation,
];

export const serviceSlugs = services.map((service) => service.slug);

export function getServiceBySlug(slug: string): ServicePageContent | undefined {
  return services.find((service) => service.slug === slug);
}
