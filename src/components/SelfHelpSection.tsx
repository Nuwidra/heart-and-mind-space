import { FileText, ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SelfHelpSection = () => {
  return (
    <section className="py-20 md:py-28 bg-olive/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-4">
            Material Autodidacta
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Evalúa tu bienestar emocional
          </h2>
          <p className="text-muted-foreground text-lg">
            Utiliza nuestros tests de autoevaluación como una herramienta de autoconocimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Anxiety Test */}
          <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ClipboardCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              Test de Ansiedad
            </h3>
            <p className="text-muted-foreground mb-6">
              Identifica posibles síntomas de ansiedad y comprende mejor tu estado emocional actual.
            </p>
            <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Link to="/test-ansiedad">
                Realizar Test
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Depression Test */}
          <div className="bg-card rounded-2xl p-8 border-2 border-olive/20 hover:border-olive/40 transition-all duration-300 hover:shadow-xl group">
            <div className="w-16 h-16 rounded-2xl bg-olive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-olive" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              Test de Depresión
            </h3>
            <p className="text-muted-foreground mb-6">
              Evalúa tu estado de ánimo y obtén orientación sobre pasos a seguir para tu bienestar.
            </p>
            <Button asChild variant="olive" className="w-full">
              <Link to="/test-depresion">
                Realizar Test
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            Estos tests son herramientas de orientación y autoconocimiento. Los resultados no constituyen un diagnóstico profesional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelfHelpSection;
