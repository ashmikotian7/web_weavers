import Navigation from "@/components/layout/Navigation";
import AchievementsSection from "@/components/sections/AchievementsSection";

const Achievements = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <AchievementsSection />
      </main>
    </div>
  );
};

export default Achievements;