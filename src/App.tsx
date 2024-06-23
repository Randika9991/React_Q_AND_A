import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./view/pages/login/Login";
import Home from "./view/pages/Home/Home";
import PartOneCollection from "./view/pages/anyQuestion/PartOneCollection";
import NavBar from "./view/common/NavBar/NavBar";
import { Footer } from "./view/common/Footer/Footer";
import User from "./view/pages/user/User";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
    };

    return (
        <div>
            <BrowserRouter basename="/React_Q_AND_A">
                <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <Routes>
                    {isLoggedIn ? (
                        <>
                            <Route path="/login" element={<Navigate to="/" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/quest1" element={<PartOneCollection />} />
                            <Route path="/" element={<User />} />
                            <Route path="*" element={<NotFound />} />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<Login onLogin={handleLogin} />} />
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Home />} />
                        </>
                    )}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

function NotFound() {
    return (
        <div className="text-center font-bold text-4xl">
            Not yet
        </div>
    );
}

export default App;
