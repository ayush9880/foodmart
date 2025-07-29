import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState({
    city: "",
    state: "",
    pincode: ""
  });
  const [img, setImg] = useState(null);

  const nav = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    // ✅ Create FormData instead of JSON
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("contact", contact);
    formData.append("city", address.city);
    formData.append("state", address.state);
    formData.append("pincode", address.pincode);

    if (img) {
      formData.append("img", img);
    }

    try {
      const response = await fetch("/api/user/registration", {
        method: "POST",
        body: formData // ✅ send FormData
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        toast.success(result.message || "Registered successfully!");
        setTimeout(() => nav('/Login'), 2000);
      } else {
        toast.error(result.message || "Something went wrong");
      }

    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Create Account</h2>

        <form onSubmit={submitHandler} className="space-y-3">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            required
          />

          {/* City */}
          <input
            type="text"
            placeholder="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
          />

          {/* State */}
          <input
            type="text"
            placeholder="State"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
          />

          {/* Pincode */}
          <input
            type="text"
            placeholder="Pincode"
            value={address.pincode}
            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
          />

          {/* Contact */}
          <input
            type="tel"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            required
          />

          {/* Image Upload */}
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              name="img"
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-3 file:py-1 file:px-3
                file:rounded-full file:border-0
                file:text-sm file:font-medium
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition"
          >
            Register
          </button>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
