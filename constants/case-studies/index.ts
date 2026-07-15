import { adaptiveLearningPlatform } from "./adaptive-learning-platform";
import { aiUnderwritingPlatform } from "./ai-underwriting-platform";
import { fleetVisibilityPlatform } from "./fleet-visibility-platform";
import { headlessStorefrontReplatform } from "./headless-storefront-replatform";
import { patientIntakeAutomation } from "./patient-intake-automation";
import { predictiveMaintenanceSystem } from "./predictive-maintenance-system";

import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  aiUnderwritingPlatform,
  patientIntakeAutomation,
  headlessStorefrontReplatform,
  adaptiveLearningPlatform,
  fleetVisibilityPlatform,
  predictiveMaintenanceSystem,
];

export const caseStudySlugs = caseStudies.map((caseStudy) => caseStudy.slug);

export const caseStudyIndustries = Array.from(
  new Set(caseStudies.map((caseStudy) => caseStudy.industry))
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
