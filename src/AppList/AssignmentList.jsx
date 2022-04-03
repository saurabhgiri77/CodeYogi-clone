import react from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AllAssignments from "../Data/AllAssignments";
import Assignments from "../ShowList/Assignments";

function AssignmentList() {
    return (
        <div className="bg-gray-100 m-6 items-center grow space-y-2">
            <h1 className=" text-xl font-semibold mb-4">Assignment List</h1>
            <div className="bg-gray-50 py-2">
                {AllAssignments.map((t) => {
                    return (<Assignments id={t.id} key={t.id} name={t.name} number={t.id} date={t.date} dueDate={t.dueDate} />)
                })}
            </div>
        </div>
    );
}

export default AssignmentList;