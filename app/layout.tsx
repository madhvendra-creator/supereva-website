import "./globals.css";

import { MainLayout } from "@/components/layout/main-layout";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ToastProvider } from "@/components/providers/toast-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { geistMono, geistSans } from "@/lib/fonts";
import { constructMetadata } from "@/lib/metadata";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  jsonLdScriptProps,
} from "@/lib/schema";

export const metadata = constructMetadata();

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [buildOrganizationSchema(), buildWebSiteSchema()],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          {...jsonLdScriptProps(organizationJsonLd)}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MotionProvider>
            <MainLayout>{children}</MainLayout>
          </MotionProvider>
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
