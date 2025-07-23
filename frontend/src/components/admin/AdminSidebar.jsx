import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function AdminSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    };

    return (
        <aside className="w-60 bg-gradient-to-b from-green-50 to-white shadow-lg h-screen flex flex-col justify-between border-r border-green-100">
            <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                    <NavLink to="/" className="flex items-center space-x-3">
                        <img
                            src="/foodmart.png"
                            alt="FoodMart Logo"
                            className="h-14 w-14 object-contain"
                        />
                        <div className="leading-tight">
                            <span className="block text-2xl font-extrabold text-green-600">
                                Food<span className="text-orange-500">Mart</span>
                            </span>
                            <span className="block text-xs text-gray-500">Admin Panel</span>
                        </div>
                    </NavLink>
                </div>

                <nav className="flex flex-col gap-2">
                    <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
                    >
                        🏠 Dashboard
                    </Link>
                    <Link
                        to="/admin/users"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
                    >
                        👥 Users
                    </Link>
                    <Link
                        to="/admin/products"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
                    >
                        🛒 Products
                    </Link>
                   
                </nav>
            </div>

            <div className="p-6 border-t border-green-100">
                <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition"
                >
                    🚪 Logout
                </button>
            </div>
        </aside>
    );
}
