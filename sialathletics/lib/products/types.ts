// Shared shapes for the per-category product pages (padel, pickleball, and
// the newer beach/jersey/bag lines). One definition so every category page
// and the components that render them agree on the data shape.

export type Model = {
  /** Internal mould/SKU reference. Never rendered, never published — it is
   *  only a stable key and a way to trace a card back to the catalogue. */
  code: string;
  /** Pickleball designs carry a public colourway name; padel moulds do not. */
  name?: string;
  image: string;
  alt: string;
  specs: [string, string][];
};

export type Family = {
  id: string;
  title: string;
  tagline: string;
  blurb: string;
  models: Model[];
};

export type OptionGroup = { title: string; items: string[] };
