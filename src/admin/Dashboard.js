import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AddNewTourPackage from "./AddNewTourPackage";
import MakeAdmin from "./MakeAdmin";
import ManageBookingsScreen from "./ManageBookingsScreen";
import RequestNewDrone from "./RequestNewDrone";
import Review from "./Review";
import SideMenu from "./SideMenu";

const Dashboard = () => {
  const [control, setControl] = useState("manageBooking");

  return (
    <div>
      <Navbar
        bg="bg-gray-800"
        textColor="text-white"
        width="max-w-screen-2xl"
      />
      <main className="w-full h-screen grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6">
        <div className="col-span-1 bg-gray-100">
          <SideMenu setControl={setControl} control={control} />
        </div>
        <div className="col-span-5 pt-24 bg-gray-100">
          {control === "manageBooking" && <ManageBookingsScreen />}
          {control === "makeAdmin" && <MakeAdmin />}
          {control === "launchNewDrone" && <AddNewTourPackage />}
          {control === "requestNewDrone" && <RequestNewDrone />}
          {control === "review" && <Review />}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
