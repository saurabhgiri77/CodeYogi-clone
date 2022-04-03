import react from "react";
import { Link } from "react-router-dom";

function Assignments(props) {
    return (
        <Link to={`/assignments/${props.id}/details`}>
            <div class="p-4 mx-10 my-4 space-y-2 mb-2 border rounded-lg text-lg bg-white">
                <div class="flex space-x-2 font-semibold">
                    <h1>#{props.number}</h1>
                    <h1>{props.name}</h1>
                    <h1 class="text-gray-500">({props.date})</h1>
                </div>
                <div class="flex justify-between">
                    <h1 class="text-red-500">Due Date: {props.dueDate}</h1>
                    <h1 class="text-green-600">Submitted</h1>
                </div>
                <div class="flex justify-around pt-4">
                    <button class="text-green-600 hover:text-green-800">Re-submit</button>
                    <button class="text-blue-600 hover:text-blue-800">Check your submission</button>
                </div>
            </div>
        </Link>
    );
}

export default Assignments;