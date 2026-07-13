import MeetPager from "../../../components/MeetPager";

export default function CompetitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MeetPager />
      {children}
    </>
  );
}
