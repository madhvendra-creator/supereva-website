import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ThemeLogo } from "@/components/layout/theme-logo";
import { footerLinkGroups, siteConfig, socialLinks } from "@/constants/site";

const socialIconPaths: Record<string, string> = {
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.523.993 4.088 4.088 0 01.993 1.523c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.993 1.523 4.088 4.088 0 01-1.523.993c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.523-.993 4.088 4.088 0 01-.993-1.523c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.088 4.088 0 013.63 3.197a4.088 4.088 0 011.523-.993c.46-.163 1.26-.349 2.43-.403C8.416 1.745 8.796 1.733 12 1.733m0-1.57C8.741.163 8.333.175 7.053.234 5.775.293 4.905.505 4.14.86a5.658 5.658 0 00-2.126 1.384A5.658 5.658 0 00.63 4.37C.275 5.135.063 6.005.004 7.283-.055 8.563-.067 8.971-.067 12.23s.012 3.667.07 4.947c.059 1.278.271 2.148.626 2.913a5.658 5.658 0 001.384 2.126 5.658 5.658 0 002.126 1.384c.765.355 1.635.567 2.913.626 1.28.059 1.688.07 4.947.07s3.668-.012 4.948-.07c1.278-.059 2.148-.271 2.913-.626a5.658 5.658 0 002.126-1.384 5.658 5.658 0 001.384-2.126c.355-.765.567-1.635.626-2.913.059-1.28.07-1.688.07-4.948s-.012-3.667-.07-4.947c-.059-1.278-.271-2.148-.626-2.913a5.658 5.658 0 00-1.384-2.126A5.658 5.658 0 0019.86.86C19.095.505 18.225.293 16.947.234 15.667.175 15.259.163 12 .163zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z",
  facebook:
    "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

/* Pull out the two "big" link groups by title so we can place them in
   dedicated columns.  Everything else (Company, Resources) goes into
   the fourth "Contact" column. */
const mainGroups = footerLinkGroups.filter(
  (g) => g.title === "Services" || g.title === "Industries"
);
const extraGroups = footerLinkGroups.filter(
  (g) => g.title !== "Services" && g.title !== "Industries"
);

export function Footer() {
  const year = 2022;

  return (
    <footer className="w-full border-t border-border">
      <Container size="xl">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-4">
          {/* ── Column 1: Brand ─────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              <ThemeLogo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-2 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={socialIconPaths[social.icon] ?? ""} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Services ──────────────────────────── */}
          {/* ── Column 3: Industries ────────────────────────── */}
          {mainGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Column 4: Contact + extra groups ────────────── */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Contact
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden="true" />
                    {siteConfig.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="size-4 shrink-0" aria-hidden="true" />
                    {siteConfig.contactPhone}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company, Resources, etc. */}
            {extraGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-border py-6 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
