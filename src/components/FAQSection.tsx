import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Este servicio reemplaza una consulta psicológica profesional?",
    answer: "No. Este espacio es informativo y de acompañamiento, y no sustituye una consulta profesional. Te brindamos herramientas y orientación, pero para un tratamiento completo recomendamos consultar con un profesional de salud mental.",
  },
  {
    question: "¿Cómo accedo al contenido después de comprar un paquete?",
    answer: "(Pendiente - Información sobre acceso al contenido)",
  },
  {
    question: "¿Puedo cambiar de paquete después de comprar?",
    answer: "(Pendiente - Política de cambios de paquete)",
  },
  {
    question: "¿Las consultas son virtuales o presenciales?",
    answer: "Ofrecemos ambas modalidades. Puedes elegir entre citas virtuales (videollamada) o presenciales según tu preferencia y ubicación.",
  },
  {
    question: "¿Cuánto dura una consulta con la Dra. Ingrid Rojas?",
    answer: "(Pendiente - Duración de las consultas)",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "(Pendiente - Métodos de pago disponibles)",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            ¿Tienes dudas?
          </h2>
          <p className="text-muted-foreground text-lg">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border-2 border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a
            href="#"
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Contáctanos directamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
