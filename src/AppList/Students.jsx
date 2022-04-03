import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentsData from "../ShowList/Studentsdata";

function Students() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        const token = axios.get("https://randomuser.me/api/?results=11");

        token.then((response) => {
            console.log('data aaya');
            console.log(response.data.results);
            setUsers(response.data.results);
        });
    }, []);

    console.log('Next task')

    return (
        <div className="bg-gray-100 m-6 space-y-2 grow">
            <h1 className=" text-xl font-semibold mb-4">Students List</h1>
            <div className="bg-gray-50 py-6 px-10">
                <div className="flex bg-white flex-wrap justify-around">
                    {users.map((e) => {
                        return (<StudentsData user={e} />
                        )
                    })}

                    <span class="w-56"></span>
                    <span class="w-56"></span>

                </div>
            </div>
        </div>
    );
}

export default Students; 