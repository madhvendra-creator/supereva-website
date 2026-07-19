import type { CaseStudy } from "@/types";

export const patientIntakeAutomation: CaseStudy = {
  slug: "patient-intake-automation",
  title: "Patient Intake Automation Across a Multi-Location Provider",
  clientDescriptor: "A multi-location healthcare provider",
  industry: "Healthcare & Life Sciences",
  serviceSlug: "ai-automation",
  image: "/images/healthcare.png",
  summary:
    "Digitizing patient intake and connecting it to the existing EHR to cut check-in time and eliminate duplicate data entry.",
  challenge: {
    intro:
      "Patients filled out paperwork by hand at every visit, and front-desk staff re-entered that same information into the practice's systems, one location at a time.",
    points: [
      "Long check-in times were a recurring source of patient complaints across locations.",
      "Manual data entry introduced errors that showed up later in billing and records.",
      "Each location kept slightly different intake formats, making it hard to standardize reporting.",
    ],
  },
  solution: {
    intro:
      "We built a digital intake platform that patients complete before arriving, with automated document processing feeding directly into the existing EHR.",
    points: [
      "Designed a single, standardized digital intake flow used consistently across every location.",
      "Built document processing automation to extract and validate insurance and identification details automatically.",
      "Integrated directly with the provider's existing EHR system rather than introducing a separate record store.",
    ],
  },
  technologies: ["Python", "FastAPI", "React", "PostgreSQL", "AWS", "HL7/FHIR"],
  results: {
    intro:
      "Front-desk teams reported a noticeably calmer check-in process within weeks of rollout, and duplicate data entry across locations was eliminated entirely.",
    metrics: [
      { label: "Check-in time", value: "-60%" },
      { label: "Duplicate data entry", value: "Eliminated" },
      { label: "Locations standardized", value: "100%" },
    ],
  },
  screenshotCount: 3,
  screenshots: [
    "/images/screenshots/patient-intake-1.png",
    "/images/screenshots/patient-intake-2.png",
    "/images/screenshots/patient-intake-3.png",
  ],
  cta: {
    title: "Still running intake or onboarding on paper?",
    description:
      "Tell us about your process, and we'll show you what digitizing it actually involves.",
  },
  metaTitle: "Case Study: Patient Intake Automation Platform",
  metaDescription:
    "How Supereva Technology automated patient intake for a multi-location healthcare provider, cutting check-in time by 60%.",
  keywords: [
    "healthcare automation case study",
    "patient intake automation",
    "AI automation case study",
    "healthcare software development",
  ],
};
