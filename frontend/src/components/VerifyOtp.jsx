import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function VerifyOtp() {
    const [otp, setOtp] = useState('');
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("forgot_token");

        if (!token) {
            toast.error("Session expired. Please restart the process.");
            return nav("/forgot-password");
        }

        try {
            const res = await fetch("/api/email/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp, token }),
            });

            const data = await res.json();

            if (data.refresh_token) {
                toast.success("OTP verified successfully");

                // Save refresh_token for password reset
                localStorage.setItem("refresh_token", data.refresh_token);

                // Navigate to reset-password screen
                setTimeout(() => nav("/newPassword"), 2000);
            } else {
                toast.error(data.message || "Invalid OTP");
            }

        } catch (error) {
            toast.error("Failed to verify OTP");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Verify OTP</h2>
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Enter OTP"
                    required
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
                    Verify OTP
                </button>
                <ToastContainer />
            </form>
        </div>
    );
}
