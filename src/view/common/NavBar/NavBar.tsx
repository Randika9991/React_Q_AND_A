import React, { Component } from "react";
import icon from "../../../images/icons8-notes-64.png";
import { Link } from "react-router-dom";

export class NavBar extends Component {
    constructor(props: {}) {
        super(props);
        const storedUsername = localStorage.getItem('login');
        this.state = {
            isLoggedIn: storedUsername === "hi",
        };
    }

    handleLogout = () => {
        localStorage.setItem('login', 'ado');
        this.setState({ isLoggedIn: false, yourName: '' });
    };

    render() {
        // @ts-ignore
        const { isLoggedIn } = this.state;
        return (
            <div className="p-4 bg-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                    <img className="h-8 w-8 mr-2" src={icon} alt="icon" />
                    <h1 className="text-2xl text-[#61dafb] font-bold mr-4">
                        React Q AND A
                    </h1>
                    <ul className="list-none flex">
                        <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                            <Link to="/home">Home</Link>
                        </li>
                        {isLoggedIn && (
                            <>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <Link to="/quest1">Part 1</Link>
                                </li>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <Link to="/quest2">Part 2</Link>
                                </li>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <Link to="/quest3">Part 3</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="flex items-center">
                    <ul className="list-none flex">
                        {isLoggedIn ? (
                            <>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <Link to="/user">About</Link>
                                </li>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <Link to="/home">
                                        <button onClick={this.handleLogout}>Logout</button>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <Link to="/">Login</Link>
                                </li>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

            </div>

        );
    }
}

export default NavBar;
