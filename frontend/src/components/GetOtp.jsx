import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function GetOtp() {
    const [email, setEmail] = useState('');
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/email/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (data.success) {
                toast.success(data.message);
                localStorage.setItem("forgot_token", data.token);
                localStorage.setItem("forgot_email", email);
                setTimeout(() => nav('/varifyOtp'), 2000);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold mb-6">Forgot Password</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="relative">
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                                        placeholder="Email Your Email" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all">Email Address</label>
                                </div>
                                <button className="bg-cyan-500 text-white rounded-md px-4 py-2 hover:bg-red-500 w-full">
                                    Send OTP
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
