import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./view/pages/login/Login";
import Home from "./view/pages/Home/Home";
import PartOneCollection from "./view/pages/anyQuestion/PartOneCollection";
import NavBar from "./view/common/NavBar/NavBar";
import {Footer} from "./view/common/Footer/Footer";

function App() {
    return (
        <div>

            <BrowserRouter basename="/React_Q_AND_A">
                <NavBar/>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/quest1" element={<PartOneCollection />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

function NotFound() {
    return (
        <div className="text-center  font-bold text-4xl">
            Not yet
        </div>
    );
}

export default App;
