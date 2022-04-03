import react from "react";
import { Link } from "react-router-dom";

function QuizPage() {
    return (
        <div>
            <div className="flex justify-between bg-slate-800 px-8 py-1">
                <h1 className="px-6 py-3 text-white">Codeyogi | Welcome Saurabh</h1>
                <h1 className="px-6 py-3 bg-blue-600 text-white">00:00</h1>
            </div>
            <div className="flex h-screen flex-col justify-center items-center ">
                <h1>No Active Question</h1>
            </div>
        </div>
    );
}

export default QuizPage;