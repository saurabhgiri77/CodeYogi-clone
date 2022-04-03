import React from "react";
import { Link } from "react-router-dom";

function CantFound() {
    return (
        <div className="bg-blue-400 h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl text-white">Kaam 404</h1>
            <Link to="/lectures">
                Go to lectures
            </Link>
        </div>
    );
}

export default CantFound;