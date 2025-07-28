// Schema.org JSON-LD structured data utilities

export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  image: string;
  description: string;
  jobTitle?: string[];
  nationality?: string;
  birthPlace?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  alumniOf?: string[];
  award?: string[];
  memberOf?: OrganizationSchema[];
  hasOccupation?: OccupationSchema[];
  inLanguage?: string;
}

export interface OccupationSchema {
  "@context"?: "https://schema.org";
  "@type": "Occupation";
  name: string;
  occupationalCategory?: string;
  responsibilities?: string[];
  skills?: string[];
}

export interface SportsEventSchema {
  "@context": "https://schema.org";
  "@type": "SportsEvent";
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: PlaceSchema;
  organizer?: OrganizationSchema;
  sport: string;
  competitor?: PersonSchema[];
  eventStatus:
    | "EventScheduled"
    | "EventMovedOnline"
    | "EventPostponed"
    | "EventCancelled";
  award?: string[];
  participant?: PersonSchema[];
  inLanguage?: string;
}

export interface PlaceSchema {
  "@context"?: "https://schema.org";
  "@type": "Place" | "SportsActivityLocation";
  name: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  };
  geo?: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
}

export interface OrganizationSchema {
  "@context"?: "https://schema.org";
  "@type": "Organization" | "SportsOrganization";
  name: string;
  url?: string;
  logo?: string;
  address?: {
    "@type": "PostalAddress";
    addressCountry: string;
  };
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: PersonSchema;
  inLanguage: string[];
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

// Environment variables for consistent data
const getBaseData = () => ({
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://daniel.mitka.cz",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio",
  authorName: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  facebookProfile:
    process.env.NEXT_PUBLIC_FACEBOOK_PROFILE ||
    "https://facebook.com/daniel.mitka",
  instagramProfile:
    process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE ||
    "https://instagram.com/daniel.mitka",
});

// Enhanced localized data with more SEO keywords
function getLocalizedData(locale: string = "en") {
  const data = {
    en: {
      description:
        "Daniel Mitka, a 16-year-old elite swimmer from SK Motorlet Praha, has achieved remarkable success in Czech swimming. Czech Youth Swimming Champion, lifesaving world vice-champion, and full-stack developer. Record holder in mixed 4x50m medley relay. Competing internationally in Australia, Slovakia, and Czech Republic. Expert in freestyle, breaststroke, individual medley, and lifesaving techniques.",
      jobTitle: [
        "Professional Athlete",
        "Full-Stack Developer",
        "Competitive Swimmer",
        "Czech Swimming Champion",
        "Lifesaving World Vice-Champion",
      ],
      occupation: {
        athlete: {
          name: "Professional Athlete",
          category: "Sports and Recreation",
          skills: [
            "Swimming",
            "Lifesaving",
            "Water Safety",
            "Competitive Swimming",
            "Freestyle Technique",
            "Breaststroke",
            "Individual Medley",
            "Sprint Swimming",
          ],
          experience: "6+ years competitive swimming experience",
          achievements: [
            "Czech Youth Swimming Champion",
            "National Record Holder",
            "International Competition Experience",
          ],
        },
        developer: {
          name: "Full-Stack Developer",
          category: "Technology",
          skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Web Development",
            "Full-Stack Development",
          ],
          experience: "3+ years development experience",
        },
      },
      awards: [
        "Czech Youth Swimming Champion",
        "Silver Medal - Lifesaving World Championships Australia 2024",
        "National Record Holder - Mixed 4x50m Medley Relay",
        "Multiple National Championship Finals",
        "International Competition Medalist",
        "SK Motorlet Praha Top Performer",
      ],
      knowsAbout: [
        "Competitive Swimming",
        "Lifesaving Techniques",
        "Water Safety",
        "Sprint Swimming Training",
        "Individual Medley Technique",
        "Swimming Stroke Mechanics",
        "Competition Strategy",
        "Athletic Performance",
        "Web Development",
        "JavaScript Programming",
        "React Development",
        "Full-Stack Programming",
      ],
      organizations: {
        swimming: "Czech Swimming Federation",
        club: "SK Motorlet Praha",
        lifesaving: "Czech Lifesaving Association",
        international: "European Swimming Federation",
      },
    },
    cs: {
      description:
        "Daniel Mitka, 16letý elitní plavec ze SK Motorlet Praha, dosáhl pozoruhodných úspěchů v českém plavání. Český juniorský mistr v plavání, světový vicemistr v záchranářství a full-stack vývojář. Držitel rekordu ve smíšené štafetě 4x50m polohově. Soutěží mezinárodně v Austrálii, na Slovensku a v České republice. Expert ve volném způsobu, prsu, polohovém závodě a záchranářských technikách.",
      jobTitle: [
        "Profesionální sportovec",
        "Full-Stack vývojář",
        "Závodní plavec",
        "Český mistr v plavání",
        "Světový vicemistr v záchranářství",
      ],
      occupation: {
        athlete: {
          name: "Profesionální sportovec",
          category: "Sport a rekreace",
          skills: [
            "Plavání",
            "Záchranářství",
            "Bezpečnost na vodě",
            "Závodní plavání",
            "Technika volného způsobu",
            "Prsa",
            "Polohový závod",
            "Sprintové plavání",
          ],
          experience: "6+ let zkušeností v závodním plavání",
          achievements: [
            "Český juniorský mistr v plavání",
            "Držitel národního rekordu",
            "Mezinárodní závodní zkušenosti",
          ],
        },
        developer: {
          name: "Full-Stack vývojář",
          category: "Technologie",
          skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Webový vývoj",
            "Full-Stack vývoj",
          ],
          experience: "3+ let vývojářských zkušeností",
        },
      },
      awards: [
        "Český juniorský mistr v plavání",
        "Stříbrná medaile - Mistrovství světa v záchranářství Austrálie 2024",
        "Držitel národního rekordu - Smíšená štafeta 4x50m polohově",
        "Několikanásobný finalista mistrovství republiky",
        "Medailista mezinárodních soutěží",
        "Nejlepší výkon SK Motorlet Praha",
      ],
      knowsAbout: [
        "Závodní plavání",
        "Záchranářské techniky",
        "Bezpečnost na vodě",
        "Trénink sprintového plavání",
        "Technika polohového závodu",
        "Mechanika plaveckých způsobů",
        "Závodní strategie",
        "Sportovní výkon",
        "Webový vývoj",
        "JavaScript programování",
        "React vývoj",
        "Full-Stack programování",
      ],
      organizations: {
        swimming: "Český svaz plavání",
        club: "SK Motorlet Praha",
        lifesaving: "Český záchranářský svaz",
        international: "Evropská plavecká federace",
      },
    },
  };

  return data[locale as keyof typeof data] || data.en;
}

