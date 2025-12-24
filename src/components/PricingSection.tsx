import { Check, Star, Crown, Calendar, Video, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    price: "₡0000",
    description: "Acceso completo a todo el contenido de la plataforma",
    icon: <BookOpen className="w-6 h-6" />,
    color: "secondary",
    features: [
      "Acceso a todos los videos",
      "Material autodidacta completo",
      "Tests de ansiedad y depresión",
      "Guías de ejercicios prácticos",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  },
  {
    name: "Medio",
    price: "₡0000",
    description: "Todo el contenido + acompañamiento profesional",
    icon: <Star className="w-6 h-6" />,
    color: "rose",
    features: [
      "Todo lo incluido en Básico",
      "1 consulta virtual o presencial con la Dra. Ingrid Rojas",
      "Seguimiento personalizado",
      "Recomendaciones específicas",
    ],
    popular: true,
    buttonVariant: "rose" as const,
  },
  {
    name: "Premium",
    price: "₡0000",
    description: "La experiencia completa de bienestar emocional",
    icon: <Crown className="w-6 h-6" />,
    color: "primary",
    features: [
      "Todo lo incluido en Medio",
      "2 consultas con la Dra. Ingrid Rojas",
      "Ejercicios de manejo personalizados",
      "Plan de bienestar a tu medida",
      "Acceso prioritario a nuevos contenidos",
    ],
    popular: false,
    buttonVariant: "warm" as const,
  },
];

const colorClasses = {
  secondary: {
    icon: "bg-secondary text-secondary-foreground",
    border: "border-secondary/30",
    badge: "bg-secondary/20 text-secondary-foreground",
  },
  rose: {
    icon: "bg-rose text-rose-foreground",
    border: "border-rose/30",
    badge: "bg-rose text-rose-foreground",
  },
  primary: {
    icon: "bg-primary text-primary-foreground",
    border: "border-primary/30",
    badge: "bg-primary/20 text-primary",
  },
};

const PricingSection = () => {
  return (
    <section id="paquetes" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Paquetes de Bienestar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Elige el plan ideal para ti
          </h2>
          <p className="text-muted-foreground text-lg">
            Todos los planes incluyen acceso completo a nuestra plataforma de bienestar emocional.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colors = colorClasses[plan.color as keyof typeof colorClasses];
            
            return (
              <div
                key={plan.name}
                className={cn(
                  "relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl animate-fade-in-up",
                  colors.border,
                  plan.popular && "scale-105 shadow-xl border-rose"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={cn("px-4 py-1 rounded-full text-sm font-medium shadow-lg", colors.badge)}>
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", colors.icon)}>
                  {plan.icon}
                </div>

                {/* Plan Info */}
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> / único pago</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", colors.icon)}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={plan.buttonVariant} className="w-full" size="lg">
                  Comenzar Ahora
                </Button>
              </div>
            );
          })}
        </div>

        {/* Appointment Buttons */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            ¿Prefieres agendar una consulta directamente?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="gap-2">
              <Video className="w-5 h-5" />
              Cita Virtual
            </Button>
            <Button variant="olive" size="lg" className="gap-2">
              <Calendar className="w-5 h-5" />
              Cita Presencial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
