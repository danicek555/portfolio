import type { Metadata } from "next";
import MeetShowcase from "../../../../components/MeetShowcase";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Four Corners Speedo Sectionals 2026 - Daniel Mitka",
  description:
    "Seven personal bests and five top-8 finishes at the 2026 Four Corners Speedo Sectionals in Carmel, Indiana, racing for the University of Denver Hilltoppers.",
  alternates: {
    canonical: `${siteUrl}/competitions/speedo-sectionals-2026`,
  },
};

export default async function SpeedoSectionals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetShowcase
      badge={cs ? "Americká sezóna" : "USA Racing Debut Season"}
      title="Four Corners Speedo Sectionals"
      subtitle={
        cs
          ? "Krátký kurz (25 y) · Hilltoppers"
          : "Short course yards · Hilltoppers"
      }
      location={cs ? "Carmel, Indiana, USA" : "Carmel, Indiana, USA"}
      dateLabel={cs ? "26.–29. března 2026" : "March 26–29, 2026"}
      heroImage="/sectionals2026/celebration.jpg"
      intro={
        cs
          ? "Four Corners Speedo Sectionals v Carmelu v Indianě svedly dohromady nejlepší klubové plavce regionu. Daniel v barvách University of Denver Hilltoppers absolvoval čtyřdenní program v rychlém yardovém bazénu — a odjel se sedmi osobními rekordy."
          : "The Four Corners Speedo Sectionals in Carmel, Indiana, brought together top club swimmers from across the region. Racing in the University of Denver Hilltoppers colors, Daniel took on a four-day program in a fast short-course-yards pool — and left with seven personal bests."
      }
      stats={[
        { value: "7", label: cs ? "osobních rekordů" : "personal bests" },
        {
          value: "5×",
          label: cs ? "umístění v top 8" : "top 8 finishes",
          medal: true,
        },
        { value: "4", label: cs ? "dny závodění" : "days of racing" },
      ]}
      results={[
        {
          event: cs ? "100 y prsa" : "100Y Breaststroke",
          finalTime: "55.29",
          placement: cs
            ? "5. místo ve finále · limit na Junior Nationals"
            : "5th in the final · Junior Nationals cut",
          pb: true,
          progression: [
            { stage: cs ? "Rozplavby" : "Prelims", time: "54.98", pb: true },
            { stage: cs ? "Finále" : "Finals", time: "55.29" },
          ],
        },
        {
          event: cs ? "200 y prsa" : "200Y Breaststroke",
          finalTime: "1:58.55",
          placement: cs
            ? "4. místo ve finále · limit na Junior Nationals"
            : "4th in the final · Junior Nationals cut",
          pb: true,
          progression: [
            { stage: cs ? "Rozplavby" : "Prelims", time: "2:00.17" },
            { stage: cs ? "Finále" : "Finals", time: "1:58.55", pb: true },
          ],
        },
        {
          event: cs ? "200 y polohový závod" : "200Y Individual Medley",
          finalTime: "1:47.43",
          placement: cs
            ? "6. místo ve finále · limit na Junior Nationals"
            : "6th in the final · Junior Nationals cut",
          pb: true,
          progression: [
            { stage: cs ? "Rozplavby" : "Prelims", time: "1:48.35" },
            { stage: cs ? "Finále" : "Finals", time: "1:47.43", pb: true },
          ],
        },
        {
          event: cs ? "400 y polohový závod" : "400Y Individual Medley",
          finalTime: "3:52.71",
          placement: cs
            ? "8. místo ve finále · limit na Winter Juniors"
            : "8th in the final · Winter Juniors cut",
          pb: true,
          progression: [
            { stage: cs ? "Rozplavby" : "Prelims", time: "3:53.65" },
            { stage: cs ? "Finále" : "Finals", time: "3:52.71", pb: true },
          ],
        },
        {
          event: cs ? "50 y volný způsob" : "50Y Freestyle",
          finalTime: "20.65",
          placement: cs ? "8. místo ve finále" : "8th in the final",
          pb: true,
          progression: [
            { stage: cs ? "Rozplavby" : "Prelims", time: "20.74" },
            { stage: cs ? "Finále" : "Finals", time: "20.65", pb: true },
          ],
        },
        {
          event: cs
            ? "4×100 polohová štafeta — prsařský úsek"
            : "400 Medley Relay — breaststroke leg",
          finalTime: "54.95",
          placement: cs ? "3. místo" : "3rd place",
        },
        {
          event: cs
            ? "4×200 volný způsob — rozjezd"
            : "800 Free Relay — leadoff",
          finalTime: "1:39.49",
          placement: cs ? "4. místo" : "4th place",
          pb: true,
        },
        {
          event: cs ? "4×50 volný způsob — úsek" : "200 Free Relay — split",
          finalTime: "20.72",
          placement: cs ? "6. místo" : "6th place",
        },
        {
          event: cs
            ? "4×100 volný způsob — rozjezd"
            : "400 Free Relay — leadoff",
          finalTime: "45.84",
          placement: cs ? "8. místo" : "8th place",
          pb: true,
        },
        {
          event: cs
            ? "4×50 polohová štafeta — motýlkový úsek"
            : "200 Medley Relay — butterfly leg",
          finalTime: "22.00",
          placement: cs ? "8. místo" : "8th place",
        },
      ]}
      highlights={
        cs
          ? [
              "Sedm osobních rekordů a pět umístění v top 8 — a Hilltoppers si z Carmelu odvezli týmové trofeje.",
              "Limity na Junior Nationals na 100 y prsa, 200 y prsa a 200 y polohový závod; limit na Winter Juniors na 400 y polohový závod.",
              "Závod byl důležitou zastávkou na cestě k NCAA: výkony pod tlakem, dvoufázové závodění od rána do večera a souboje bok po boku s plavci mířícími na špičkové univerzitní programy.",
            ]
          : [
              "Seven personal bests and five top-8 finishes — and the Hilltoppers left Carmel with the team trophies.",
              "Junior Nationals cuts in the 100Y breast, 200Y breast and 200Y IM; a Winter Juniors cut in the 400Y IM.",
              "The meet was a key checkpoint on the road to the NCAA: pressure execution, morning-to-night doubles and racing wall-to-wall with swimmers headed to top college programs.",
            ]
      }
      gallery={[
        {
          src: "/sectionals2026/pre-race.jpg",
          caption: cs
            ? "Soustředění chvíli před startem"
            : "Locked in moments before the race",
        },
        {
          src: "/sectionals2026/team-trophy.jpg",
          caption: cs
            ? "Hilltoppers s trofejemi pro šampiony"
            : "Hilltoppers with the championship hardware",
        },
        {
          src: "/sectionals2026/tops-duo.jpg",
          caption: cs ? "S týmovým parťákem" : "With a teammate",
        },
        {
          src: "/sectionals2026/tops-team.jpg",
          caption: cs
            ? "Tým University of Denver Hilltoppers"
            : "The University of Denver Hilltoppers squad",
        },
        {
          src: "/sectionals2026/tops_picture.jpg",
          caption: cs ? "Momentka s týmem" : "A moment with the team",
        },
        {
          src: "/sectionals2026/team-photo.jpg",
          caption: cs ? "Týmové foto na závodech" : "Team photo at the meet",
        },
        {
          src: "/sectionals2026/venue-pool.jpg",
          caption: cs
            ? "Bazén v Carmelu, Indiana"
            : "The pool in Carmel, Indiana",
        },
      ]}
      videos={[]}
      links={[
        {
          label: cs ? "Výsledky na SwimCloud" : "Results on SwimCloud",
          url: "https://www.swimcloud.com/swimmer/1828936/meets/",
        },
      ]}
    />
  );
}
