import React, { Component } from 'react';
import Question from '../../pages/part1/question'; // Default import
import Question2 from '../../pages/part1/Question2';

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
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PartOneCollection;
