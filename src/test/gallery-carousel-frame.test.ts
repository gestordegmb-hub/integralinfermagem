import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const gallerySource = readFileSync(resolve(process.cwd(), "src/components/GallerySection.tsx"), "utf8");

const carouselContainerClass = gallerySource.match(/id="gallery-carousel"[\s\S]*?className="([^"]+)"/)?.[1] ?? "";
const imageViewportClass = gallerySource.match(/<div className="([^"]*aspect-\[4\/5\][^"]*)"/)?.[1] ?? "";
const forbiddenFrameTokens = [
  "bg-card",
  "bg-muted",
  "border",
  "rounded",
  "shadow",
  "p-",
  "sm:p-",
  "md:p-",
  "lg:p-",
  "xl:p-",
  "2xl:p-",
];

describe("Gallery carousel frame", () => {
  it("keeps the carousel image area free of visible frame classes across breakpoints", () => {
    const visibleFrameClasses = `${carouselContainerClass} ${imageViewportClass}`
      .split(/\s+/)
      .filter((token) => forbiddenFrameTokens.some((forbidden) => token.includes(forbidden)));

    expect(visibleFrameClasses).toEqual([]);
  });
});
