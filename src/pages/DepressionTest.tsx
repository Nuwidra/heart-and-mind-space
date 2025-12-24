import { useState } from "react";

const questions = [
  "¿Has sentido tristeza o vacío la mayor parte del tiempo?",
  "¿Has perdido interés o placer en actividades que antes disfrutabas?",
  "¿Has tenido cambios en tu apetito o peso sin proponértelo?",
  "¿Has tenido problemas para dormir o exceso de sueño?",
  "¿Has sentido fatiga o falta de energía casi todos los días?",
  "¿Has tenido pensamientos de inutilidad, culpa excesiva o desesperanza?",
];

const options = [
  { label: "Nunca", value: 0 },
  { label: "Algunas veces", value: 1 },
  { label: "Frecuentemente", value: 2 },
  { label: "Casi siempre", value: 3 },
];

const DepressionTest = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (qIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const total = answers.reduce((acc, val) => acc + (val >= 0 ? val : 0), 0);
    if (total <= 5) setResult("Estado de ánimo estable");
    else if (total <= 10) setResult("Síntomas leves de depresión");
    else setResult("Síntomas moderados a graves");
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Test de Depresión</h1>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="mb-2">{q}</p>
          <div className="flex gap-4">
            {options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleAnswer(i, opt.value)}
                className={`px-4 py-2 rounded border ${
                  answers[i] === opt.value ? "bg-olive text-white" : "bg-white"
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
        className="mt-6 px-6 py-3 bg-olive text-white rounded"
      >
        Ver Resultado
      </button>
      {result && (
        <p className="mt-4 text-lg font-semibold">Resultado: {result}</p>
      )}
    </div>
  );
};

export default DepressionTest;
