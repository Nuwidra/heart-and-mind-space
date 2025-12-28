import { Award, GraduationCap, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-secondary/30 border-4 border-secondary/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Foto de la Dra. Ingrid Rojas</p>
                  <p className="text-sm text-muted-foreground/70">(Pendiente)</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-rose/10 text-rose rounded-full text-sm font-medium">
              Sobre Mí
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Psicóloga Ingrid Rojas
            </h2>
            
            <p className="text-muted-foreground text-lg">
              (Pendiente - Presentación escrita de la Psicóloga Ingrid Rojas)
            </p>
            
            <p className="text-muted-foreground">
              Bienvenida a este espacio de bienestar emocional. Mi objetivo es brindarte herramientas 
              prácticas y acompañamiento profesional en tu proceso de crecimiento personal.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Formación</p>
                  <p className="text-xs text-muted-foreground">(Pendiente)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-rose/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-rose" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Especialidad</p>
                  <p className="text-xs text-muted-foreground">(Pendiente)</p>
                </div>
              </div>
            </div>

            {/* Botón con enlace */}
            <a href="https://calendar.app.google/rCMQrww7aaGeTGUAA" target="_blank" rel="noopener noreferrer" >
              <Button variant="warm" size="lg" className="gap-2 mt-6">
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
