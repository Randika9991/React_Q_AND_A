import React, { useState } from 'react';

function Question3() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleAnswerSelection = (answer: string) => {
        setSelectedAnswer(answer);
        setIsCorrect(answer === correctAnswer);
    };

    const question = "One of the most significant drawbacks of React, as with any technology, is its:";
    const answers = [
        "Steep Learning Curve",
        "Complexity of Ecosystem",
        "Boilerplate Code",
        "Performance Overhead"
    ];

    const correctAnswer = "Steep Learning Curve"; // Assuming the correct answer is 2013

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg border border-white">
            <h1 className="text-2xl font-bold mb-4">3</h1>

            <div>
                <h2 className="text-xl mb-4">{question}</h2>
                {answers.map((answer, index) => (
                    <div key={index} className="mb-2">
                        <input
                            type="radio"
                            id={`threeAnswer${index}`}
                            name="threeAnswers"
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={() => handleAnswerSelection(answer)}
                            className="mr-2"
                        />
                        <label htmlFor={`threeAnswer${index}`}>{answer}</label>
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

export default Question3;
