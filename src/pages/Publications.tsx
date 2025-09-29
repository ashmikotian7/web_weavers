import Navigation from "@/components/layout/Navigation";
import PublicationsSection from "@/components/sections/PublicationsSection";

const Publications = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <PublicationsSection />
      </main>
    </div>
  );
};

export default Publications;