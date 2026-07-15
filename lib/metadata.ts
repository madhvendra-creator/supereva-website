import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";

type ConstructMetadataParams = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
}: ConstructMetadataParams = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : "Supereva Technology - AI, Product Development and Data Engineering Company";

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
