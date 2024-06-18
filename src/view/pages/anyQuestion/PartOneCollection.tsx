import React, { Component } from 'react';
import Question from '../part1/Question';
import Question2 from '../part1/Question2';
import Question3 from '../part1/Question3';
import Question4 from '../part1/Question4';
import Question5 from "../part1/Question5";
import Question6 from "../part1/Question6";
import Question7 from "../part1/Question7";
import Question8 from "../part1/Question8";
import Question10 from "../part1/Question10";
import Question9 from "../part1/Question9";

const shuffleArray = (array: React.ReactElement[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export class PartOneCollection extends Component<any, { shuffledQuestions: React.ReactElement[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            shuffledQuestions: shuffleArray([
                <Question key="1" number={0}  />,
                <Question2 key="2" number={0} />,
                <Question3 key="3" number={0} />,
                <Question4 key="4" number={0} />,
                <Question5 key="5" number={0} />,
                <Question6 key="6" number={0} />,
                <Question7 key="7" number={0} />,
                <Question8 key="8" number={0} />,
                <Question9 key="9" number={0} />,
                <Question10 key="10" number={0} />
            ])
        };
    }

    render() {
        return (
            <>
                <div className="bg-gray-800 p-4 min-h-screen">
                    <div className="flex justify-center">
                        <div className="flex flex-col max-w-5xl w-full">
                            {this.state.shuffledQuestions.map((QuestionComponent, index) => (
                                <div className="mb-4 w-full" key={QuestionComponent.key}>
                                    {React.cloneElement(QuestionComponent, { number: index + 1 })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PartOneCollection;
