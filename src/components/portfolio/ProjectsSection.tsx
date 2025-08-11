import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Shield, Zap, Globe } from "lucide-react";

const projects = [
  // {
  //   title: "Banking Portal Modernization",
  //   company: "Citizens Bank",
  //   description: "Led the complete modernization of a legacy banking portal serving 2M+ customers. Implemented React-based architecture with microservices backend, achieving 60% performance improvement and enhanced security features.",
  //   technologies: ["React", "Node.js", "Spring Boot", "Kafka", "MongoDB", "Docker", "Jenkins"],
  //   highlights: [
  //     "60% performance improvement through code-splitting",
  //     "Microservices architecture with Spring Boot",
  //     "Real-time transaction processing",
  //     "Enhanced security with JWT authentication"
  //   ],
  //   icon: Shield,
  //   category: "Enterprise Banking"
  // },
  // {
  //   title: "IT Asset Management Platform", 
  //   company: "Dell Technologies",
  //   description: "Engineered a comprehensive IT asset management solution for enterprise clients. Built scalable web applications with real-time analytics dashboards and automated reporting capabilities.",
  //   technologies: ["React", "Angular", "TypeScript", "Spring Boot", "PostgreSQL", "AWS"],
  //   highlights: [
  //     "Real-time asset tracking for 50K+ devices",
  //     "Analytics dashboards with interactive charts",
  //     "Automated compliance reporting",
  //     "40% reduction in load times"
  //   ],
  //   icon: Database,
  //   category: "Enterprise Software"
  // },
  {
    title: "Healthcare Provider Portal",
    company: "Cigna Healthcare", 
    description: "Developed a comprehensive provider portal enabling real-time eligibility checking and streamlined claims processing. Built with React and Redux for optimal user experience.",
    technologies: ["React", "Redux", "TypeScript", "REST APIs", "Jest"],
    highlights: [
      "Real-time eligibility verification",
      "Streamlined claims processing workflow",
      "Responsive design for mobile access",
      "Comprehensive test coverage"
    ],
    icon: Globe,
    category: "Healthcare Technology",
    link: "https://www.cignaglobal.com/"
  },
  {
    title: "Claims Processing SPA",
    company: "Allstate Insurance",
    description: "Built a sophisticated Single Page Application for insurance claims processing with dynamic form rendering and real-time notifications. Migrated from legacy jQuery to modern React architecture.",
    technologies: ["React", "Redux", "WebSocket", "Node.js", "jQuery Migration"],
    highlights: [
      "Dynamic form rendering for multiple claim types",
      "Real-time WebSocket notifications",
      "Legacy system migration",
      "Improved user experience by 45%"
    ],
    icon: Zap,
    category: "Insurance Technology",
    link: "https://www.allstate.com/claims"
  },
  {
    title: "Cloud Data Platform Dashboards",
    company: "Snowflake",
    description: "Developed interactive data visualization dashboards for Snowflake's cloud platform. Created reusable components for complex query results and real-time SQL monitoring.",
    technologies: ["AngularJS", "D3.js", "JavaScript", "SQL", "Data Visualization"],
    highlights: [
      "Interactive data exploration dashboards",
      "Real-time SQL query monitoring",
      "Reusable visualization components", 
      "Early design system contribution"
    ],
    icon: Database,
    category: "Cloud Platform",
    link: "https://retool.com/templates/snowflake-dashboard"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key projects delivered across finance, healthcare, and enterprise technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient border-border/50 hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-2">
                  {project.company}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs skill-tag">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-primary/10 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}