import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEdit } from "react-icons/fa";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 font-inter">
            <div className="bg-white rounded-xl shadow-lg max-w-5xl w-full p-10 border border-gray-200">
                {/* Profile Icon and Title */}
                <div className="flex flex-col items-center mb-10">
                    <FaUserCircle className="text-blue-700 text-[110px]" />
                    <h1 className="mt-4 text-3xl font-semibold text-gray-900 tracking-wide">
                        ZIAD's Profile
                    </h1>
                </div>

                {/* 3 Column Grid for Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 font-medium text-base">

                    {/* University Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-300 pb-2">
                            University Info
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">CGPA</label>
                                <p className="text-gray-900 font-semibold">3.75</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Probation Status</label>
                                <p className="text-gray-900 font-semibold">None</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Current Semester</label>
                                <p className="text-gray-900 font-semibold">6th</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Department</label>
                                <p className="text-gray-900 font-semibold">Computer Science & Engineering</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Student ID</label>
                                <p className="text-gray-900 font-semibold">CSE-2231985</p>
                            </div>
                        </div>
                    </div>

                    {/* Family Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-300 pb-2">
                            Family Info
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Father's Name</label>
                                <p className="text-gray-900 font-semibold">Mr. Hasan</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Mother's Name</label>
                                <p className="text-gray-900 font-semibold">Mrs. Hasan</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Blood Group</label>
                                <p className="text-gray-900 font-semibold">B+</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Date of Birth</label>
                                <p className="text-gray-900 font-semibold">01 Jan 2000</p>
                            </div>
                        </div>
                    </div>

                    {/* Personal Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-300 pb-2">
                            Personal Info
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Phone</label>
                                <p className="text-gray-900 font-semibold">+8801234567890</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Email</label>
                                <p className="text-gray-900 font-semibold">ziad@example.com</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Nationality</label>
                                <p className="text-gray-900 font-semibold">Bangladeshi</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Address</label>
                                <p className="text-gray-900 font-semibold">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Edit Button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => navigate("/edit-profile")}
                        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition duration-300 inline-flex items-center gap-3 text-lg"
                    >
                        <FaEdit />
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
