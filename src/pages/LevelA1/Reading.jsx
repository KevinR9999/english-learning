import { useState } from "react";

export default function ReadingA1() {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // Todas las preguntas (mezcladas de reading, writing, listening, speaking)
  const questions = [
    // 🧠 READING
    {
      type: "reading",
      text: "Emma lives in London. She loves pizza and has a cat. Where does Emma live?",
      options: ["Paris", "London", "Rome"],
      correct: "London",
    },
    {
      type: "reading",
      text: "Tom is from Spain. He speaks Spanish. Where is Tom from?",
      options: ["France", "Spain", "Italy"],
      correct: "Spain",
    },
    {
      type: "reading",
      text: "Sarah likes coffee. She drinks it every morning. What does Sarah like?",
      options: ["Tea", "Juice", "Coffee"],
      correct: "Coffee",
    },
    {
      type: "reading",
      text: "John is a teacher. He works at a school. What is John’s job?",
      options: ["Doctor", "Teacher", "Driver"],
      correct: "Teacher",
    },
    {
      type: "reading",
      text: "Mary has two dogs. She walks them in the park. What animals does Mary have?",
      options: ["Cats", "Birds", "Dogs"],
      correct: "Dogs",
    },

    // ✍️ WRITING
    {
      type: "writing",
      text: "Write the color of the sky on a sunny day.",
      correct: "blue",
    },
    {
      type: "writing",
      text: "Write the number after 9.",
      correct: "10",
    },
    {
      type: "writing",
      text: "How do you say 'hola' in English?",
      correct: "hello",
    },
    {
      type: "writing",
      text: "What is the opposite of 'cold'?",
      correct: "hot",
    },
    {
      type: "writing",
      text: "Write the word for 'gato' in English.",
      correct: "cat",
    },

    // 🎧 LISTENING
    {
      type: "listening",
      text: "Listen and type the word you hear.",
      audio: "Hello",
      correct: "hello",
    },
    {
      type: "listening",
      text: "Listen and type the color you hear.",
      audio: "red",
      correct: "red",
    },
    {
      type: "listening",
      text: "Listen and type the number you hear.",
      audio: "seven",
      correct: "seven",
    },
    {
      type: "listening",
      text: "Listen and type the fruit you hear.",
      audio: "apple",
      correct: "apple",
    },
    {
      type: "listening",
      text: "Listen and type the animal you hear.",
      audio: "dog",
      correct: "dog",
    },

    // 🎙️ SPEAKING
    {
      type: "speaking",
      text: "Say 'hello' aloud.",
      correct: "hello",
    },
    {
      type: "speaking",
      text: "Say 'good morning'.",
      correct: "good morning",
    },
    {
      type: "speaking",
      text: "Say 'I am learning English'.",
      correct: "i am learning english",
    },
    {
      type: "speaking",
      text: "Say 'my name is Kevin'.",
      correct: "my name is kevin",
    },
    {
      type: "speaking",
      text: "Say 'thank you'.",
      correct: "thank you",
    },
  ];

  const current = questions[step];

  // ✅ Reproducir audio con voz sintetizada
  const playAudio = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    window.speechSynthesis.speak(utter);
  };

  // 🎤 Iniciar reconocimiento de voz (para speaking)
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Tu navegador no soporta reconocimiento de voz 😢");
      return;
    }

    const recog = new window.webkitSpeechRecognition();
    recog.lang = "en-US";
    recog.continuous = false;
    recog.interimResults = false;

    recog.onstart = () => setListening(true);
    recog.onend = () => setListening(false);

    recog.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      if (transcript === current.correct) {
        setFeedback("✅ Perfect! Great pronunciation!");
      } else {
        setFeedback(`❌ You said: "${transcript}". Try again!`);
      }
    };

    setRecognition(recog);
    recog.start();
  };

  // ✅ Validar respuesta
  const checkAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase().trim() === current.correct.toLowerCase().trim()) {
      setFeedback("✅ Correct! Great job!");
    } else {
      setFeedback("❌ Incorrect, try again!");
    }
  };

  // ✅ Siguiente pregunta
  const nextQuestion = () => {
    setFeedback("");
    setAnswer("");
    if (step < questions.length - 1) setStep(step + 1);
    else setFeedback("🎉 ¡Felicidades! Has completado todas las actividades.");
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto mt-6 mb-12">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        A1 Interactive Practice
      </h2>
      <p className="text-gray-600 mb-6">Pregunta {step + 1} de {questions.length}</p>

      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 h-3 rounded-full mb-6">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${((step + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Mostrar pregunta según tipo */}
      <p className="text-lg mb-4 font-medium">{current.text}</p>

      {current.type === "reading" && (
        <div className="flex flex-col gap-3">
          {current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => checkAnswer(opt)}
              className="bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {current.type === "writing" && (
        <div className="flex flex-col gap-3">
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Escribe tu respuesta..."
            className="border rounded-lg px-4 py-2 text-center"
          />
          <button
            onClick={() => checkAnswer(answer)}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Enviar respuesta
          </button>
        </div>
      )}

      {current.type === "listening" && (
        <div className="flex flex-col gap-3">
          <button
            onClick={() => playAudio(current.audio)}
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            🔊 Escuchar
          </button>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Escribe lo que escuchas..."
            className="border rounded-lg px-4 py-2 text-center"
          />
          <button
            onClick={() => checkAnswer(answer)}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Enviar respuesta
          </button>
        </div>
      )}

      {current.type === "speaking" && (
        <div className="flex flex-col gap-3 items-center">
          <button
            onClick={startListening}
            className={`${
              listening ? "bg-red-600" : "bg-purple-600"
            } text-white py-2 px-6 rounded-lg hover:opacity-90 transition`}
          >
            {listening ? "🎙️ Escuchando..." : "🎤 Hablar ahora"}
          </button>
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <p
          className={`mt-4 font-semibold ${
            feedback.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}

      {/* Siguiente pregunta */}
      {feedback && step < questions.length - 1 && (
        <button
          onClick={nextQuestion}
          className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition"
        >
          Siguiente ➡️
        </button>
      )}
    </div>
  );
}
