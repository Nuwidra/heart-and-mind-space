import { useState } from "react";

const questions = [
  "¿Te has sentido nervioso/a, inquieto/a o con dificultad para relajarte?",
  "¿Has tenido pensamientos repetitivos o preocupaciones difíciles de controlar?",
  "¿Has sentido tensión física (palpitaciones, sudoración, temblores, dificultad para respirar)?",
  "¿Evitas situaciones por miedo a sentir ansiedad?",
  "¿Tu ansiedad ha interferido en tu trabajo, estudios o relaciones?",
  "¿Has sentido que tu mente está constantemente acelerada o sobrecargada?",
];

const options = [
  { label: "Nunca", value: 0 },
  { label: "Algunas veces", value: 1 },
  { label: "Frecuentemente", value: 2 },
  { label: "Casi siempre", value: 3 },
];

const AnxietyTest = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (qIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const total = answers.reduce((acc, val) => acc + (val >= 0 ? val : 0), 0);
    if (total <= 5) setResult("Ansiedad baja");
    else if (total <= 10) setResult("Ansiedad moderada");
    else setResult("Ansiedad elevada");
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Test de Ansiedad</h1>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="mb-2">{q}</p>
          <div className="flex gap-4">
            {options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleAnswer(i, opt.value)}
                className={`px-4 py-2 rounded border ${
                  answers[i] === opt.value ? "bg-primary text-white" : "bg-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={calculateResult}
        className="mt-6 px-6 py-3 bg-primary text-white rounded"
      >
        Ver Resultado
      </button>
      {result && (
        <p className="mt-4 text-lg font-semibold">Resultado: {result}</p>
      )}
    </div>
  );
};

export default AnxietyTest;
