import type { Metadata } from "next";
import MeetShowcase from "../../../../components/MeetShowcase";
import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";
import {
  getAllMeetImages,
  localizeMediaText,
  summerJuniorNationalsMedia,
} from "../../../../data/featuredMeetMedia";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildMeetMetadata({
    locale,
    slug: "speedo-junior-nationals-2026",
    title: "Speedo Junior Nationals 2026 — Daniel Mitka | TOPS 3rd",
    description:
      "Daniel Mitka helped the University of Denver Hilltoppers place 3rd in the combined team standings at the 2026 Speedo Junior National Championships, alongside two C finals and three relays.",
    keywords: [
      "Daniel Mitka",
      "Speedo Junior Nationals 2026",
      "USA Swimming",
      "Irvine swimming",
      "Junior Nationals",
      "University of Denver Hilltoppers",
      "long course swimming",
      "Daniel Mitka USA swimming",
      "Summer Junior Nationals race videos",
      "TOPS third combined team standings",
      "200m freestyle 1:52.61",
      "200m individual medley 2:06.11",
    ],
    images: getAllMeetImages(summerJuniorNationalsMedia).map(
      (image) => image.src,
    ),
    publishedTime: "2026-08-07",
    modifiedTime: "2026-08-11",
  });
}

export default async function SpeedoJuniorNationals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <>
      <MeetJsonLd
        id="speedo-junior-nationals-2026"
        locale={locale}
        name="Speedo Junior National Championships 2026"
        description="USA Swimming's summer junior national championships in Irvine, California. Daniel Mitka reached two C finals, raced three relays and helped the University of Denver Hilltoppers finish 3rd in the combined team standings."
        startDate="2026-08-03"
        endDate="2026-08-07"
        venue="William Woollett Jr. Aquatics Center"
        city="Irvine"
        country="United States"
        region="California"
        level="National"
        awards={[
          "3rd — Combined Team Standings",
          "C final — 200m Freestyle",
          "C final — 200m Individual Medley",
          "10th — 4x200m Freestyle Relay",
        ]}
        images={getAllMeetImages(summerJuniorNationalsMedia).map((image) => ({
          src: image.src,
          caption: localizeMediaText(image.caption, locale),
        }))}
        videos={summerJuniorNationalsMedia.videos.map((video) => ({
          id: video.id,
          title: localizeMediaText(video.title, locale),
          uploadDate: video.uploadDate,
        }))}
      />
      <MeetShowcase
        badge={cs ? "Juniorské mistrovství USA" : "USA Swimming Junior Nationals"}
        title={
          cs
            ? "Speedo Junior Nationals 2026"
            : "Speedo Junior National Championships 2026"
        }
        subtitle={
          cs
            ? "Dlouhý bazén (50 m) · University of Denver Hilltoppers"
            : "Long course (50m) · University of Denver Hilltoppers"
        }
        location={cs ? "Irvine, Kalifornie" : "Irvine, California"}
        dateLabel={cs ? "3.–7. srpna 2026" : "August 3–7, 2026"}
        heroImage="/summerJuniors/hero-team.jpg"
        intro={
          cs
            ? "Jeden z největších závodů Danielovy kariéry: vrcholné letní juniorské mistrovství USA Swimming ve William Woollett Jr. Aquatics Center. Daniel postoupil do finále C na 200 m volný způsob i 200 m polohový závod, nastoupil ve třech štafetách a University of Denver Hilltoppers obsadili výjimečné 3. místo v kombinovaném pořadí týmů."
            : "One of the biggest meets of Daniel's career: USA Swimming's premier summer junior championship at the William Woollett Jr. Aquatics Center. Daniel reached the C finals of both the 200m freestyle and 200m individual medley, raced on three relays, and helped the University of Denver Hilltoppers earn an exceptional 3rd-place finish in the combined team standings."
        }
        stats={[
          {
            value: "3.",
            label: cs ? "místo · týmy celkem" : "place · combined team",
            medal: true,
            medalTone: "bronze",
          },
          { value: "2", label: cs ? "finále C" : "C finals" },
          { value: "3", label: cs ? "štafety" : "relays" },
          { value: "6", label: cs ? "individuálních startů" : "individual starts" },
        ]}
        results={[
          {
            event: cs ? "200 m volný způsob" : "200m Freestyle",
            finalTime: "1:53.27",
            placement: cs ? "7. místo · finále C" : "7th · C final",
            progression: [
              { stage: cs ? "Předchozí OR" : "Previous PB", time: "1:55.31" },
              { stage: cs ? "Rozplavby" : "Heats", time: "1:52.61", pb: true },
              { stage: cs ? "Finále C" : "C final", time: "1:53.27" },
            ],
            splits: [
              { distance: "50", time: "26.64" },
              { distance: "100", time: "55.32" },
              { distance: "150", time: "1:24.21" },
              { distance: "200", time: "1:53.27" },
            ],
          },
          {
            event: cs ? "200 m polohový závod" : "200m Individual Medley",
            finalTime: "2:06.11",
            placement: cs ? "5. místo · finále C" : "5th · C final",
            progression: [
              { stage: cs ? "Osobní rekord" : "Personal best", time: "2:06.02" },
              { stage: cs ? "Rozplavby" : "Heats", time: "2:06.38" },
              { stage: cs ? "Finále C" : "C final", time: "2:06.11" },
            ],
            splits: [
              { distance: "50", time: "27.28", label: cs ? "M" : "FLY" },
              { distance: "100", time: "1:00.46", label: cs ? "Z" : "BK" },
              { distance: "150", time: "1:36.25", label: cs ? "P" : "BR" },
              { distance: "200", time: "2:06.11", label: cs ? "VZ" : "FR" },
            ],
          },
          {
            event: cs ? "100 m prsa" : "100m Breaststroke",
            finalTime: "1:04.70",
            placement: cs ? "dělené 57. místo · rozplavby" : "T-57th · heats",
            progression: [
              { stage: cs ? "Předchozí OR" : "Previous PB", time: "1:05.89" },
              { stage: cs ? "Rozplavby" : "Heats", time: "1:04.70", pb: true },
            ],
            splits: [
              { distance: "50", time: "30.76" },
              { distance: "100", time: "1:04.70" },
            ],
          },
          {
            event: cs ? "50 m prsa" : "50m Breaststroke",
            finalTime: "29.90",
            placement: cs ? "dělené 86. místo · rozplavby" : "T-86th · heats",
            progression: [
              { stage: cs ? "Předchozí OR" : "Previous PB", time: "30.79" },
              { stage: cs ? "Rozplavby" : "Heats", time: "29.90", pb: true },
            ],
          },
          {
            event: cs ? "100 m volný způsob" : "100m Freestyle",
            finalTime: "52.80",
            placement: cs ? "138. místo · rozplavby" : "138th · heats",
            progression: [
              { stage: cs ? "Předchozí OR" : "Previous PB", time: "52.81" },
              { stage: cs ? "Rozplavby" : "Heats", time: "52.80", pb: true },
            ],
            splits: [
              { distance: "50", time: "25.99" },
              { distance: "100", time: "52.80" },
            ],
          },
          {
            group: "relay",
            event: cs ? "4×50 m volný způsob" : "4x50m Freestyle Relay",
            finalTime: "1:36.88",
            placement: cs
              ? "27. místo · Danielův 2. úsek 23.85"
              : "27th · Daniel's 2nd leg 23.85",
          },
          {
            group: "relay",
            event: cs ? "4×200 m volný způsob" : "4x200m Freestyle Relay",
            finalTime: "7:38.85",
            placement: cs
              ? "10. místo · Danielův 2. úsek 1:54.50"
              : "10th · Daniel's 2nd leg 1:54.50",
          },
          {
            group: "relay",
            event: cs ? "4×100 m volný způsob" : "4x100m Freestyle Relay",
            finalTime: "3:31.08",
            placement: cs
              ? "21. místo · Danielův 2. úsek 53.63"
              : "21st · Daniel's 2nd leg 53.63",
          },
        ]}
        highlights={
          cs
            ? [
                "University of Denver Hilltoppers obsadili 3. místo v kombinovaném pořadí týmů.",
                "Dvě finále C v jednom z nejsilnějších juniorských mítinků v USA.",
                "Nejrychlejší čas na 200 m volný způsob přišel v rozplavbách — 1:52.61.",
                "Zlepšení na 200 m polohový závod z 2:06.38 v rozplavbách na 2:06.11 ve finále C.",
                "10. místo štafety TOPS na 4×200 m volný způsob; Daniel zaplaval druhý úsek za 1:54.50.",
              ]
            : [
                "The University of Denver Hilltoppers finished 3rd in the combined team standings.",
                "Two C finals at one of the strongest junior meets in the United States.",
                "His fastest 200m freestyle came in the heats — 1:52.61.",
                "Improved the 200m individual medley from 2:06.38 in the heats to 2:06.11 in the C final.",
                "10th with TOPS in the 4x200m freestyle relay; Daniel split 1:54.50 on the second leg.",
              ]
        }
        gallery={[
          {
            src: "/summerJuniors/IMG_6851-final.jpg",
            caption: cs
              ? "Závěrečný večer Summer Junior Nationals"
              : "Final night at Summer Junior Nationals",
          },
          {
            src: "/summerJuniors/final-night.jpg",
            caption: cs ? "Tým TOPS v Irvine" : "TOPS in Irvine",
            objectPosition: "50% 42%",
          },
          {
            src: "/summerJuniors/poolside.jpg",
            caption: cs ? "U bazénu ve Woollett" : "Poolside at Woollett",
            objectPosition: "50% 20%",
          },
          {
            src: "/summerJuniors/IMG_6745.JPG",
            caption: cs
              ? "William Woollett Jr. Aquatics Center"
              : "William Woollett Jr. Aquatics Center",
            objectPosition: "50% 35%",
          },
        ]}
        videos={[
          {
            type: "youtube",
            id: "JcnfONfOEWg",
            title: cs
              ? "200 m volný způsob — rozplavby · 1:52.61"
              : "200m Freestyle — Heats · 1:52.61",
          },
          {
            type: "youtube",
            id: "LCkHm4541nQ",
            title: cs
              ? "200 m volný způsob — finále C · 1:53.27"
              : "200m Freestyle — C Final · 1:53.27",
          },
          {
            type: "youtube",
            id: "9vSgTmvF1WU",
            title: cs
              ? "200 m polohový závod — rozplavby · 2:06.38"
              : "200m Individual Medley — Heats · 2:06.38",
          },
          {
            type: "youtube",
            id: "FlGoNhS8pYc",
            title: cs
              ? "200 m polohový závod — finále C · 2:06.11"
              : "200m Individual Medley — C Final · 2:06.11",
          },
          {
            type: "youtube",
            id: "zgI-TC3amV8",
            title: cs
              ? "50 m prsa — rozplavby · 29.90"
              : "50m Breaststroke — Heats · 29.90",
          },
          {
            type: "youtube",
            id: "XtyTTB0EZ5w",
            title: cs
              ? "100 m prsa — rozplavby · 1:04.70"
              : "100m Breaststroke — Heats · 1:04.70",
          },
          {
            type: "youtube",
            id: "nsMJWnsP5IE",
            title: cs
              ? "100 m volný způsob — rozplavby · 52.80"
              : "100m Freestyle — Heats · 52.80",
          },
        ]}
        links={[
          {
            label: cs ? "Oficiální výsledky OMEGA" : "Official OMEGA results",
            url: "https://www.omegatiming.com/2026/speedo-junior-national-champs-live-results",
          },
          {
            label: cs ? "Danielovy časy na SwimCloud" : "Daniel's times on SwimCloud",
            url: "https://www.swimcloud.com/swimmer/1828936/",
          },
        ]}
      />
    </>
  );
}
