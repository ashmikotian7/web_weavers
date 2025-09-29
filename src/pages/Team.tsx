import Navigation from "@/components/layout/Navigation";
import TeamSection from "@/components/sections/TeamSection";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <TeamSection />
      </main>
    </div>
  );
};

export default Team;