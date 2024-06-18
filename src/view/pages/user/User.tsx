import React, { Component } from 'react';
import './User.css';
import { Link } from "react-router-dom";

export class User extends Component<any, any> {
    componentDidMount() {
        const storedUsername = localStorage.getItem('login');
        const hasReloaded = localStorage.getItem('hasReloaded');

        if (storedUsername === "hi" && hasReloaded === "hui") {
            localStorage.setItem('hasReloaded', 'ammo'); // Set the flag
            window.location.reload();
        } else if (hasReloaded) {
            localStorage.removeItem('hasReloaded'); // Clear the flag after reload
        }
    }

    render() {
        const yourName = localStorage.getItem('yourName'); // Retrieve yourName from localStorage
        return (
            <>
                <div className="intro-container">
                    <h1 className="intro-heading">Hi! {yourName} Welcome to React Q&A Project</h1>
                    <p className="intro-text">
                        This project is designed to provide a platform for learning and testing your knowledge of React.
                        It consists of a series of questions and answers related to React concepts, frameworks, libraries, and best practices.
                    </p>
                    <p className="intro-text-part">
                        Additionally, this project is a great resource for preparing for React-related interview questions.
                    </p>
                    <p className="intro-text">
                        Features of this project include:
                    </p>
                    <ul className="intro-list">
                        <li>A collection of questions covering various aspects of React.</li>
                        <li>Interactive interface with radio buttons for selecting answers.</li>
                        <li>Immediate feedback on the correctness of selected answers.</li>
                        <li>Option to review correct answers after completing the quiz.</li>
                    </ul>
                    <p className="intro-text">
                        Feel free to explore the questions and test your understanding of React!

                    </p>

                    <Link to="/quest1" className="start-quiz-button">
                        Start Quiz
                    </Link>
                </div>
            </>
        );
    }
}

export default User;
