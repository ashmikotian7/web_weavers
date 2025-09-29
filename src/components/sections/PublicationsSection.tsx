import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Download,
  Eye,
  Calendar,
  User,
  Quote
} from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Machine Learning Approaches for Smart Grid Optimization",
      authors: ["Sarah Chen", "Marcus Johnson", "Dr. Robert Lee"],
      journal: "IEEE Transactions on Smart Grid",
      year: "2024",
      type: "Journal Article",
      impact: "High Impact",
      abstract: "This paper presents novel machine learning algorithms for optimizing energy distribution in smart grid systems, achieving 25% improvement in efficiency.",
      keywords: ["Smart Grid", "Machine Learning", "Energy Optimization"],
      citations: 23,
      downloads: 450,
      doi: "10.1109/TSG.2024.123456"
    },
    {
      title: "Cybersecurity Framework for IoT Networks in Industrial Settings",
      authors: ["Priya Patel", "David Kim", "Dr. Maria Rodriguez"],
      journal: "IEEE Network",
      year: "2024", 
      type: "Research Paper",
      impact: "Medium Impact",
      abstract: "A comprehensive security framework addressing vulnerabilities in Industrial IoT networks with emphasis on real-time threat detection.",
      keywords: ["Cybersecurity", "IoT", "Industrial Networks"],
      citations: 15,
      downloads: 320,
      doi: "10.1109/MNET.2024.234567"
    },
    {
      title: "5G Network Optimization Using AI-Driven Resource Allocation",
      authors: ["Alex Rivera", "Emma Wilson", "Dr. James Park"],
      journal: "IEEE Communications Letters",
      year: "2023",
      type: "Conference Paper",
      impact: "High Impact",
      abstract: "Novel approach to 5G resource allocation using reinforcement learning, demonstrating significant improvements in network performance.",
      keywords: ["5G", "AI", "Resource Allocation"],
      citations: 42,
      downloads: 680,
      doi: "10.1109/LCOMM.2023.345678"
    },
    {
      title: "Sustainable Energy Systems: A Machine Learning Perspective",
      authors: ["Ryan Zhang", "Lisa Wong", "Dr. Michael Chen"],
      journal: "IEEE Access",
      year: "2023",
      type: "Review Article",
      impact: "Medium Impact",
      abstract: "Comprehensive review of machine learning applications in sustainable energy systems with focus on renewable energy integration.",
      keywords: ["Renewable Energy", "Machine Learning", "Sustainability"],
      citations: 31,
      downloads: 520,
      doi: "10.1109/ACCESS.2023.456789"
    },
    {
      title: "Blockchain-Based Identity Management for Distributed Systems",
      authors: ["Jennifer Liu", "Kevin Brown", "Dr. Anna Singh"],
      journal: "IEEE Security & Privacy",
      year: "2023",
      type: "Technical Paper",
      impact: "High Impact",
      abstract: "Innovative blockchain approach to identity management in distributed computing environments with enhanced privacy protection.",
      keywords: ["Blockchain", "Identity Management", "Distributed Systems"],
      citations: 28,
      downloads: 390,
      doi: "10.1109/MSEC.2023.567890"
    },
    {
      title: "Edge Computing Architecture for Real-Time IoT Applications",
      authors: ["Tom Anderson", "Sarah Mitchell", "Dr. Paul Davis"],
      journal: "IEEE Internet of Things Journal",
      year: "2022",
      type: "Technical Paper",
      impact: "High Impact",
      abstract: "Novel edge computing architecture optimized for latency-critical IoT applications in smart city environments.",
      keywords: ["Edge Computing", "IoT", "Smart Cities"],
      citations: 67,
      downloads: 840,
      doi: "10.1109/JIOT.2022.678901"
    }
  ];

  const stats = [
    { label: "Total Publications", value: "25+", icon: FileText },
    { label: "Total Citations", value: "350+", icon: Quote },
    { label: "H-Index", value: "12", icon: BookOpen },
    { label: "Downloads", value: "5K+", icon: Download }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High Impact": return "from-green-500 to-green-700";
      case "Medium Impact": return "from-yellow-500 to-yellow-700";
      default: return "from-blue-500 to-blue-700";
    }
  };

  return (
    <section id="publications" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-32 left-10 w-40 h-40 bg-gradient-hero rounded-full opacity-5 animate-pulse-3d" />
      <div className="absolute bottom-32 right-10 w-28 h-28 bg-accent/10 rounded-lg opacity-15 rotate-12 animate-rotate-3d" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research <span className="gradient-text-ieee">Publications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Contributing to the advancement of electrical and computer engineering 
              through rigorous research and peer-reviewed publications.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="card-3d bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-ieee-glow transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <div className="space-y-1">
                    <p className="text-2xl font-bold gradient-text-ieee">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Publications Grid */}
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <Card 
                key={publication.title}
                className="card-3d group bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-ieee-glow transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-4">
                      {/* Title and Type */}
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:gradient-text-ieee transition-all duration-300 leading-tight">
                          {publication.title}
                        </h3>
                        <Badge 
                          variant="secondary" 
                          className={`shrink-0 bg-gradient-to-r ${getImpactColor(publication.impact)} text-white border-none`}
                        >
                          {publication.impact}
                        </Badge>
                      </div>

                      {/* Authors and Journal */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            {publication.authors.join(", ")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="font-medium text-primary">
                              {publication.journal}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {publication.year}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Abstract */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {publication.abstract}
                      </p>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2">
                        {publication.keywords.map((keyword) => (
                          <Badge 
                            key={keyword}
                            variant="outline" 
                            className="text-xs px-2 py-1"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Metrics */}
                      <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Publication Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center">
                            <p className="text-lg font-bold text-primary">
                              {publication.citations}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Citations
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-accent">
                              {publication.downloads}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Downloads
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-2">
                        <Button className="w-full btn-ieee-primary text-sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Full Paper
                        </Button>
                        <Button variant="outline" className="w-full text-sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="ghost" className="w-full text-sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          DOI: {publication.doi.split('.').pop()}
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
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-ieee-lg max-w-2xl mx-auto">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold gradient-text-ieee">
                  Contribute to Research
                </h3>
                <p className="text-muted-foreground">
                  Join our research teams and contribute to cutting-edge publications 
                  in electrical and computer engineering.
                </p>
                <Button className="btn-ieee-primary">
                  Get Involved in Research
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;