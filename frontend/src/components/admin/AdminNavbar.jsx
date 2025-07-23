export default function AdminNavbar() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-green-100 shadow-sm">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
                <img src="/foodmart.png" alt="FoodMart" className="w-12 h-12" />
                <div className="leading-tight">
                    <span className="block text-2xl font-extrabold text-green-600">
                        Food<span className="text-orange-500">Mart</span>
                    </span>
                    <span className="block text-lg  text-gray-400">Admin Panel</span>
                </div>
            </div>

            {/* Admin Profile */}
            <div className="flex items-center gap-4">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Admin"
                    className="w-10 h-10 rounded-full border-2 border-green-200"
                />
                <span className="text-gray-700 font-medium">Harry Potter</span>
            </div>
        </header>
    );
}
