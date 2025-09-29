import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Medal, 
  Award, 
  Star,
  Calendar,
  MapPin,
  Users
} from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Best Student Branch Award",
      year: "2024",
      organization: "IEEE Region 10",
      category: "Excellence",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      description: "Recognized for outstanding contributions to student development and technical innovation",
      impact: "Regional Recognition",
      participants: "Entire Branch"
    },
    {
      title: "Innovation Challenge Winner",
      year: "2024", 
      organization: "IEEE Hackathon",
      category: "Technology",
      icon: Award,
      color: "from-primary to-primary-glow",
      description: "First place in AI-powered smart city solutions competition",
      impact: "1st Place",
      participants: "Team of 4"
    },
    {
      title: "Research Publication Excellence",
      year: "2023",
      organization: "IEEE Transactions",
      category: "Research",
      icon: Star,
      color: "from-accent to-accent-hover",
      description: "Multiple papers published in prestigious IEEE journals",
      impact: "5 Publications",
      participants: "Research Team"
    },
    {
      title: "Community Impact Award",
      year: "2023",
      organization: "Local Government",
      category: "Service",
      icon: Medal,
      color: "from-ieee-teal to-ieee-cyan",
      description: "Outstanding service in STEM education outreach programs",
      impact: "500+ Students Reached",
      participants: "Volunteer Team"
    },
    {
      title: "Outstanding Student Branch",
      year: "2022",
      organization: "IEEE Computer Society",
      category: "Excellence",
      icon: Trophy,
      color: "from-purple-500 to-purple-700",
      description: "Excellence in organizing technical events and member engagement",
      impact: "Society Level",
      participants: "All Members"
    },
    {
      title: "Best Technical Project",
      year: "2022",
      organization: "National Competition",
      category: "Innovation",
      icon: Award,
      color: "from-green-500 to-green-700",
      description: "Innovative IoT solution for environmental monitoring",
      impact: "National Winner",
      participants: "Project Team"
    }
  ];

  const timeline = [
    { year: "2024", count: 3, highlight: true },
    { year: "2023", count: 8, highlight: false },
    { year: "2022", count: 5, highlight: false },
    { year: "2021", count: 4, highlight: false },
    { year: "2020", count: 2, highlight: false }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-hero rounded-full opacity-10 animate-pulse-3d" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-lg opacity-20 rotate-45 animate-rotate-3d" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text-ieee">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Celebrating excellence in innovation, research, and community impact. 
              Our accomplishments reflect our commitment to advancing technology for humanity.
            </p>
          </div>

          {/* Timeline Overview */}
          <div className="flex justify-center mb-16 animate-fade-in-scale">
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-ieee-lg">
              <h3 className="text-xl font-semibold text-center mb-6 gradient-text-ieee">
                Achievement Timeline
              </h3>
              <div className="flex items-center space-x-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="text-center relative">
                    {/* Connector Line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50" />
                    )}
                    
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      item.highlight 
                        ? 'bg-gradient-hero shadow-ieee-glow' 
                        : 'bg-gradient-to-r from-muted to-secondary border border-border'
                    }`}>
                      <span className={`font-bold text-sm ${
                        item.highlight ? 'text-white' : 'text-foreground'
                      }`}>
                        {item.count}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="card-3d group relative bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-ieee-glow transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Award Ribbon */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute transform rotate-45 bg-gradient-to-r ${achievement.color} text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center shadow-lg`}>
                    {achievement.year}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-ieee-md`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.category}
                    </Badge>
                  </div>

                  {/* Title and Organization */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:gradient-text-ieee transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {achievement.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {achievement.impact}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {achievement.participants}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-ieee-lg inline-flex flex-col items-center space-y-4">
              <Trophy className="w-12 h-12 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold gradient-text-ieee">
                  Join Our Success Story
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Be part of our journey towards excellence and innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;