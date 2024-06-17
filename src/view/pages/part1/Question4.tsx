import React, { useState } from 'react';

function Question4() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleAnswerSelection = (answer: string) => {
        setSelectedAnswer(answer);
        setIsCorrect(answer === correctAnswer);
    };

    const question = "What is the main difference between Real DOM and Virtual DOM in web development?";
    const answers = [
        "Real DOM directly updates the browser's display, while Virtual DOM updates a lightweight copy of the Real DOM first.",
        "Real DOM is only used with React, while Virtual DOM is a general concept in web development.",
        "Real DOM is faster than Virtual DOM for rendering complex applications.",
        "Virtual DOM is a part of the browser's rendering engine, while Real DOM is implemented by JavaScript libraries like React."
    ];

    const correctAnswer = "Real DOM directly updates the browser's display, while Virtual DOM updates a lightweight copy of the Real DOM first.";

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg border border-white">
            <h1 className="text-2xl font-bold mb-4">4</h1>
            <div>
                <h2 className="text-xl mb-4">{question}</h2>
                {answers.map((answer, index) => (
                    <div key={index} className="mb-2">
                        <input
                            type="radio"
                            id={`fourAnswer${index}`}
                            name="fourAnswers"
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={() => handleAnswerSelection(answer)}
                            className="mr-2"
                        />
                        <label htmlFor={`fourAnswer${index}`}>{answer}</label>
                    </div>
                ))}
            </div>
            {selectedAnswer && (
                <p className="mt-4">
                    {isCorrect ? "Correct answer!" : "Incorrect answer. Please try again."}
                </p>
            )}
        </div>
    );
}

export default Question4;
