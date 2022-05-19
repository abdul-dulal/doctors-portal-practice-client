import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.Init";
import useAdmin from "./Hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">MyAppointment</Link>
          </li>
          <li>
            <Link to="/dashboard/myreview">Myreview</Link>
          </li>
          <li>
            <Link to="/dashboard/alluser">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
