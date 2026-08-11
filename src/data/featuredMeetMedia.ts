export type LocalizedMediaText = {
  en: string;
  cs: string;
};

export type SearchableMeetImage = {
  src: string;
  caption: LocalizedMediaText;
  objectPosition?: string;
  contain?: boolean;
};

export type SearchableMeetVideo = {
  id: string;
  title: LocalizedMediaText;
  uploadDate: string;
};

export type SearchableMeetMedia = {
  hero: SearchableMeetImage;
  gallery: SearchableMeetImage[];
  videos: SearchableMeetVideo[];
};

export const summerJuniorNationalsMedia: SearchableMeetMedia = {
  hero: {
    src: "/summerJuniors/hero-team.jpg",
    caption: {
      en: "University of Denver Hilltoppers at the 2026 Speedo Junior National Championships",
      cs: "University of Denver Hilltoppers na Speedo Junior Nationals 2026",
    },
  },
  gallery: [
    {
      src: "/summerJuniors/IMG_6851-final.jpg",
      caption: {
        en: "Final night at Summer Junior Nationals",
        cs: "Závěrečný večer Summer Junior Nationals",
      },
    },
    {
      src: "/summerJuniors/final-night.jpg",
      caption: {
        en: "University of Denver Hilltoppers team in Irvine",
        cs: "Tým University of Denver Hilltoppers v Irvine",
      },
      objectPosition: "50% 42%",
    },
    {
      src: "/summerJuniors/poolside.jpg",
      caption: {
        en: "Poolside at the William Woollett Jr. Aquatics Center",
        cs: "U bazénu ve William Woollett Jr. Aquatics Center",
      },
      objectPosition: "50% 20%",
    },
    {
      src: "/summerJuniors/IMG_6745.JPG",
      caption: {
        en: "William Woollett Jr. Aquatics Center during Summer Junior Nationals",
        cs: "William Woollett Jr. Aquatics Center během Summer Junior Nationals",
      },
      objectPosition: "50% 35%",
    },
  ],
  videos: [
    {
      id: "JcnfONfOEWg",
      title: {
        en: "200m Freestyle — Heats · 1:52.61",
        cs: "200 m volný způsob — rozplavby · 1:52.61",
      },
      uploadDate: "2026-08-11T10:23:12-07:00",
    },
    {
      id: "LCkHm4541nQ",
      title: {
        en: "200m Freestyle — C Final · 1:53.27",
        cs: "200 m volný způsob — finále C · 1:53.27",
      },
      uploadDate: "2026-08-11T10:23:05-07:00",
    },
    {
      id: "9vSgTmvF1WU",
      title: {
        en: "200m Individual Medley — Heats · 2:06.38",
        cs: "200 m polohový závod — rozplavby · 2:06.38",
      },
      uploadDate: "2026-08-11T10:15:02-07:00",
    },
    {
      id: "FlGoNhS8pYc",
      title: {
        en: "200m Individual Medley — C Final · 2:06.11",
        cs: "200 m polohový závod — finále C · 2:06.11",
      },
      uploadDate: "2026-08-11T10:17:47-07:00",
    },
    {
      id: "zgI-TC3amV8",
      title: {
        en: "50m Breaststroke — Heats · 29.90",
        cs: "50 m prsa — rozplavby · 29.90",
      },
      uploadDate: "2026-08-11T10:11:40-07:00",
    },
    {
      id: "XtyTTB0EZ5w",
      title: {
        en: "100m Breaststroke — Heats · 1:04.70",
        cs: "100 m prsa — rozplavby · 1:04.70",
      },
      uploadDate: "2026-08-11T10:23:53-07:00",
    },
    {
      id: "nsMJWnsP5IE",
      title: {
        en: "100m Freestyle — Heats · 52.80",
        cs: "100 m volný způsob — rozplavby · 52.80",
      },
      uploadDate: "2026-08-11T10:23:28-07:00",
    },
  ],
};

