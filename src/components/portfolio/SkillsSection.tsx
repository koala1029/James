import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js", "TypeScript", "Responsive Web Design"]
  },
  {
    title: "Backend Technologies", 
    icon: Database,
    skills: ["Node.js", "Python", "Java", "Spring Boot", "RESTful APIs", "GraphQL", "Microservices"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD", "Jenkins", "GitHub Actions"]
  }
];

export function SkillsSection() {
  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-gradient border-border/50 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon className="w-6 h-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="skill-tag hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}