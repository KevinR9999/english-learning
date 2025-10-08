import { useState } from "react";

export default function ReadingA1() {
  const [answered, setAnswered] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 text-center max-w-sm sm:max-w-md md:max-w-2xl mx-auto my-6 sm:my-10">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3 sm:mb-4">
        A1 Reading Practice 📚
      </h2>

      <p className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
        <strong>Text:</strong> Hello! My name is Emma. I live in London. I have a cat and I like pizza.
      </p>

      <p className="text-gray-700 mb-4 text-sm sm:text-base">❓ Where does Emma live?</p>

      {!answered ? (
        <div className="flex flex-col gap-3 w-full max-w-xs sm:max-w-sm mx-auto">
          <button
            onClick={() => setAnswered("wrong")}
            className="bg-gray-100 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base"
          >
            Paris
          </button>
          <button
            onClick={() => setAnswered("correct")}
            className="bg-gray-100 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base"
          >
            London
          </button>
          <button
            onClick={() => setAnswered("wrong")}
            className="bg-gray-100 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base"
          >
            Rome
          </button>
        </div>
      ) : (
        <p
          className={`mt-5 sm:mt-6 font-bold text-sm sm:text-base ${
            answered === "correct" ? "text-green-600" : "text-red-600"
          }`}
        >
          {answered === "correct" ? "✅ Correct! Great job!" : "❌ Try again!"}
        </p>
      )}
    </div>
  );
}
