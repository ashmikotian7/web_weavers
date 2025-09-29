import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Users, 
  Globe,
  ArrowRight 
} from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing boundaries in technology and engineering solutions",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Eye,
      title: "Excellence", 
      description: "Maintaining highest standards in all our endeavors",
      color: "from-accent to-accent-hover"
    },
    {
      icon: Heart,
      title: "Collaboration",
      description: "Building strong networks and meaningful partnerships",
      color: "from-ieee-teal to-ieee-cyan"
    },
    {
      icon: Lightbulb,
      title: "Learning",
      description: "Continuous growth through knowledge sharing",
      color: "from-ieee-blue to-ieee-blue-light"
    }
  ];

  const stats = [
    { number: "2019", label: "Established", suffix: "" },
    { number: "500", label: "Members", suffix: "+" },
    { number: "50", label: "Events", suffix: "+" },
    { number: "15", label: "Awards", suffix: "+" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-hero rounded-full opacity-10 animate-pulse-3d" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-lg opacity-20 rotate-45 animate-rotate-3d" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text-ieee">IEEE Student Branch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a dynamic community of engineering students passionate about 
              advancing technology for humanity. Our branch serves as a platform for 
              innovation, learning, and professional growth.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To foster technological innovation and professional development 
                  among students while contributing to the advancement of electrical 
                  and computer engineering fields. We strive to bridge the gap between 
                  academic learning and industry applications.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading student organization that empowers the next 
                  generation of engineers and technologists to solve global challenges 
                  through innovative solutions and collaborative research.
                </p>
              </div>

              <Button className="btn-ieee-primary group">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="card-3d bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-ieee-glow transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="space-y-3">
                      <p className="text-3xl md:text-4xl font-bold gradient-text-ieee">
                        {stat.number}{stat.suffix}
                      </p>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-12">
            <div className="text-center animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-4">
                Our <span className="gradient-text-ieee">Core Values</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide our actions and shape our community culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="card-3d group bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-ieee-glow transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} shadow-ieee-md`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;