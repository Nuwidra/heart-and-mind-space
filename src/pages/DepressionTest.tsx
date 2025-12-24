import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Info, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: 1,
    question: "¿Con qué frecuencia te sientes triste o vacío/a?",
    options: ["Nunca", "Ocasionalmente", "Frecuentemente", "Siempre"],
  },
  {
    id: 2,
    question: "¿Has perdido interés en actividades que antes disfrutabas?",
    options: ["Nunca", "Ocasionalmente", "Frecuentemente", "Siempre"],
  },
  {
    id: 3,
    question: "¿Experimentas cambios significativos en tu apetito o peso?",
    options: ["Nunca", "Ocasionalmente", "Frecuentemente", "Siempre"],
  },
  {
    id: 4,
    question: "¿Tienes dificultades para dormir o duermes demasiado?",
    options: ["Nunca", "Ocasionalmente", "Frecuentemente", "Siempre"],
  },
  {
    id: 5,
    question: "¿Te sientes cansado/a o sin energía la mayor parte del día?",
    options: ["Nunca", "Ocasionalmente", "Frecuentemente", "Siempre"],
  },
  {
    id: 6,
    question: "¿Tienes dificultad para concentrarte o tomar decisiones?",
    options: ["Nunca", "Ocasionalmente", "Frecuentemente", "Siempre"],
  },
  {
    id: 7,
    question: "¿Te sientes sin esperanza respecto al futuro?",
    options: ["Nunca", "Ocasionalmente", "Frecuentemente", "Siempre"],
  },
  {
    id: 8,
    question: "¿Te aíslas de familiares o amigos?",
    options: ["Nunca", "Ocasionalmente", "Frecuentemente", "Siempre"],
  },
];

const getResult = (score: number) => {
  const percentage = (score / (questions.length * 3)) * 100;
  
  if (percentage <= 25) {
    return {
      level: "Bajo",
      color: "text-green-600",
      bgColor: "bg-green-100",
      borderColor: "border-green-300",
      icon: <Sun className="w-12 h-12 text-green-600" />,
      message: "Tus respuestas sugieren un estado de ánimo saludable. Continúa cuidando tu bienestar emocional con buenos hábitos.",
      recommendations: [
        "Mantén conexiones sociales significativas",
        "Continúa con actividades que te den alegría",
        "Practica gratitud diariamente",
      ],
    };
  } else if (percentage <= 50) {
    return {
      level: "Moderado",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-300",
      icon: <Info className="w-12 h-12 text-yellow-600" />,
      message: "Tus respuestas indican algunos síntomas leves. Podrías beneficiarte de algunas estrategias de autocuidado.",
      recommendations: [
        "Explora nuestros videos sobre bienestar emocional",
        "Establece una rutina diaria saludable",
        "Comparte cómo te sientes con alguien de confianza",
      ],
    };
  } else if (percentage <= 75) {
    return {
      level: "Alto",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-300",
      icon: <AlertTriangle className="w-12 h-12 text-orange-600" />,
      message: "Tus respuestas sugieren síntomas significativos. Te recomendamos explorar nuestros recursos y considerar apoyo profesional.",
      recommendations: [
        "Accede a nuestros videos sobre manejo de depresión",
        "Considera agendar una consulta profesional",
        "Mantén contacto con personas que te apoyan",
      ],
    };
  } else {
    return {
      level: "Muy Alto",
      color: "text-red-600",
      bgColor: "bg-red-100",
      borderColor: "border-red-300",
      icon: <AlertTriangle className="w-12 h-12 text-red-600" />,
      message: "Tus respuestas indican síntomas importantes. Te recomendamos encarecidamente buscar apoyo profesional.",
      recommendations: [
        "Agenda una cita con la Dra. Ingrid Rojas lo antes posible",
        "No enfrentes esto solo/a - hay ayuda disponible",
        "Si tienes pensamientos de hacerte daño, busca ayuda inmediata",
      ],
    };
  }
};

const DepressionTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
  const result = getResult(totalScore);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    return (
      <div className="min-h-screen bg-cream py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${result.bgColor} mb-4`}>
                {result.icon}
              </div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                Resultado del Test
              </h1>
              <div className={`inline-block px-4 py-2 rounded-full ${result.bgColor} ${result.color} font-medium`}>
                Nivel: {result.level}
              </div>
            </div>

            <div className={`p-6 rounded-xl ${result.bgColor} border ${result.borderColor} mb-6`}>
              <p className="text-foreground">{result.message}</p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4">Recomendaciones:</h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-olive/10 border border-olive/30 rounded-xl p-4 mb-8">
              <p className="text-sm text-muted-foreground italic text-center">
                Este test es una herramienta de orientación y autoconocimiento. Los resultados no constituyen un diagnóstico profesional. Si experimentas malestar significativo, te recomendamos consultar con un profesional de salud mental.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
              <Button asChild variant="olive" className="flex-1">
                <Link to="/#paquetes">
                  Ver Paquetes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-olive hover:text-olive/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
        </div>

        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Test de Depresión
            </h1>
            <p className="text-muted-foreground">
              Responde las siguientes preguntas con honestidad para obtener una orientación sobre tu estado emocional.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
              <span>{Math.round(progress)}% completado</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-medium text-foreground mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    answers[currentQuestion] === idx
                      ? "border-olive bg-olive/10 text-foreground"
                      : "border-border hover:border-olive/50 text-foreground"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
            <Button
              variant="olive"
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Siguiente"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground italic">
            Este servicio es informativo y de acompañamiento, y no sustituye una consulta profesional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepressionTest;
