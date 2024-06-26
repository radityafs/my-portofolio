import WorkExperience from "@/components/About/WorkExperience";
import AboutSection from "@/components/About/About";
import Achievement from "@/components/About/Achievement";
import Stack from "@/components/About/Stack";

export default function About() {
  return (
    <main className="overflow-x-hidden">
      <AboutSection />
      <WorkExperience />
      <Achievement />
      <Stack />
    </main>
  );
}
