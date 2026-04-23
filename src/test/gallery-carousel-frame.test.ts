import { describe, expect, it } from "vitest";

import { galleryFrameClassName } from "@/components/GallerySection";

describe("Gallery carousel frame", () => {
  it("keeps frame regressions out of the carousel guardrail", () => {
    const className = galleryFrameClassName(
      "group relative border border-gold shadow-lg rounded-xl p-4 sm:p-6 bg-card touch-pan-y",
    );

    expect(className).toContain("group");
    expect(className).toContain("relative");
    expect(className).toContain("touch-pan-y");
    expect(className).not.toMatch(/(^|\s)([^\s]*:)?border/);
    expect(className).not.toMatch(/(^|\s)([^\s]*:)?shadow/);
    expect(className).not.toMatch(/(^|\s)([^\s]*:)?rounded/);
    expect(className).not.toMatch(/(^|\s)([^\s]*:)?p[trblxy]?-/);
  });
});
