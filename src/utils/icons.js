// Devicon ships the real brand marks (e.g. the actual Java coffee cup, not a
// substitute) for most languages/frameworks/tools — used instead of
// Simple Icons, which omits several of these under their own names.
const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const SLUG_OVERRIDES = {
  "node.js": "nodejs",
  "next.js": "nextjs",
  "vue.js": "vuejs",
  "c++": "cplusplus",
  "c#": "csharp",
  "tailwind css": "tailwindcss",
  "spring boot": "spring",
  ".net": "dotnetcore",
  "postgres": "postgresql",
};

// A handful of brand marks ship with no official color (pure black/white),
// which disappears against this site's dark background — invert those so
// they stay visible. Verify a new slug's fill before adding it here.
const MONOCHROME = new Set(["express", "nextjs", "rust", "github"]);

export function techIcon(name) {
  const key = name.trim().toLowerCase();
  const slug = SLUG_OVERRIDES[key] ?? key.replace(/[^a-z0-9]/g, "");
  return {
    url: `${DEVICON_BASE}/${slug}/${slug}-original.svg`,
    invert: MONOCHROME.has(slug),
  };
}
