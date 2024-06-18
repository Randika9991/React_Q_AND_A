import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class login extends Component {
    constructor(props: {}) {
        localStorage.setItem('login',String(false));
        super(props);
        this.state = {
            username: '',
            isLoggedIn: false,
        };
    }

    handleInputChange = (event: { target: { value: any; }; }) => {
        this.setState({ username: event.target.value });
    }

    handleClick = () => {
        // @ts-ignore
        if (this.state.username === "") {
            alert("Please enter a username.");
        } else {
            // @ts-ignore
            localStorage.setItem('login',String("hi"));
            localStorage.setItem('hasReloaded', 'hui');
            // @ts-ignore
            localStorage.setItem('yourName', this.state.username);

            this.setState({ isLoggedIn: true });

        }
    }

    render() {
        // @ts-ignore
        const { isLoggedIn } = this.state;
        return (
            <div className="flex justify-center items-center h-screen bg-gray-800">
                <form className="bg-white p-6 rounded-lg shadow-2xl w-80 transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-3xl mb-4 font-bold text-center text-gray-800">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            // @ts-ignore
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full py-2 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 text-2xl font-bold"
                        style={{ backgroundColor: '#61dafb', color: '#fff' }}
                        onClick={this.handleClick}>
                        {isLoggedIn ? (
                            <Link to="/user">Submit</Link>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        );
    }
}

export default login;
