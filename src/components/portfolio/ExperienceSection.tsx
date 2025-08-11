import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Citizens Bank",
    role: "Senior Full Stack Developer",
    period: "April 2023 - Present",
    location: "Remote",
    highlights: [
      "Spearheaded modernization of banking portal using React and Node.js, enhancing performance through code-splitting and caching strategies",
      "Led team in rebuilding monolithic application into microservices architecture with Spring Boot and Kafka",
      "Designed CI/CD pipeline with Jenkins and Docker, reducing release cycles",
      "Optimized MongoDB aggregation pipelines for large-scale customer transactions"
    ],
    technologies: ["React", "Node.js", "Spring Boot", "Kafka", "MongoDB", "Jenkins", "Docker"]
  },
  {
    company: "Dell Technologies",
    role: "Full Stack Developer",
    period: "January 2020 - February 2023",
    location: "Austin, TX",
    highlights: [
      "Engineered scalable web applications with ReactJS, Angular, and Spring Boot for IT asset management",
      "Built modular, reusable UI components and analytics dashboards using TypeScript and React Hooks",
      "Implemented secure authentication with JWT and Spring Security for role-based access",
      "Reduced load time by 40% through frontend performance optimizations"
    ],
    technologies: ["React", "Angular", "Spring Boot", "TypeScript", "JWT", "Axios"]
  },
  {
    company: "Cigna Healthcare",
    role: "Frontend Engineer",
    period: "October 2017 - October 2019",
    location: "Hartford, CT",
    highlights: [
      "Developed and maintained provider portal using React, Redux, and TypeScript",
      "Built real-time features for eligibility checking and claims processing",
      "Created reusable components and implemented responsive designs",
      "Improved UI performance and reduced loading times significantly"
    ],
    technologies: ["React", "Redux", "TypeScript", "REST APIs"]
  },
  {
    company: "Allstate Insurance",
    role: "Frontend Developer", 
    period: "August 2015 - July 2017",
    location: "Chicago, IL",
    highlights: [
      "Developed SPA for claims processing using React and Redux, streamlining complex workflows",
      "Implemented dynamic form rendering for various claim types, improving user experience",
      "Migrated legacy jQuery workflows to modern React/Redux architecture",
      "Built WebSocket-based real-time notifications for claim status updates"
    ],
    technologies: ["React", "Redux", "jQuery", "WebSocket"]
  },
  {
    company: "Snowflake",
    role: "Frontend Developer",
    period: "March 2013 - April 2015", 
    location: "San Mateo, CA",
    highlights: [
      "Developed responsive dashboards for cloud data platform using AngularJS and D3.js",
      "Built reusable visualization components for complex query results and analytics",
      "Implemented real-time data streaming UI for monitoring SQL queries",
      "Contributed to early development of Snowflake's design system"
    ],
    technologies: ["AngularJS", "D3.js", "JavaScript", "SQL"]
  }
];

export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            10+ years building scalable solutions across leading tech companies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.period}`}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                
                <Card className="ml-0 md:ml-20 card-gradient border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <CardTitle className="text-2xl text-primary">{exp.company}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}