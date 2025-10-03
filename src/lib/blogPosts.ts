export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  content?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-impressions-usa",
    title: "First impressions from the USA",
    excerpt:
      "Landing in the USA, culture shocks, training differences, and first emotions.",
    date: "2025-08-08T12:00:00.000Z",
    content: "Coming soon... ",
  },
  {
    slug: "training-and-life-balance",
    title: "Balancing training and life",
    excerpt:
      "How I organize swimming, school, and coding projects without burning out.",
    date: "2025-09-01T12:00:00.000Z",
    content: "Coming soon... ",
  },
];

export const blogPostsByLocale: Record<string, BlogPost[]> = {
  en: blogPosts,
  cs: [
    {
      slug: "first-impressions-usa",
      title: "První dojmy z USA",
      excerpt:
        "Přílet do USA, kulturní šoky, rozdíly v tréninku a první emoce.",
      date: "2025-08-08T12:00:00.000Z",
      content: "Coming soon... ",
    },
    {
      slug: "training-and-life-balance",
      title: "Balanc mezi tréninkem a životem",
      excerpt: "Jak zvládám plavání, školu a programování, aniž bych vyhořel.",
      date: "2025-09-01T12:00:00.000Z",
      content: "Coming soon... ",
    },
  ],
};
