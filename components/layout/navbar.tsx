"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Accordion } from "@base-ui/react/accordion";
import { Drawer } from "@base-ui/react/drawer";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Menu,
  PenLine,
  Phone,
  Plus,
  X,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { mainNavItems, siteConfig } from "@/constants/site";
import { useScrollPosition } from "@/hooks";
import { cn } from "@/lib/utils";

import { ThemeLogo } from "@/components/layout/theme-logo";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
      )}
    >
      <UtilityBar />

      <Container size="xl">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center">
            <ThemeLogo />
          </Link>

          <DesktopNav pathname={pathname} />

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "default" }),
                "hidden rounded-full px-4 md:inline-flex"
              )}
            >
              Contact Us
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
            <MobileNav pathname={pathname} />
          </div>
        </div>
      </Container>
    </header>
  );
}

function UtilityBar() {
  return (
    <div className="hidden border-b border-border/60 bg-background/40 md:block">
      <Container size="xl">
        <div className="flex h-9 items-center justify-end gap-6 text-xs text-muted-foreground">
          <Link
            href="/company/careers"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Briefcase className="size-3" aria-hidden="true" />
            Careers
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <PenLine className="size-3" aria-hidden="true" />
            Blog
          </Link>
          <a
            href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Phone className="size-3" aria-hidden="true" />
            Sales Enquiry: {siteConfig.contactPhone}
          </a>
        </div>
      </Container>
    </div>
  );
}

const triggerClassName = cn(
  "flex h-9 items-center gap-1 whitespace-nowrap rounded-lg px-2 text-sm font-medium text-muted-foreground",
  "transition-colors outline-none select-none hover:bg-muted hover:text-foreground",
  "data-popup-open:bg-muted data-popup-open:text-foreground",
  "focus-visible:ring-3 focus-visible:ring-ring/50"
);

function MegaLink({
  href,
  className,
  children,
  ...props
}: NavigationMenu.Link.Props & { href: string }) {
  return (
    <NavigationMenu.Link
      render={<Link href={href} />}
      className={className}
      closeOnClick
      {...props}
    >
      {children}
    </NavigationMenu.Link>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  const items = mainNavItems.filter((item) => item.label !== "Home");

  return (
    <NavigationMenu.Root
      className="hidden min-w-0 flex-1 md:flex md:justify-center"
      aria-label="Main"
    >
      <NavigationMenu.List className="relative flex items-center gap-6">
        {items.map((item) => {
          if (!item.columns) {
            const isActive = pathname === item.href;
            return (
              <NavigationMenu.Item key={item.label}>
                <MegaLink
                  href={item.href!}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    triggerClassName,
                    isActive && "text-foreground"
                  )}
                >
                  {item.label}
                </MegaLink>
              </NavigationMenu.Item>
            );
          }

          return (
            <NavigationMenu.Item key={item.label}>
              <NavigationMenu.Trigger
                className={triggerClassName}
                aria-haspopup="true"
              >
                {item.label}
                <NavigationMenu.Icon className="transition-transform duration-200 data-popup-open:rotate-180">
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="w-[min(90vw,640px)] p-2">
                <div
                  className="grid gap-1 p-2"
                  style={{
                    gridTemplateColumns: `repeat(${item.columns.length}, minmax(220px, 1fr))`,
                  }}
                >
                  {item.columns.map((column) => (
                    <div key={column.title}>
                      <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {column.title}
                      </p>
                      <ul
                        className={cn(
                          "grid gap-0.5",
                          column.links.length > 4 && "sm:grid-cols-2"
                        )}
                      >
                        {column.links.map((link) => (
                          <li key={link.href + link.label}>
                            <MegaLink
                              href={link.href}
                              className="block rounded-lg px-3 py-2 text-left transition-colors hover:bg-muted data-popup-open:bg-muted"
                            >
                              <span className="text-sm font-medium text-foreground">
                                {link.label}
                              </span>
                              {link.description && (
                                <span className="mt-0.5 block text-xs text-muted-foreground">
                                  {link.description}
                                </span>
                              )}
                            </MegaLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          sideOffset={12}
          collisionPadding={16}
          className="z-50 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-200 ease-out data-instant:transition-none"
        >
          <NavigationMenu.Popup className="relative w-[var(--popup-width)] origin-[var(--transform-origin)] overflow-hidden rounded-2xl border border-border bg-background shadow-xl outline-none transition-[opacity,transform,width,height] duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
            <NavigationMenu.Viewport className="relative h-[var(--popup-height)] w-full overflow-hidden" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <Drawer.Root swipeDirection="right">
      <Drawer.Trigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu aria-hidden="true" />
          </Button>
        }
      />
      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Drawer.Viewport className="fixed inset-0 z-50 flex justify-end">
          <Drawer.Popup className="flex h-full w-80 max-w-[85vw] flex-col border-l border-border bg-background text-foreground outline-none [transform:translateX(var(--drawer-swipe-movement-x))] transition-transform duration-300 data-ending-style:translate-x-full data-starting-style:translate-x-full">
            <div className="flex items-center justify-between p-6 pb-0">
              <Drawer.Title className="text-base font-semibold">
                Menu
              </Drawer.Title>
              <Drawer.Close
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Close menu"
                  >
                    <X aria-hidden="true" />
                  </Button>
                }
              />
            </div>

            <nav
              aria-label="Mobile"
              className="mt-6 flex flex-1 flex-col overflow-y-auto px-6"
            >
              <Accordion.Root className="flex flex-col divide-y divide-border">
                {mainNavItems.map((item) => {
                  if (!item.columns) {
                    const isActive = pathname === item.href;
                    return (
                      <Drawer.Close
                        key={item.label}
                        nativeButton={false}
                        render={
                          <Link
                            href={item.href!}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                              "rounded-lg px-1 py-3 text-base font-medium transition-colors hover:bg-muted",
                              isActive ? "text-foreground" : "text-muted-foreground"
                            )}
                          >
                            {item.label}
                          </Link>
                        }
                      />
                    );
                  }

                  return (
                    <Accordion.Item key={item.label}>
                      <Accordion.Header>
                        <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-3 text-left text-base font-medium text-foreground">
                          {item.label}
                          <Plus
                            className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-45"
                            aria-hidden="true"
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
                        <div className="flex flex-col gap-4 pb-4">
                          {item.columns.map((column) => (
                            <div key={column.title}>
                              {item.columns!.length > 1 && (
                                <p className="mb-1 px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                  {column.title}
                                </p>
                              )}
                              <ul className="flex flex-col gap-0.5">
                                {column.links.map((link) => (
                                  <li key={link.href + link.label}>
                                    <Drawer.Close
                                      nativeButton={false}
                                      render={
                                        <Link
                                          href={link.href}
                                          className="block rounded-lg px-1 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                        >
                                          {link.label}
                                        </Link>
                                      }
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </nav>

            <div className="flex flex-col gap-3 border-t border-border p-6">
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {siteConfig.contactPhone}
              </a>
              <Drawer.Close
                nativeButton={false}
                render={
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full rounded-full"
                    )}
                  >
                    Contact Us
                  </Link>
                }
              />
            </div>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
