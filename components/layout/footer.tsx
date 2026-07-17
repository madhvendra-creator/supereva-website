import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ThemeLogo } from "@/components/layout/theme-logo";
import { footerLinkGroups, siteConfig, socialLinks } from "@/constants/site";

export function Footer() {
  const year = 2022;

  return (
    <footer className="w-full border-t border-border">
      <Container size="xl">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-6">
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              <ThemeLogo />
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-2 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">
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

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-3.5 shrink-0" aria-hidden="true" />
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-3.5 shrink-0" aria-hidden="true" />
                  {siteConfig.contactPhone}
                </a>
              </li>
            </ul>
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
