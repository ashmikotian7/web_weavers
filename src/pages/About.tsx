import Navigation from "@/components/layout/Navigation";
import AboutSection from "@/components/sections/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <AboutSection />
      </main>
    </div>
  );
};

export default About;