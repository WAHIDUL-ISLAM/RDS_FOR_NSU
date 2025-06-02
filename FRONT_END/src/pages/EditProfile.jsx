import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
    const navigate = useNavigate();

    // Initial state with the same fields as profile for easy editing
    const [formData, setFormData] = useState({
        cgpa: "3.75",
        probation: "None",
        semester: "6th",
        department: "Computer Science & Engineering",
        studentId: "CSE-2231985",
        fatherName: "Mr. Hasan",
        motherName: "Mrs. Hasan",
        bloodGroup: "B+",
        dob: "2000-01-01",
        phone: "+8801234567890",
        email: "ziad@example.com",
        nationality: "Bangladeshi",
        address: "Dhaka, Bangladesh",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your save logic here (e.g., API call simulation)

        toast.success("Profile saved successfully!", {
            position: "top-right",      // where the toast pops up
            autoClose: 3000,            // hides after 3 seconds
            hideProgressBar: false,     // show progress bar
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        // Optional: after toast disappears, redirect to profile or do other stuff
        setTimeout(() => {
            navigate("/profile");  // if you want to auto-redirect after save
        }, 3100);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 font-inter">
            <div className="bg-white rounded-xl shadow-lg max-w-5xl w-full p-10 border border-gray-200">
                <h1 className="text-center text-3xl font-semibold text-blue-700 mb-10 tracking-wide">
                    Edit Profile
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 font-medium text-base">

                        {/* University Info */}
                        <div>
                            <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-300 pb-2">
                                University Info
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="cgpa">
                                        CGPA
                                    </label>
                                    <input
                                        type="text"
                                        id="cgpa"
                                        name="cgpa"
                                        value={formData.cgpa}
                                        readOnly
                                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="probation">
                                        Probation Status
                                    </label>
                                    <input
                                        type="text"
                                        id="probation"
                                        name="probation"
                                        value={formData.probation}
                                        readOnly
                                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="semester">
                                        Current Semester
                                    </label>
                                    <input
                                        type="text"
                                        id="semester"
                                        name="semester"
                                        value={formData.semester}
                                        readOnly
                                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="department">
                                        Department
                                    </label>
                                    <input
                                        type="text"
                                        id="department"
                                        name="department"
                                        value={formData.department}
                                        readOnly
                                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="studentId">
                                        Student ID
                                    </label>
                                    <input
                                        type="text"
                                        id="studentId"
                                        name="studentId"
                                        value={formData.studentId}
                                        readOnly
                                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 cursor-not-allowed"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Family Info */}
                        <div>
                            <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-300 pb-2">
                                Family Info
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="fatherName">
                                        Father's Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fatherName"
                                        name="fatherName"
                                        value={formData.fatherName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="motherName">
                                        Mother's Name
                                    </label>
                                    <input
                                        type="text"
                                        id="motherName"
                                        name="motherName"
                                        value={formData.motherName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="bloodGroup">
                                        Blood Group
                                    </label>
                                    <select
                                        id="bloodGroup"
                                        name="bloodGroup"
                                        value={formData.bloodGroup}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="dob">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div>
                            <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-300 pb-2">
                                Personal Info
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="nationality">
                                        Nationality
                                    </label>
                                    <input
                                        type="text"
                                        id="nationality"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1" htmlFor="address">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-12 flex justify-center gap-6">
                        <ToastContainer />
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition duration-300"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/profile")}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-10 py-3 rounded-lg shadow-md transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
