import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Navbar() {
    const cartItems = useSelector((state) => state.cart.items);
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const [user, setUser] = useState(null);
    const [showProfile, setShowProfile] = useState(false);
    const profileRef = useRef(null);

    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const products = ["Apple", "Banana", "Rice", "Paneer", "Milk", "Ladoo"];

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setUser(null);
                return;
            }
            try {
                const res = await fetch("/api/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await res.json();
                if (data.success) {
                    setUser(data.user);
                } else {
                    setUser(null);
                }
            } catch (err) {
                console.error("Error fetching profile:", err);
                setUser(null);
            }
        };

        fetchProfile();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (query.trim() === "") {
            setFilteredProducts([]);
        } else {
            const results = products.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(results);
        }
    }, [query]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setShowProfile(false);
        alert("Logged out!");
    };

    return (
        <header className="border-b flex flex-wrap items-center justify-between p-4 shadow-md relative">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <NavLink to="/" className="flex items-center space-x-3">
                    <img src="/foodmart.png" alt="FoodMart" className="h-14 w-14" />
                    <div>
                        <span className="block text-2xl font-bold text-green-600">
                            Food<span className="text-orange-500">Mart</span>
                        </span>
                        <span className="block text-sm text-gray-500">Grocery Store</span>
                    </div>
                </NavLink>
                <button className="text-gray-800 md:hidden">
                    <FaBars size={26} />
                </button>
            </div>

            {/* Category */}
            <div className="mb-4 w-full md:mb-0 md:w-auto md:mr-4">
                <select className="border border-gray-300 rounded-lg p-2 w-full md:w-auto">
                    <option value="">All Categories</option>
                    <option value="fruits">Fruits</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>

            {/* Search */}
            <div className="mb-4 w-full md:mb-0 md:w-1/4 relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="bg-gray-100 border-2 border-gray-300 focus:border-orange-500 p-3 pl-10 rounded-lg w-full"
                />
                <svg
                    className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0012.3 12.3z"
                    />
                </svg>

                {filteredProducts.length > 0 && (
                    <ul className="absolute top-14 left-0 w-full bg-white border rounded shadow z-50">
                        {filteredProducts.map((item, idx) => (
                            <li
                                key={idx}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setQuery(item);
                                    setFilteredProducts([]);
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Links & Icons */}
            <nav className="w-full md:w-auto md:flex md:items-center">
                <ul className="flex flex-wrap items-center justify-center md:space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className="block py-2 px-3 text-gray-700 hover:text-orange-600"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/support"
                            className="block py-2 px-3 text-gray-700 hover:text-orange-600"
                        >
                            Support? <span className="font-bold">+91-9294805256</span>
                        </NavLink>
                    </li>

                    {/* Account/Profile */}
                    {/* Account/Profile */}
                    <li className="relative" ref={profileRef}>
                        {!user ? (
                            <NavLink
                                to="/login"
                                className="flex items-center py-2 px-3 text-gray-700 hover:text-orange-600"
                            >
                                <FaUser size={22} className="mr-1" /> Account
                            </NavLink>
                        ) : (
                            <>
                                <button
                                    onClick={() => setShowProfile(!showProfile)}
                                    className="flex items-center space-x-2 py-2 px-3 text-gray-700 hover:text-orange-600"
                                >
                                    <img
                                        src={user.image || "https://via.placeholder.com/40"}
                                        alt="User"
                                        className="w-8 h-8 rounded-full border-2 border-green-200"
                                    />
                                    <span className="font-medium">{user.name}</span>
                                </button>

                                {showProfile && (
                                    <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg p-4 w-56 z-50">
                                        <div className="flex flex-col mb-2">
                                            <p className="font-semibold">{user.name}</p>
                                            <p className="text-gray-500 text-sm">{user.email}</p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="mt-2 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </li>


                    <li>
                        <NavLink
                            to="/wishlist"
                            className="flex items-center py-2 px-3 text-gray-700 hover:text-orange-600"
                        >
                            <FaHeart size={22} className="mr-1" /> Wishlist
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/cart"
                            className="flex items-center py-2 px-3 text-gray-700 hover:text-orange-600"
                        >
                            <FaShoppingCart size={22} className="mr-1" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
