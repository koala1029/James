import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            Full Stack Developer
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            James Smith
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Results-driven full stack developer with 10+ years of experience building scalable web applications, 
            microservices architecture, and delivering high-performance solutions across finance, cloud platforms, and enterprise systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            {/* <Button variant="outline" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button> */}
            <a href="src/assets/James.pdf" download>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}