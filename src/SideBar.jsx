import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="w-1/5 top-0 sticky bg-slate-800 h-screen flex flex-col justify-between text-white space-y-2 px-3 py-4">
            <div>
                <h1 className="text-3xl font-bold mb-4">Codeyogi</h1>
                <div className="flex flex-col space-y-3">

                    <Link to="/lectures">Lectures</Link>
                    <Link to="/assignments">Assignments</Link>
                    <Link to="/quiz">Quiz</Link>
                </div>
            </div>
            <div>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
}

export default SideBar;