// Main person/athlete schema with locale support
export function generatePersonSchema(locale: string = "en"): PersonSchema {
  const {
    siteUrl,
    authorName,
    twitterHandle,
    facebookProfile,
    instagramProfile,
  } = getBaseData();
  const localizedData = getLocalizedData(locale);

  // Define occupations using proper Schema.org Occupation type
  const athleteOccupation: OccupationSchema = {
    "@type": "Occupation",
    name: localizedData.occupation.athlete.name,
    occupationalCategory: localizedData.occupation.athlete.category,
    responsibilities: [], // No specific responsibilities for this simplified schema
    skills: localizedData.occupation.athlete.skills,
  };

  const developerOccupation: OccupationSchema = {
    "@type": "Occupation",
    name: localizedData.occupation.developer.name,
    occupationalCategory: localizedData.occupation.developer.category,
    responsibilities: [], // No specific responsibilities for this simplified schema
    skills: localizedData.occupation.developer.skills,
  };

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: authorName,
    url: siteUrl,
    image: `${siteUrl}/profilovaFotka.jpg`,
    description: localizedData.description,
    jobTitle: localizedData.jobTitle,
    nationality: "Czech Republic",
    birthPlace: "Czech Republic",
    hasOccupation: [athleteOccupation, developerOccupation],
    award: localizedData.awards,
    sameAs: [
      twitterHandle.startsWith("@")
        ? `https://twitter.com/${twitterHandle.substring(1)}`
        : twitterHandle,
      facebookProfile,
      instagramProfile,
      `${siteUrl}/cs`,
      `${siteUrl}/en`,
    ],
    knowsAbout: localizedData.knowsAbout,
    memberOf: [
      {
        "@type": "SportsOrganization",
        name: localizedData.organizations.swimming,
        address: {
          "@type": "PostalAddress",
          addressCountry: "Czech Republic",
        },
      },
      {
        "@type": "SportsOrganization",
        name: localizedData.organizations.lifesaving,
        address: {
          "@type": "PostalAddress",
          addressCountry: "Czech Republic",
        },
      },
      {
        "@type": "SportsOrganization",
        name: localizedData.organizations.international,
        address: {
          "@type": "PostalAddress",
          addressCountry: "Europe",
        },
      },
    ],
    inLanguage: locale === "cs" ? "cs-CZ" : "en-US",
  };
}

