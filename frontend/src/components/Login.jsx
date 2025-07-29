import React, { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let nav = useNavigate();

    let submitHandler = async (e) => {
        e.preventDefault();

        try {
            let response = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const res = await response.json();
            console.log(res);
            if (res.success) {
                localStorage.setItem("token", res.token);
                localStorage.setItem("userId", res.userId);
                toast.success("Login successful", {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
                setTimeout(() => nav('/'), 1000);
            } else {
                toast.error(res.message || "User not defined", {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error(error.message || "Something went wrong", {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold mb-6">Login</h1>
                        <form onSubmit={submitHandler}>
                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>


                                <div className="text-right text-sm">
                                    <Link to="/forgetPassword" className="text-blue-500 hover:underline">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-cyan-500 text-white rounded-md px-4 py-2 hover:bg-red-500 w-full"
                                >
                                    Login
                                </button>

                            </div>
                        </form>

                        {/* Google Login Button (unchanged) */}
                        <div className="mt-6 w-full flex justify-center">
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
                                <svg className="h-6 w-6 mr-2" /> {/* keep your SVG here */}
                                <NavLink to='/register'>Ragister Here</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
