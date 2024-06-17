import React, { useState } from 'react';

function Question9() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleAnswerSelection = (answer: string) => {
        setSelectedAnswer(answer);
        setIsCorrect(answer === correctAnswer);
    };

    const question = "What is the purpose of using JSX in React?";
    const answers = [
        "To define styling for React components",
        "To interact with the browser's Document Object Model (DOM)",
        "To define the structure of React components with a syntax similar to HTML (Instead of adding JavaScript to HTML, you can embed HTML inside JavaScript using JSX)",
        "To handle asynchronous data fetching in React applications"
    ];

    const correctAnswer = "To define the structure of React components with a syntax similar to HTML (Instead of adding JavaScript to HTML, you can embed HTML inside JavaScript using JSX)";

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg border border-white">
            <h1 className="text-2xl font-bold mb-4">9</h1>
            <div>
                <h2 className="text-xl mb-4">{question}</h2>
                {answers.map((answer, index) => (
                    <div key={index} className="mb-2">
                        <input
                            type="radio"
                            id={`jsxPurposeAnswer${index}`}
                            name="jsxPurposeAnswers"
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={() => handleAnswerSelection(answer)}
                            className="mr-2"
                        />
                        <label htmlFor={`jsxPurposeAnswer${index}`}>{answer}</label>
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

export default Question9;
