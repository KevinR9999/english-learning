import { useState } from "react";

export default function ReadingA1() {
  const [answered, setAnswered] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        A1 Reading Practice 📚
      </h2>
      <p className="text-gray-700 mb-6">
        <strong>Text:</strong> Hello! My name is Emma. I live in London. I have a cat and I like pizza.
      </p>
      <p className="text-gray-700 mb-4">❓ Where does Emma live?</p>
      {!answered ? (
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setAnswered("wrong")}
            className="bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Paris
          </button>
          <button
            onClick={() => setAnswered("correct")}
            className="bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            London
          </button>
          <button
            onClick={() => setAnswered("wrong")}
            className="bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Rome
          </button>
        </div>
      ) : (
        <p
          className={`mt-4 font-bold ${
            answered === "correct" ? "text-green-600" : "text-red-600"
          }`}
        >
          {answered === "correct" ? "✅ Correct! Great job!" : "❌ Try again!"}
        </p>
      )}
    </div>
  );
}
