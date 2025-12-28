import { Play, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeSampleSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card border-4 border-accent/30">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-olive/20">
                {/* Botón Play que abre el video */}
                <a
                  href="https://www.youtube.com/watch?v=tUlMevt9wfo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
                >
                  <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-float">
              <Gift className="w-4 h-4" />
              <span className="font-medium text-sm">¡Gratis!</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Video de Muestra Gratuito
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Conoce mi metodología sin compromiso
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Antes de decidir, te invito a ver este video gratuito donde explico mi enfoque 
              terapéutico y cómo puedo acompañarte en tu proceso de bienestar emocional.
            </p>

            <ul className="space-y-3">
              {[
                "Conoce mi enfoque y metodología",
                "Descubre qué esperar de mis servicios",
                "Sin necesidad de registro previo",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Botón que abre el video */}
            <a
              href="https://www.youtube.com/watch?v=tUlMevt9wfo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="lg" className="gap-2">
                <Play className="w-4 h-4" />
                Ver Video Gratuito
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeSampleSection;
