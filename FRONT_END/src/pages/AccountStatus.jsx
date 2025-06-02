import React, { useState } from "react";
import { Banknote, CreditCard, Smartphone } from "lucide-react";
import { toast } from "react-hot-toast";

const AccountStatus = () => {
    const [dueAmount, setDueAmount] = useState(18000);
    const [paymentHistory, setPaymentHistory] = useState([
        { semester: "Fall 2024", amount: 20000 },
        { semester: "Spring 2024", amount: 17500 },
    ]);

    const handlePayment = (method) => {
        toast.success(`Redirecting to ${method} payment gateway...`);
        // 👉 Here you'll call your PHP backend via fetch/Axios to handle payment
    };

    return (
        <div className="max-w-4xl mx-auto p-6 pt-24 bg-gradient-to-br from-gray-50 to-white shadow-xl rounded-3xl my-8 space-y-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">📊 Account Overview</h2>

            {/* Current Due */}
            <div className="p-6 bg-white rounded-2xl shadow border border-blue-200 flex justify-between items-center hover:shadow-lg transition duration-300">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Current Semester Due</h3>
                    <p className="text-gray-600 mt-1">You need to pay for this semester</p>
                </div>
                <span className="text-3xl font-bold text-blue-700">৳ {dueAmount}</span>
            </div>

            {/* Payment History */}
            <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">💾 Payment History</h3>
                <div className="space-y-3">
                    {paymentHistory.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-white border border-gray-200 p-4 rounded-xl hover:bg-blue-50 transition"
                        >
                            <div>
                                <p className="font-semibold text-gray-800">{item.semester}</p>
                            </div>
                            <span className="text-blue-700 font-bold">৳ {item.amount}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Payment Options */}
            <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">💳 Choose Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                        onClick={() => handlePayment("Bank Payment")}
                        className="flex flex-col items-center justify-center p-6 bg-white border-2 border-blue-200 rounded-2xl hover:bg-blue-100 hover:border-blue-500 transition duration-300"
                    >
                        <Banknote size={36} className="text-blue-600 mb-2" />
                        <span className="font-semibold text-gray-800">Bank Payment</span>
                    </button>

                    <button
                        onClick={() => handlePayment("bKash")}
                        className="flex flex-col items-center justify-center p-6 bg-white border-2 border-blue-200 rounded-2xl hover:bg-blue-100 hover:border-pink-500 transition duration-300"
                    >
                        <Smartphone size={36} className="text-pink-600 mb-2" />
                        <span className="font-semibold text-gray-800">bKash</span>
                    </button>

                    <button
                        onClick={() => handlePayment("Visa Card")}
                        className="flex flex-col items-center justify-center p-6 bg-white border-2 border-blue-200 rounded-2xl hover:bg-blue-100 hover:border-green-500 transition duration-300"
                    >
                        <CreditCard size={36} className="text-green-600 mb-2" />
                        <span className="font-semibold text-gray-800">Visa Card</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountStatus;
