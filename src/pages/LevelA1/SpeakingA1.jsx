import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function SpeakingA1() {
  const phrases = [
    "Hello, my name is Emma",
    "I like pizza",
    "I live in London",
    "Good morning",
    "How are you"
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  // Verificar compatibilidad
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">🎙️ Speaking Practice</h2>
        <p className="text-gray-700 mb-2">
          Tu navegador no soporta reconocimiento de voz. 😢
        </p>
        <p className="text-gray-600">Por favor, escribe tu respuesta en su lugar.</p>
      </div>
    );
  }

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: false, language: "en-US" });
  };

  const checkAnswer = () => {
    const expected = phrases[current].toLowerCase();
    const spoken = transcript.toLowerCase();

    if (spoken.includes(expected)) {
      setScore(score + 1);
    }

    if (current + 1 < phrases.length) {
      setCurrent(current + 1);
      resetTranscript();
    } else {
      setFinished(true);
      SpeechRecognition.stopListening();
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 mt-8 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">🎤 Speaking Practice (A1)</h2>

      {!finished ? (
        <>
          <p className="text-lg mb-4">
            🔊 Di en voz alta:{" "}
            <span className="font-semibold text-blue-600">“{phrases[current]}”</span>
          </p>

          <button
            onClick={startListening}
            className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
          >
            {listening ? "Escuchando..." : "🎙️ Hablar"}
          </button>

          <p className="mt-3 text-gray-600 italic">Tu voz: "{transcript}"</p>

          <button
            onClick={checkAnswer}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Verificar ✅
          </button>

          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Pregunta {current + 1} de {phrases.length}
            </p>
            <p className="text-sm text-gray-500">Puntuación: {score}</p>
          </div>
        </>
      ) : (
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-green-600">🎉 ¡Completado!</h3>
          <p className="text-lg mt-2">
            Tu puntuación final:{" "}
            <span className="font-semibold text-blue-700">
              {score} / {phrases.length}
            </span>
          </p>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setFinished(false);
              resetTranscript();
            }}
            className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-xl hover:bg-yellow-600 transition"
          >
            🔁 Repetir
          </button>
        </div>
      )}
    </div>
  );
}
