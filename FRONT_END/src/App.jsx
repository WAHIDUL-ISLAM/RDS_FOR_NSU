import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AccountStatus from "./pages/AccountStatus";
import CourseRegistration from "./pages/CourseRegistration";
import FacultyProfile from "./pages/FacultyProfile";
import WishedCourses from "./pages/WishedCourses";
// import MyCourses from "./pages/MyCourses";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/account-status" element={<AccountStatus />} />
        <Route path="/course-registration" element={<CourseRegistration />} />
        <Route path="/faculty-profile" element={<FacultyProfile />} />
        <Route path="/wished-courses" element={<WishedCourses />} />
        {/* <Route path="/my-courses" element={<MyCourses />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