// Website schema with locale support
export function generateWebSiteSchema(locale: string = "en"): WebSiteSchema {
  const { siteUrl, siteName } = getBaseData();

  const descriptions = {
    en: "Official portfolio of Daniel Mitka - Czech Youth Swimming Champion, lifesaving medalist, and full-stack developer. Explore swimming achievements, competition highlights, and development projects.",
    cs: "Oficiální portfolio Daniela Mitky - český juniorský mistr v plavání, medailista v záchranářství a full-stack vývojář. Prozkoumejte plavecké úspěchy, závodní vrcholy a vývojové projekty.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.en,
    publisher: generatePersonSchema(locale),
    inLanguage: ["en", "cs"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// Competition event schema generator with locale support
export function generateSportsEventSchema(
  eventData: {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    location: {
      name: string;
      city: string;
      country: string;
      region?: string;
      coordinates?: { lat: number; lng: number };
    };
    sport: string;
    awards?: string[];
    level: "International" | "National" | "Regional";
    organizer?: string;
  },
  locale: string = "en"
): SportsEventSchema {
  const location: PlaceSchema = {
    "@type": "SportsActivityLocation",
    name: eventData.location.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: eventData.location.city,
      addressRegion: eventData.location.region,
      addressCountry: eventData.location.country,
    },
  };

  if (eventData.location.coordinates) {
    location.geo = {
      "@type": "GeoCoordinates",
      latitude: eventData.location.coordinates.lat,
      longitude: eventData.location.coordinates.lng,
    };
  }

  const organizer: OrganizationSchema | undefined = eventData.organizer
    ? {
        "@type": "SportsOrganization",
        name: eventData.organizer,
        address: {
          "@type": "PostalAddress",
          addressCountry: eventData.location.country,
        },
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: eventData.name,
    description: eventData.description,
    startDate: eventData.startDate,
    endDate: eventData.endDate,
    location,
    organizer,
    sport: eventData.sport,
    eventStatus: "EventScheduled",
    award: eventData.awards,
    participant: [generatePersonSchema(locale)],
    competitor: [generatePersonSchema(locale)],
    inLanguage: locale === "cs" ? "cs-CZ" : "en-US",
  };
}

// Add FAQ Schema for better search visibility
export function generateFAQSchema(locale: string = "en") {
  const faqData = {
    en: {
      questions: [
        {
          question: "Who is Daniel Mitka?",
          answer:
            "Daniel Mitka is a Czech Youth Swimming Champion and lifesaving world vice-champion from SK Motorlet Praha. He's also a full-stack developer with expertise in modern web technologies.",
        },
        {
          question: "What are Daniel Mitka's swimming achievements?",
          answer:
            "Daniel is a Czech Youth Swimming Champion, silver medalist at the 2024 Lifesaving World Championships in Australia, and national record holder in the mixed 4x50m medley relay.",
        },
        {
          question: "What swimming events does Daniel compete in?",
          answer:
            "Daniel competes in freestyle, breaststroke, individual medley events, and lifesaving competitions at national and international levels.",
        },
        {
          question: "Where does Daniel Mitka train?",
          answer:
            "Daniel trains with SK Motorlet Praha, one of the leading swimming clubs in Czech Republic.",
        },
      ],
    },
    cs: {
      questions: [
        {
          question: "Kdo je Daniel Mitka?",
          answer:
            "Daniel Mitka je český juniorský mistr v plavání a světový vicemistr v záchranářství ze SK Motorlet Praha. Je také full-stack vývojář s expertízou v moderních webových technologiích.",
        },
        {
          question: "Jaké jsou plavecké úspěchy Daniela Mitky?",
          answer:
            "Daniel je český juniorský mistr v plavání, stříbrný medailista z MS v záchranářství 2024 v Austrálii a držitel národního rekordu ve smíšené štafetě 4x50m polohově.",
        },
        {
          question: "V jakých disciplínách Daniel závodí?",
          answer:
            "Daniel závodí ve volném způsobu, prsu, polohových závodech a záchranářských soutěžích na národní i mezinárodní úrovni.",
        },
        {
          question: "Kde Daniel Mitka trénuje?",
          answer:
            "Daniel trénuje v SK Motorlet Praha, jednom z předních plaveckých klubů v České republice.",
        },
      ],
    },
  };

  const data = faqData[locale as keyof typeof faqData] || faqData.en;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Helper to create JSON-LD script tag
export function createJsonLd(
  schema:
    | PersonSchema
    | SportsEventSchema
    | WebSiteSchema
    | Record<string, unknown>
): string {
  return JSON.stringify(schema, null, 2);
}

// Multiple schemas for a page
export function generateMultipleSchemas(
  ...schemas: (
    | PersonSchema
    | SportsEventSchema
    | WebSiteSchema
    | Record<string, unknown>
  )[]
): string {
  if (schemas.length === 1) {
    return createJsonLd(schemas[0]);
  }

  return createJsonLd({
    "@context": "https://schema.org",
    "@graph": schemas,
  });
}
