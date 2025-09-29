import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import SocietiesSection from "@/components/sections/SocietiesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection /> 
        <AchievementsSection />
        <PublicationsSection />
        <SocietiesSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">IEEE</span>
                  </div>
                  <div>
                    <h3 className="font-bold gradient-text-ieee">IEEE Student Branch</h3>
                    <p className="text-xs text-muted-foreground">Innovation • Excellence • Leadership</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Advancing technology for humanity through collaborative learning and innovation.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</a></li>
                  <li><a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">Achievements</a></li>
                  <li><a href="#publications" className="text-muted-foreground hover:text-primary transition-colors">Publications</a></li>
                </ul>
              </div>

              {/* Societies */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Societies</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#communication-society" className="text-muted-foreground hover:text-primary transition-colors">Communication Society</a></li>
                  <li><a href="#computer-society" className="text-muted-foreground hover:text-primary transition-colors">Computer Society</a></li>
                  <li><a href="#sight" className="text-muted-foreground hover:text-primary transition-colors">SIGHT</a></li>
                  <li><a href="#wie" className="text-muted-foreground hover:text-primary transition-colors">WIE</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>ieee@university.edu</p>
                  <p>+1 (555) 123-4567</p>
                  <p>Engineering Building, Room 301</p>
                  <p>University Campus</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 IEEE Student Branch. All rights reserved. Built with ❤️ for innovation.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
