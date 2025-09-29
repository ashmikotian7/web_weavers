import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Award,
  Users,
  Crown,
  Star
} from "lucide-react";

const TeamSection = () => {
  const leadership = [
    {
      name: "Sarah Chen",
      position: "Branch Chair",
      department: "Electrical Engineering",
      year: "Senior",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      bio: "Leading innovative projects in renewable energy systems",
      skills: ["Leadership", "Power Systems", "Project Management"],
      social: {
        email: "sarah.chen@ieee.org",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Johnson",
      position: "Vice Chair",
      department: "Computer Engineering", 
      year: "Senior",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Specializing in AI/ML applications for smart cities",
      skills: ["Machine Learning", "IoT", "Data Science"],
      social: {
        email: "marcus.j@ieee.org",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Priya Patel",
      position: "Secretary",
      department: "Software Engineering",
      year: "Junior",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Passionate about cybersecurity and blockchain technology",
      skills: ["Cybersecurity", "Blockchain", "Web Development"],
      social: {
        email: "priya.patel@ieee.org",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      position: "Treasurer",
      department: "Electrical Engineering",
      year: "Junior", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Working on sustainable energy solutions and smart grids",
      skills: ["Financial Management", "Smart Grids", "Analytics"],
      social: {
        email: "david.kim@ieee.org",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const committees = [
    {
      name: "Technical Committee",
      chair: "Alex Rivera",
      members: 12,
      icon: Award,
      color: "from-primary to-primary-glow",
      description: "Organizing technical workshops and research projects"
    },
    {
      name: "Events Committee", 
      chair: "Emma Wilson",
      members: 15,
      icon: Users,
      color: "from-accent to-accent-hover",
      description: "Planning conferences, seminars, and networking events"
    },
    {
      name: "Publications Committee",
      chair: "Ryan Zhang",
      members: 8,
      icon: Star,
      color: "from-ieee-teal to-ieee-cyan",
      description: "Managing research publications and documentation"
    }
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-32 left-10 w-40 h-40 bg-gradient-hero rounded-full opacity-5 animate-pulse-3d" />
      <div className="absolute bottom-32 right-10 w-28 h-28 bg-accent/10 rounded-lg opacity-15 rotate-12 animate-rotate-3d" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text-ieee">Leadership Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated students driving innovation and fostering community growth 
              through collaborative leadership and technical excellence.
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {leadership.map((member, index) => (
              <Card 
                key={member.name}
                className="card-3d group bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-ieee-glow transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Position Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-hero text-white border-none shadow-ieee-md">
                        <Crown className="w-3 h-3 mr-1" />
                        {member.position}
                      </Badge>
                    </div>

                    {/* Social Links - Appear on Hover */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="p-2 h-8 w-8">
                        <Mail className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="secondary" className="p-2 h-8 w-8">
                        <Linkedin className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="secondary" className="p-2 h-8 w-8">
                        <Github className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {member.department} • {member.year}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="text-xs px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Committee Section */}
          <div className="space-y-12">
            <div className="text-center animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-4">
                Our <span className="gradient-text-ieee">Committees</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized teams working together to achieve our mission
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {committees.map((committee, index) => (
                <Card 
                  key={committee.name}
                  className="card-3d group bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-ieee-glow transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${committee.color} shadow-ieee-md`}>
                      <committee.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        {committee.name}
                      </h4>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-primary">
                          Chair: {committee.chair}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {committee.members} Members
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {committee.description}
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

export default TeamSection;