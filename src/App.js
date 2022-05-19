import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componetns/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./componetns/Home";
import Login from "./componetns/Login";
import SignUp from "./componetns/SignUp";
import Appoinment from "./componetns/Appoinment";
import { ToastContainer } from "react-toastify";
import DashBoard from "./componetns/DashBoard";
import MyAppointment from "./componetns/MyAppointment";
import Myreview from "./componetns/Myreview";
import AllUsers from "./componetns/AllUsers";
import RequerAdmin from "./componetns/RequirAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="dashboard" element={<DashBoard />}>
          <Route index element={<MyAppointment />} />
          <Route path="myreview" element={<Myreview />} />
          <Route
            path="alluser"
            element={
              <RequerAdmin>
                {" "}
                <AllUsers />
              </RequerAdmin>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