export const czechJuniorNationalsMedia: SearchableMeetMedia = {
  hero: {
    src: "/mcrJunior2026/venue-usti.jpg",
    caption: {
      en: "Pool in Ústí nad Labem during the 2026 Czech Junior & U22 Nationals",
      cs: "Bazén v Ústí nad Labem během MČR juniorů a U22 2026",
    },
  },
  gallery: [
    {
      src: "/mcrJunior2026/diplom.jpg",
      caption: {
        en: "Diploma for 2nd place in the 200m individual medley — 2:06.50",
        cs: "Diplom za 2. místo na 200 m polohový závod — 2:06.50",
      },
      contain: true,
    },
    {
      src: "/mcrJunior2026/venue-usti.jpg",
      caption: {
        en: "Pool in Ústí nad Labem during the championships",
        cs: "Bazén v Ústí nad Labem během MČR juniorů 2026",
      },
    },
  ],
  videos: [
    {
      id: "jPIshaAJ_Js",
      title: {
        en: "200m Freestyle — Heats · 1:56.69",
        cs: "200 m volný způsob — rozplavby · 1:56.69",
      },
      uploadDate: "2026-08-11T10:20:34-07:00",
    },
    {
      id: "OCidzb56T7s",
      title: {
        en: "200m Freestyle — Final · 1:55.31",
        cs: "200 m volný způsob — finále · 1:55.31",
      },
      uploadDate: "2026-08-11T10:21:34-07:00",
    },
    {
      id: "Yciz7T2Kn4Q",
      title: {
        en: "200m Individual Medley — Heats · 2:06.02",
        cs: "200 m polohový závod — rozplavby · 2:06.02",
      },
      uploadDate: "2026-08-11T10:19:28-07:00",
    },
    {
      id: "i14UYp1AQ_A",
      title: {
        en: "200m Individual Medley — Final · 2:06.50",
        cs: "200 m polohový závod — finále · 2:06.50",
      },
      uploadDate: "2026-08-11T10:44:25-07:00",
    },
    {
      id: "uLCH3kLe9I8",
      title: {
        en: "100m Freestyle — Heats · 52.53",
        cs: "100 m volný způsob — rozplavby · 52.53",
      },
      uploadDate: "2026-08-11T10:23:48-07:00",
    },
    {
      id: "SGIqMn2dZOo",
      title: {
        en: "100m Freestyle — Final · 52.68",
        cs: "100 m volný způsob — finále · 52.68",
      },
      uploadDate: "2026-08-11T10:23:32-07:00",
    },
    {
      id: "02jTnglCjjE",
      title: {
        en: "100m Breaststroke — Heats · 1:06.99",
        cs: "100 m prsa — rozplavby · 1:06.99",
      },
      uploadDate: "2026-08-11T10:24:11-07:00",
    },
    {
      id: "Ubkfy8-u4Pc",
      title: {
        en: "100m Breaststroke — Final · 1:07.91",
        cs: "100 m prsa — finále · 1:07.91",
      },
      uploadDate: "2026-08-11T10:23:59-07:00",
    },
    {
      id: "kCn50pwjSs4",
      title: {
        en: "50m Breaststroke — Heats · 30.20",
        cs: "50 m prsa — rozplavby · 30.20",
      },
      uploadDate: "2026-08-11T10:45:08-07:00",
    },
    {
      id: "yicmpyYzqhQ",
      title: {
        en: "50m Breaststroke — Final · 30.85",
        cs: "50 m prsa — finále · 30.85",
      },
      uploadDate: "2026-08-11T10:14:14-07:00",
    },
    {
      id: "GPlOMU7n3Sg",
      title: {
        en: "50m Freestyle — Heats · 24.37",
        cs: "50 m volný způsob — rozplavby · 24.37",
      },
      uploadDate: "2026-08-11T10:24:17-07:00",
    },
    {
      id: "m_yWsMSfbs8",
      title: {
        en: "200m Breaststroke — Heats · 2:30.58",
        cs: "200 m prsa — rozplavby · 2:30.58",
      },
      uploadDate: "2026-08-11T10:23:18-07:00",
    },
  ],
};

export function localizeMediaText(
  text: LocalizedMediaText,
  locale: string,
): string {
  return locale === "cs" ? text.cs : text.en;
}

export function getAllMeetImages(media: SearchableMeetMedia) {
  const seen = new Set<string>();
  return [media.hero, ...media.gallery].filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}
