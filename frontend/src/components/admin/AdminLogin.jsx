import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function AdminLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let nav = useNavigate();

  let submitHandler = async (e) => {
    e.preventDefault();

    if (email === "admin@123" && password === "12345") {
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
        transition: Bounce,
      });

      // ✅ SAVE A FAKE TOKEN
      localStorage.setItem("adminToken", "token");

      setTimeout(() => nav("/admin/dashboard"), 1000);
    } else {
      toast.error("Invalid admin credentials", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Admin Login</h1>
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

                <button className="bg-cyan-500 text-white rounded-md px-4 py-2 hover:bg-red-500 w-full">
                  Submit
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
