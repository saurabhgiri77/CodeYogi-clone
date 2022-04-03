import react from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function MainLayout() {
    return (
        <div className="flex items-stretch h-full top-0">
            <SideBar />
            <div className="bg-gray-100 p-6 grow">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;