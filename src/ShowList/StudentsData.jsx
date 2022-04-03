import React from "react";

function StudentsData({ user }) {
    return (
        <div className="m-2 text-lg p-4">

            <div className="shrink-0">
                <img className="h-28 w-48 object-cover rounded-lg" src={user.picture.large} />
                <div className="text-sm mt-4 space-y-2">
                    <h3 className="">{user.name.title} {user.name.first} {user.name.last}</h3>
                    <h3 className="text-indigo-600">{user.login.password}</h3>
                </div>
                <div className="flex mt-4">
                    <a href="https://twitter.com/explore"><img className="h-6" src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png" /></a>
                    <a href="https://www.linkedin.com/signup"><img className="h-6 ml-2 bg-gray-300" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/linkedin_logo_square_icon_134016.png" /></a>
                </div>
            </div>
        </div>
    );
}

export default StudentsData;