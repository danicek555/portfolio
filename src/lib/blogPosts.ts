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
