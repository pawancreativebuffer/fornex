import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.fornexhealth.com";

interface SitemapPage {
  urlPath: string;
  lastModified: Date;
}

// Helper to recursively find page files and their last modified time
function getPages(dir: string, baseDir: string = dir): SitemapPage[] {
  let results: SitemapPage[] = [];

  if (!fs.existsSync(dir)) {
    return results;
  }

  const list = fs.readdirSync(dir);

  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Exclude API routes, private directories, and Next.js route groups/special folders
      if (file.startsWith("_") || file.startsWith("(") || file === "api") {
        continue;
      }
      results = results.concat(getPages(filePath, baseDir));
    } else {
      // Match page files
      if (/^page\.(tsx|ts|js|jsx)$/.test(file)) {
        const relativePath = path.relative(baseDir, filePath);
        const dirPath = path.dirname(relativePath);

        // Convert backslashes to forward slashes for URLs
        const urlPath = dirPath === "." ? "" : dirPath.replace(/\\/g, "/");

        results.push({
          urlPath,
          lastModified: stat.mtime,
        });
      }
    }
  }

  return results;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appDirectory = path.join(process.cwd(), "app");
  const pages = getPages(appDirectory);

  return pages.map(({ urlPath, lastModified }) => {
    // Construct the full URL (ensure root has a trailing slash or is just BASE_URL)
    const url = urlPath ? `${BASE_URL}/${urlPath}` : `${BASE_URL}/`;

    // Determine priority and change frequency based on the route depth/type
    let priority = 0.8;
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";

    if (urlPath === "") {
      // Home page
      priority = 1.0;
      changeFrequency = "daily";
    } else if (urlPath.startsWith("blogs/")) {
      // Blog posts
      priority = 0.64;
      changeFrequency = "monthly";
    } else if (urlPath.startsWith("services/") || urlPath.startsWith("clients/")) {
      // Services or clients detail pages
      priority = 0.8;
      changeFrequency = "weekly";
    } else {
      // Top level pages (about-us, contact, privacy-policy, etc.)
      priority = 0.8;
      changeFrequency = "weekly";
    }

    return {
      url,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
