import React, { Component } from "react";
import icon from "../../../images/icons8-notes-64.png";
import { Link } from "react-router-dom";

interface NavBarProps {
    isLoggedIn: boolean;
    handleLogout: () => void;
}

class NavBar extends Component<NavBarProps> {
    render() {
        const { isLoggedIn, handleLogout } = this.props;
        return (
            <div className="p-4 bg-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                    <img className="h-8 w-8 mr-2" src={icon} alt="icon" />
                    <h1 className="text-2xl text-[#61dafb] font-bold mr-4">
                        React Q AND A
                    </h1>
                    <ul className="list-none flex">
                        <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                            {isLoggedIn ? (
                                <Link to="/home">Home</Link>
                            ) : (
                                <Link to="/">Home</Link>
                            )}
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
                                    <Link to="/">About</Link>
                                </li>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="mr-4 text-white cursor-pointer hover:text-green-400">
                                    <Link to="/login">Login</Link>
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
