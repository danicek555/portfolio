import type { Metadata } from "next";
import MeetShowcase from "../../../../components/MeetShowcase";
import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildMeetMetadata({
    locale,
    slug: "speedo-junior-nationals-2026",
    title: "Speedo Junior National Championships 2026 — Daniel Mitka",
    description:
      "Daniel Mitka reached the C finals of the 200m freestyle and 200m individual medley at the 2026 Speedo Junior National Championships in Irvine, California.",
    keywords: [
      "Daniel Mitka",
      "Speedo Junior Nationals 2026",
      "USA Swimming",
      "Irvine swimming",
      "Junior Nationals",
      "University of Denver Hilltoppers",
      "long course swimming",
    ],
    image: "/juniors2026/woollett.jpg",
    publishedTime: "2026-08-07",
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
        description="USA Swimming's summer junior national championships in Irvine, California. Daniel Mitka reached two C finals and helped the University of Denver Hilltoppers place 10th in the 4x200m freestyle relay."
        startDate="2026-08-03"
        endDate="2026-08-07"
        venue="William Woollett Jr. Aquatics Center"
        city="Irvine"
        country="United States"
        region="California"
        level="National"
        awards={[
          "C final — 200m Freestyle",
          "C final — 200m Individual Medley",
          "10th — 4x200m Freestyle Relay",
        ]}
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
        heroImage="/juniors2026/woollett.jpg"
        intro={
          cs
            ? "Jeden z největších závodů Danielovy kariéry: vrcholné letní juniorské mistrovství USA Swimming ve William Woollett Jr. Aquatics Center. Daniel postoupil do finále C na 200 m volný způsob i 200 m polohový závod a pomohl štafetě University of Denver Hilltoppers na 4×200 m volný způsob k 10. místu."
            : "One of the biggest meets of Daniel's career: USA Swimming's premier summer junior championship at the William Woollett Jr. Aquatics Center. Daniel reached the C finals of both the 200m freestyle and 200m individual medley and helped the University of Denver Hilltoppers place 10th in the 4x200m freestyle relay."
        }
        stats={[
          { value: "2", label: cs ? "finále C" : "C finals" },
          {
            value: "10.",
            label: cs ? "místo · štafeta 4×200 m" : "place · 4x200m relay",
          },
          { value: "6", label: cs ? "individuálních startů" : "individual starts" },
          { value: "50 m", label: cs ? "bazén v Irvine" : "pool in Irvine" },
        ]}
        results={[
          {
            event: cs ? "200 m volný způsob" : "200m Freestyle",
            finalTime: "1:53.27",
            placement: cs ? "7. místo · finále C" : "7th · C final",
            progression: [
              { stage: cs ? "Rozplavby" : "Heats", time: "1:52.61" },
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
            event: cs ? "4×200 m volný způsob" : "4x200m Freestyle Relay",
            finalTime: "7:38.85",
            placement: cs
              ? "10. místo · Danielův 2. úsek 1:54.50"
              : "10th · Daniel's 2nd leg 1:54.50",
          },
          {
            event: cs ? "100 m prsa" : "100m Breaststroke",
            finalTime: "1:04.70",
            placement: cs ? "57. místo · rozplavby" : "T-57th · heats",
            splits: [
              { distance: "50", time: "30.76" },
              { distance: "100", time: "1:04.70" },
            ],
          },
          {
            event: cs ? "50 m prsa" : "50m Breaststroke",
            finalTime: "29.90",
            placement: cs ? "86. místo · rozplavby" : "T-86th · heats",
          },
          {
            event: cs ? "100 m volný způsob" : "100m Freestyle",
            finalTime: "52.80",
            placement: cs ? "138. místo · rozplavby" : "138th · heats",
            splits: [
              { distance: "50", time: "25.99" },
              { distance: "100", time: "52.80" },
            ],
          },
        ]}
        highlights={
          cs
            ? [
                "Dvě finále C v jednom z nejsilnějších juniorských mítinků v USA.",
                "Nejrychlejší čas na 200 m volný způsob přišel v rozplavbách — 1:52.61.",
                "Zlepšení na 200 m polohový závod z 2:06.38 v rozplavbách na 2:06.11 ve finále C.",
                "10. místo štafety TOPS na 4×200 m volný způsob; Daniel zaplaval druhý úsek za 1:54.50.",
              ]
            : [
                "Two C finals at one of the strongest junior meets in the United States.",
                "His fastest 200m freestyle came in the heats — 1:52.61.",
                "Improved the 200m individual medley from 2:06.38 in the heats to 2:06.11 in the C final.",
                "10th with TOPS in the 4x200m freestyle relay; Daniel split 1:54.50 on the second leg.",
              ]
        }
        gallery={[]}
        videos={[]}
        links={[
          {
            label: cs ? "Oficiální výsledky OMEGA" : "Official OMEGA results",
            url: "https://www.omegatiming.com/2026/speedo-junior-national-champs-live-results",
          },
        ]}
      />
    </>
  );
}
