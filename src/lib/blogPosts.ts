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
    date: "2025-01-05",
    content:
      "I arrived in the USA with excitement and a little bit of fear. The training schedule is intense but the facilities are amazing. The biggest surprise was how supportive and team-oriented everyone is.",
  },
  {
    slug: "training-and-life-balance",
    title: "Balancing training and life",
    excerpt:
      "How I organize swimming, school, and coding projects without burning out.",
    date: "2025-02-12",
    content:
      "Between early morning swims and late-night homework, balance is everything. I set daily priorities, protect my sleep, and keep coding projects fun and bite-sized.",
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
      date: "2025-01-05",
      content:
        "Do USA jsem přijel s nadšením i malou nervozitou. Tréninky jsou intenzivní, ale zázemí je skvělé. Největším překvapením je podpora a týmová atmosféra.",
    },
    {
      slug: "training-and-life-balance",
      title: "Balanc mezi tréninkem a životem",
      excerpt: "Jak zvládám plavání, školu a programování, aniž bych vyhořel.",
      date: "2025-02-12",
      content:
        "Mezi ranními tréninky a večerními úkoly je rovnováha klíčová. Každý den si určím priority, hlídám spánek a udržuji programování zábavné a po menších částech.",
    },
  ],
};
