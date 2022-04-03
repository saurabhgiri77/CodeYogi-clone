import react from "react";

function Lectures(props) {
    return (
        <div class="p-4  mx-10 my-4 bg-white space-y-2 mb-2 border rounded-lg text-lg">
            <div class="flex space-x-2 font-semibold">
                <h1>Lecture #{props.number}</h1>
                <h1 class="text-gray-500">({props.date})</h1>
            </div>
            <div class="flex justify-between">
                <h1 class="text-gray-500">Duration: {props.time}</h1>
                <div></div>
            </div>
            <div class="flex justify-around pt-4">
                <button class="text-gray-600 text-base hover:text-green-800">Watch/Download Recording</button>
            </div>
        </div>
    );
}

export default Lectures;