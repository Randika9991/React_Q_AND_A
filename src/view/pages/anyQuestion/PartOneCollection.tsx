import React, { Component } from 'react';
import Question from '../part1/question'; // Default import
import Question2 from '../part1/Question2';
import Question3 from '../part1/Question3';
import Question4 from '../part1/Question4';
import Question5 from "../part1/Question5";
import Question6 from "../part1/Question6";
import Question7 from "../part1/Question7";
import Question8 from "../part1/Question8";
import Question9 from "../part1/Question9";
import Question10 from "../part1/Question10";

export class PartOneCollection extends Component<any, any> {
    render() {
        return (
            <>
                <div className="bg-gray-800 p-4 min-h-screen">
                    <div className="flex justify-center">
                        <div className="flex flex-col max-w-5xl w-full">
                            <div className="mb-4 w-full">
                                <Question />
                            </div>
                            <div className="mb-4 w-full">
                                <Question2 />
                            </div>
                            <div className="mb-4 w-full">
                                <Question3 />
                            </div>
                            <div className="mb-4 w-full">
                                <Question4 />
                            </div>
                            <div className="mb-4 w-full">
                                <Question5 />
                            </div>
                            <div className="mb-4 w-full">
                                <Question6 />
                            </div>
                            <div className="mb-4 w-full">
                                <Question7 />
                            </div>
                            <div className="mb-4 w-full">
                                <Question8 />
                            </div>
                            <div className="mb-4 w-full">
                                <Question9 />
                            </div>
                            <div className="mb-4 w-full">
                                <Question10 />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PartOneCollection;
