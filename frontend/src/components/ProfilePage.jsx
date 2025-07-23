import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await fetch(
          "/api/user/getProfile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch profile");
        }

        const data = await response.json();
        setProfile(data.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/"); // Redirect to login or home
  };

  const handleUpdate = () => {
    // Redirect to your update profile form/page
    navigate("/update-profile"); // You need to create this page separately
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 mt-10 font-semibold">{error}</p>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-cyan-200">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-cyan-600 mb-6 text-center">
          My Profile
        </h2>
        {profile ? (
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 font-semibold">Name:</p>
              <p className="text-lg">{profile.name}</p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Email:</p>
              <p className="text-lg">{profile.email}</p>
            </div>

            {/* Add more profile fields here */}

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleUpdate}
                className="flex-1 bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition"
              >
                Update Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center">No profile data found.</p>
        )}
      </div>
    </div>
  );
}
