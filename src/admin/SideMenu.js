import React, { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const SideMenu = ({ setControl, control }) => {
  const { user, admin } = useAuth();
  const [sidenav, setSidenav] = useState(true);

  //toggling the side nav
  const handleNav = () => {
    setSidenav(!sidenav);
  };

  // auto hide
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1098) {
      setSidenav(false);
    } else {
      setSidenav(true);
    }
  });

  return (
    <div>
      {sidenav && (
        <>
          <nav className="flex fixed flex-col items-center w-72 bg-white h-screen px-2">
            <div className="mt-24 flex flex-col items-center justify-center space-y-3">
              {/* image  */}
              <img
                src={user?.photoURL}
                className="w-28 h-28 rounded-full object-contain mx-auto"
                alt={user.displayName}
              />
              {/* user info  */}
              <div>
                <h1 className="text-center font-primary text-gray-700">
                  {user.displayName}
                </h1>
                <p className="text-center font-primary text-gray-500 text-sm">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="mt-10 mb-4">
              <ul className="flex flex-col space-y-3">
                <li
                  className={`${
                    control === "manageBooking" &&
                    "bg-transparent text-gray-900 border-2 border-gray-600 hover:bg-gray-200"
                  } flex items-center rounded-md py-3 cursor-pointer px-2`}
                >
                  <div
                    className="flex items-center space-x-3"
                    onClick={() => setControl("manageBooking")}
                  >
                    <span className="ml-2 font-primary">Manage-Bookings</span>
                  </div>
                </li>
                {admin && (
                  <div>
                    <li
                      className={`${
                        control === "makeAdmin" &&
                        "bg-transparent text-gray-900 border-2 border-gray-600 hover:bg-gray-200"
                      } flex items-center rounded-md py-3 cursor-pointer px-2`}
                    >
                      <div
                        className="flex items-center space-x-3"
                        onClick={() => setControl("makeAdmin")}
                      >
                        <span className="ml-2 font-primary">Make Admin</span>
                      </div>
                    </li>
                    <li
                      className={`${
                        control === "launchNewDrone" &&
                        "bg-transparent text-gray-900 border-2 border-gray-600 hover:bg-gray-200"
                      } flex items-center  rounded-md py-3 cursor-pointer px-2`}
                    >
                      <div
                        className="flex items-center space-x-3"
                        onClick={() => setControl("launchNewDrone")}
                      >
                        <span className="ml-2 font-primary">
                          Launch New Gaming Laptop
                        </span>
                      </div>
                    </li>
                  </div>
                )}
                {!admin && (
                  <div>
                    <li
                      className={`${
                        control === "requestNewDrone" &&
                        "bg-transparent text-gray-900 border-2 border-gray-600 hover:bg-gray-200"
                      } flex items-center  rounded-md py-3 cursor-pointer px-2`}
                    >
                      <div
                        className="flex items-center space-x-3"
                        onClick={() => setControl("requestNewDrone")}
                      >
                        <span className="ml-2 font-primary">
                          Request Upcoming Gaming Laptops
                        </span>
                      </div>
                    </li>
                  </div>
                )}
                <li
                  className={`${
                    control === "review" &&
                    "bg-transparent text-gray-900 border-2 border-gray-600 hover:bg-gray-200"
                  } flex items-center  rounded-md py-3 cursor-pointer px-2`}
                >
                  <div
                    className="flex items-center space-x-3"
                    onClick={() => setControl("review")}
                  >
                    <span className="ml-2 font-primary">Write A Review</span>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}

      {/* //menu icons  */}
      <div
        className=" block fixed bottom-10 left-10 bg-white p-2 rounded-full cursor-pointer shadow-xl border border-primary"
        onClick={handleNav}
      >
        <MdOutlineArrowForwardIos className="text-2xl text-primary" />
      </div>
    </div>
  );
};

export default SideMenu;
