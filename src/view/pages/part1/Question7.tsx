import React, {useState, useEffect, useMemo} from 'react';

function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Question7({ number }: { number: number }) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const question = "Which of the following statements is true regarding Angular and React?";
    const answers = useMemo(() =>  [
        "Angular is a library, React is a framework.",
        "React uses a virtual DOM, Angular uses a real DOM.",
        "Angular is maintained by Google, React is maintained by Facebook.",
        "React supports two-way data binding, Angular does not."
    ],[]);
    const correctAnswer = "Angular is maintained by Google, React is maintained by Facebook.";

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
                            id={`angularVsReactAnswer${number}-${index}`}
                            name={`angularVsReactAnswers${number}`}
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={() => handleAnswerSelection(answer)}
                            className="mr-2"
                        />
                        <label htmlFor={`angularVsReactAnswer${number}-${index}`}>{answer}</label>
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

export default Question7;
