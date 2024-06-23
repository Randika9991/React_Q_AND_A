import React, { useState, useEffect, useMemo } from 'react';

function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

interface QuestionProps {
    number: number;
}

function Question({ number }: QuestionProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const question = "What is React?";
    const correctAnswer = "A JavaScript library for building user interfaces";

    const answers = useMemo(() => [
        "A type of database",
        "A CSS framework",
        "A Python library",
        "A JavaScript library for building user interfaces"
    ], []);

    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

    useEffect(() => {
        setShuffledAnswers(shuffleArray([...answers]));
    }, [answers]);

    const handleAnswerSelection = (answer: string) => {
        setSelectedAnswer(answer);
        setIsCorrect(answer === correctAnswer);
    };

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg border border-white">
            <h1 className="text-2xl font-bold mb-4">{number}</h1>
            <div>
                <h2 className="text-xl mb-4">{question}</h2>
                {shuffledAnswers.map((answer, index) => (
                    <div key={index} className="mb-2">
                        <input
                            type="radio"
                            id={`answer${index}`}
                            name={`answers-${number}`}
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={() => handleAnswerSelection(answer)}
                            className="mr-2"
                        />
                        <label htmlFor={`answer${index}`}>{answer}</label>
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

export default Question;
