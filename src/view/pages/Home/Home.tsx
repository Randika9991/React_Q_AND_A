import { Component } from "react";
import homeImage from '../../../images/q-and-a-2453376_1280.jpg'; // Adjust the path according to your project structure

export class Home extends Component<any, any> {
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
