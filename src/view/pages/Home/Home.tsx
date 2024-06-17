import { Component } from "react";
import homeImage from '../../../images/q-and-a-2453376_1280.jpg'; // Adjust the path according to your project structure

export class Home extends Component<any, any> {
    componentDidMount() {
        const storedUsername = localStorage.getItem('login');
        const hasReloaded = localStorage.getItem('hasReloaded');

        if (storedUsername === "hi" && hasReloaded==="hui") {
            localStorage.setItem('hasReloaded', 'ammo'); // Set the flag
            window.location.reload();
        } else if (hasReloaded) {
            localStorage.removeItem('hasReloaded'); // Clear the flag after reload
        }
    }

    render() {
        return (
            <>
                <div className="flex flex-wrap justify-center bg-gray-800 p-4 min-h-screen">
                    <img src={homeImage} alt="Home" className="max-w-full h-auto rounded-lg shadow-lg" />
                </div>
            </>
        );
    }
}

export default Home;
