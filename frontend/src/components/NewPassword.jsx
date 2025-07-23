import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function NewPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const refresh_token = localStorage.getItem("forgot_token"); // previously stored after OTP sent
        if (!refresh_token) {
            toast.error("Session expired. Please restart the process.");
            return nav('/forgot-password');
        }

        try {
            const res = await fetch("/api/email/new-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ refresh_token, password }),
            });

            const data = await res.json();

            if (data.success) {
                toast.success(data.message || "Password updated successfully");

                // Clear sensitive info
                localStorage.removeItem("forgot_token");
                localStorage.removeItem("forgot_email");

                setTimeout(() => nav("/login"), 2000);
            } else {
                toast.error(data.message || "Something went wrong");
            }
        } catch (err) {
            toast.error("Server error. Try again later.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="New Password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Confirm Password"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                    Set New Password
                </button>
                <ToastContainer />
            </form>
        </div>
    );
}
