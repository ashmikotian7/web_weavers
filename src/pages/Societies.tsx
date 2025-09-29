import Navigation from "@/components/layout/Navigation";
import SocietiesSection from "@/components/sections/SocietiesSection";

const Societies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <SocietiesSection />
      </main>
    </div>
  );
};

export default Societies;