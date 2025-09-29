import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Globe, LogIn } from "lucide-react";
import heroImage from "@/assets/ieee-hero-bg.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/layout/footer";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = Math.random() * 4 + 2 + "px";
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";
      particles.appendChild(particle);
    }

    return () => {
      if (particles) {
        particles.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-mesh">
          <img
            src={heroImage}
            alt="IEEE Student Branch Hero"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        </div>

        {/* Floating Particles */}
        <div ref={particlesRef} className="particles-bg" />

        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-hero rounded-full opacity-20 animate-pulse-3d float-animation" />
          <div className="absolute top-40 right-32 w-12 h-12 bg-accent/30 rounded-lg opacity-30 animate-rotate-3d float-delayed" />
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-ieee-teal/20 rounded-full opacity-25 animate-pulse-3d" />
          <div className="absolute bottom-40 right-20 w-14 h-14 bg-gradient-primary rounded-lg opacity-20 animate-rotate-3d float-animation" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading */}
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text-ieee">IEEE Student Branch</span>
                <br />
                <span className="text-foreground">Innovation Hub</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Advancing technology for humanity through collaborative learning,
                cutting-edge research, and professional development in electrical
                and computer engineering.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-right">
              <Button
                className="btn-ieee-primary text-lg px-8 py-6 group"
                onClick={() => navigate("/login")}
              >
                <span>Login</span>
                <LogIn className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="btn-ieee-outline text-lg px-8 py-6"
              >
                Explore Achievements
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              {[
                {
                  icon: Users,
                  value: "500+",
                  label: "Active Members",
                  gradient: "from-primary to-primary-glow",
                },
                {
                  icon: Zap,
                  value: "150+",
                  label: "Projects Completed",
                  gradient: "from-accent to-accent-hover",
                },
                {
                  icon: Globe,
                  value: "50+",
                  label: "Global Collaborations",
                  gradient: "from-ieee-teal to-ieee-cyan",
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-3d bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-ieee-md hover:shadow-ieee-glow transition-all duration-500">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl font-bold gradient-text-ieee">
                        {stat.value}
                      </p>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-hero rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default HeroSection;
