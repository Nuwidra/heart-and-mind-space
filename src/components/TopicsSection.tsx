import TopicCard from "./TopicCard";
import { Brain, Heart, Users, CloudRain, Sparkles } from "lucide-react";

const topics = [
  {
    title: "Estrés y Ansiedad",
    description: "Aprende a identificar y manejar el estrés y la ansiedad de manera efectiva.",
    icon: <Brain className="w-6 h-6" />,
    color: "primary" as const,
    videos: [
      { title: "Video introductorio", locked: false },
      { title: "Áreas de afectación", locked: true },
      { title: "Técnicas de manejo", locked: true },
    ],
  },
  {
    title: "¿Quieres fortalecer tu autoestima?",
    description: "Descubre herramientas para construir una autoestima sólida y saludable.",
    icon: <Heart className="w-6 h-6" />,
    color: "rose" as const,
    videos: [
      { title: "Video introductorio", locked: false },
      { title: "Áreas de afectación", locked: true },
      { title: "Técnicas de manejo", locked: true },
    ],
  },
  {
    title: "¿Tus relaciones te preocupan?",
    description: "Mejora tus habilidades interpersonales y construye relaciones más sanas.",
    icon: <Users className="w-6 h-6" />,
    color: "accent" as const,
    videos: [
      { title: "Video introductorio", locked: false },
      { title: "Áreas de afectación", locked: true },
      { title: "Técnicas de manejo", locked: true },
    ],
  },
  {
    title: "Depresión",
    description: "Comprende la depresión y encuentra caminos hacia el bienestar emocional.",
    icon: <CloudRain className="w-6 h-6" />,
    color: "olive" as const,
    videos: [
      { title: "Video introductorio", locked: false },
      { title: "Áreas de afectación", locked: true },
      { title: "Técnicas de manejo", locked: true },
    ],
  },
  {
    title: "¿Quieres crecer personalmente?",
    description: "Impulsa tu desarrollo personal y alcanza tu máximo potencial.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "secondary" as const,
    videos: [
      { title: "Video introductorio", locked: false },
      { title: "Áreas de afectación", locked: true },
      { title: "Técnicas de manejo", locked: true },
    ],
  },
];

const TopicsSection = () => {
  return (
    <section id="temas" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Temas de Bienestar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Explora los temas que más te interesan
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada tema incluye videos introductorios, análisis de áreas de afectación y técnicas prácticas de manejo.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {topics.map((topic, index) => (
            <TopicCard key={topic.title} {...topic} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-rose/10 rounded-2xl border border-rose/20 max-w-3xl mx-auto">
          <p className="text-center text-muted-foreground">
            ⚠️ <span className="font-medium">Importante:</span> Este servicio es informativo y de acompañamiento, 
            y no sustituye una consulta profesional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
