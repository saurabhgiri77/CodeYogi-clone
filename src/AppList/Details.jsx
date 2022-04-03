import react from "react";
import { useParams } from "react-router-dom";
import AllAssignments from "../Data/AllAssignments";

function Details() {

    const data = useParams()
    console.log(data)

    const select = +(data.id);
    const selectAssignment = AllAssignments.find(t => t.id === select);
    console.log(selectAssignment.name)

    return (
        <div class="h-screen bg-gray-100 flex flex-col justify-center">
            <div class="p-4 bg-white rounded-lg space-y-2 mb-2 mx-8">
                <h1 class="border-b-2 pb-4 font-semibold">#{selectAssignment.Assignmentnum} Assignment Details</h1>
                <div class="text-gray-500">
                    <div class="flex justify-between border-b-2 py-4">
                        <h1>Title</h1>
                        <h1>{selectAssignment.name}</h1>
                    </div>
                    <div class="flex justify-between border-b-2 py-4 ">
                        <h1>Due date</h1>
                        <h1>{selectAssignment.dueDate}</h1>
                    </div>
                    <div class="flex justify-between border-b-2 py-4">
                        <h1>Description</h1>
                        <h1></h1>
                    </div>
                    <div class="space-x-8 py-4 pb-8">
                        <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg">Re-submit</button>
                        <button class="text-indigo-500">See Your Submission</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;