import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">
            Academic foundation in technology and engineering
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="card-gradient border-border/50 hover:shadow-lg transition-all duration-300 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <GraduationCap className="w-8 h-8 text-primary" />
                The University of Texas at Arlington
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span>2009 - 2012</span>
              </div>
              <p className="text-lg">Bachelor's Degree</p>
              <p className="text-muted-foreground mt-2">
                Built a strong foundation in computer science principles, software engineering, 
                and technical problem-solving that continues to drive innovation in modern development practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}