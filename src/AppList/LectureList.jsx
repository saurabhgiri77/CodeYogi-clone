import react from "react";
import LectureRecords from "../Data/LectureRecords";
import Lectures from "../ShowList/Lectures";

function LectureList() {
    return (
        <div className="bg-gray-100 m-6 items-center grow space-y-2">
            <h1 className=" text-xl font-semibold mb-4">Lecture List</h1>
            <div className="bg-gray-50 py-2">
                {LectureRecords.map((t) =>
                    <Lectures key={t.id} id={t.id} number={t.number} date={t.date} time={t.time} />
                )}
            </div>
        </div>
    );
}

export default LectureList;