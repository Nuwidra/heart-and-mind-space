import { Button } from "@/components/ui/button";
import { Play, Calendar, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-earth" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A95829%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-rose/10 text-rose rounded-full text-sm font-medium">
              Tu bienestar emocional importa
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Encuentra tu{" "}
              <span className="text-primary">equilibrio</span>{" "}
              emocional
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Acompañamiento profesional y recursos para tu crecimiento personal. 
              Descubre herramientas prácticas para manejar el estrés, fortalecer tu autoestima y mejorar tus relaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" className="gap-2">
                <Play className="w-5 h-5" />
                Ver Video Introductorio
              </Button>
              <Button variant="outline" size="xl" className="gap-2">
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-olive/10 rounded-lg border border-olive/20">
              <p className="text-sm text-muted-foreground italic">
                💡 Este espacio no reemplaza una consulta profesional, pero puede acompañarte y orientarte en el proceso.
              </p>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card border-4 border-secondary/50">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-rose/20">
                <button className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group">
                  <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium text-foreground">Video Introductorio General</p>
                <p className="text-xs text-muted-foreground">Conoce mi enfoque y metodología</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose/20 rounded-full blur-2xl animate-pulse-soft" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#temas" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm font-medium">Explorar Temas</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
