import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Radio, 
  Monitor, 
  Heart, 
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Wifi,
  Code,
  Lightbulb,
  UserCheck
} from "lucide-react";

const SocietiesSection = () => {
  const societies = [
    {
      id: "communication-society",
      name: "Communication Society",
      acronym: "ComSoc",
      icon: Radio,
      color: "from-blue-500 to-blue-700",
      description: "Advancing the theory and application of communications and information processing",
      focus: ["Wireless Communications", "Signal Processing", "Networking", "5G/6G Technologies"],
      members: 45,
      chair: "Alex Rivera",
      established: "2020",
      upcomingEvents: [
        { title: "5G Technology Workshop", date: "2024-02-15", location: "Room 201" },
        { title: "Signal Processing Seminar", date: "2024-02-28", location: "Auditorium" }
      ],
      recentAchievements: [
        "Best Paper Award at IEEE ICC 2024",
        "Successful 5G Demo at Tech Fair"
      ]
    },
    {
      id: "computer-society",
      name: "Computer Society",
      acronym: "CS",
      icon: Monitor,
      color: "from-green-500 to-green-700",
      description: "Leading the computing industry through innovative research and professional development",
      focus: ["Software Engineering", "AI/ML", "Cybersecurity", "Cloud Computing"],
      members: 60,
      chair: "Emma Wilson",
      established: "2019",
      upcomingEvents: [
        { title: "AI/ML Bootcamp", date: "2024-03-10", location: "Lab 301" },
        { title: "Cybersecurity Conference", date: "2024-03-25", location: "Main Hall" }
      ],
      recentAchievements: [
        "1st Place in National Hackathon",
        "Published 8 Research Papers"
      ]
    },
    {
      id: "sight",
      name: "Special Interest Group on Humanitarian Technology",
      acronym: "SIGHT",
      icon: Heart,
      color: "from-red-500 to-red-700",
      description: "Leveraging technology for humanitarian purposes and sustainable development",
      focus: ["Humanitarian Tech", "Sustainable Development", "Community Outreach", "Social Impact"],
      members: 35,
      chair: "Priya Patel",
      established: "2021",
      upcomingEvents: [
        { title: "Tech for Good Summit", date: "2024-04-05", location: "Conference Center" },
        { title: "Rural IoT Implementation", date: "2024-04-20", location: "Field Work" }
      ],
      recentAchievements: [
        "Implemented Smart Village Project",
        "500+ Students Reached in STEM Outreach"
      ]
    },
    {
      id: "wie",
      name: "Women in Engineering",
      acronym: "WIE",
      icon: Users,
      color: "from-purple-500 to-purple-700",
      description: "Inspiring and empowering women in electrical and computer engineering fields",
      focus: ["Women Empowerment", "Mentorship", "Career Development", "Diversity & Inclusion"],
      members: 40,
      chair: "Sarah Chen",
      established: "2020",
      upcomingEvents: [
        { title: "Women in Tech Panel", date: "2024-03-08", location: "Auditorium" },
        { title: "Mentorship Program Launch", date: "2024-03-22", location: "Student Center" }
      ],
      recentAchievements: [
        "50% Increase in Female Enrollment",
        "Successful Mentorship Program"
      ]
    }
  ];

  return (
    <section id="societies" className="py-24 relative overflow-hidden bg-background/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-hero rounded-full opacity-10 animate-pulse-3d" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-lg opacity-20 rotate-45 animate-rotate-3d" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              IEEE <span className="gradient-text-ieee">Societies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized technical societies fostering innovation and professional 
              development in specific domains of electrical and computer engineering.
            </p>
          </div>

          {/* Societies Grid */}
          <div className="space-y-12">
            {societies.map((society, index) => (
              <Card 
                key={society.id}
                className="card-3d group bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-ieee-glow transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Left Panel - Society Info */}
                    <div className="lg:col-span-2 p-8 space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${society.color} shadow-ieee-md`}>
                            <society.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text-ieee transition-all duration-300">
                              {society.name}
                            </h3>
                            <p className="text-sm font-medium text-primary">
                              {society.acronym} • Established {society.established}
                            </p>
                          </div>
                        </div>
                        <Badge className={`bg-gradient-to-r ${society.color} text-white border-none`}>
                          {society.members} Members
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {society.description}
                      </p>

                      {/* Focus Areas */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Focus Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {society.focus.map((area) => (
                            <Badge 
                              key={area}
                              variant="outline" 
                              className="text-xs px-3 py-1"
                            >
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Recent Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Recent Achievements
                        </h4>
                        <ul className="space-y-2">
                          {society.recentAchievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Chair Info */}
                      <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                        <UserCheck className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Society Chair: {society.chair}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Leading {society.members} active members
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Panel - Events & Actions */}
                    <div className="bg-muted/30 p-8 space-y-6">
                      {/* Upcoming Events */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                          Upcoming Events
                        </h4>
                        <div className="space-y-3">
                          {society.upcomingEvents.map((event, idx) => (
                            <div 
                              key={idx}
                              className="bg-background/50 rounded-lg p-4 space-y-2 hover:bg-background/70 transition-colors"
                            >
                              <h5 className="font-medium text-foreground text-sm">
                                {event.title}
                              </h5>
                              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <MapPin className="w-3 h-3" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <Button className="w-full btn-ieee-primary text-sm group">
                          <span>Join Society</span>
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" className="w-full text-sm">
                          View All Events
                        </Button>
                        <Button variant="ghost" className="w-full text-sm">
                          Contact Chair
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-ieee-lg max-w-3xl mx-auto">
              <div className="flex justify-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-ieee-md">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 shadow-ieee-md">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-red-700 shadow-ieee-md">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 shadow-ieee-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold gradient-text-ieee">
                  Find Your Technical Community
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join any of our IEEE societies to connect with like-minded peers, 
                  advance your technical skills, and contribute to cutting-edge research 
                  in your field of interest.
                </p>
                <Button className="btn-ieee-primary">
                  Explore All Societies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;