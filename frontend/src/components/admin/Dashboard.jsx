import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

export default function Dashboard() {
    const [userCount, setUserCount] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const [categoryCounts, setCategoryCounts] = useState({});

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch total users
                const userRes = await fetch("/api/email/allUsers");
                const userData = await userRes.json();
                if (userData.success) {
                    setUserCount(userData.data.length);
                }

                // Fetch total products
                const productRes = await fetch("/api/email/allProduct");
                const productData = await productRes.json();
                if (productData.success) {
                    const products = productData.data;
                    setProductCount(products.length);

                    // Count products by category
                    const counts = {};
                    products.forEach((product) => {
                        const category = product.category || "Uncategorized";
                        counts[category] = (counts[category] || 0) + 1;
                    });
                    setCategoryCounts(counts);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchStats();
    }, []);

    return (
        <AdminLayout>
            <h2 className="text-2xl font-bold mb-4">Welcome Admin</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white shadow rounded-lg">
                    <h3 className="text-xl font-semibold">Total Users</h3>
                    <p className="mt-2 text-3xl font-bold text-blue-600">{userCount}</p>
                </div>

                <div className="p-6 bg-white shadow rounded-lg">
                    <h3 className="text-xl font-semibold">Total Products</h3>
                    <p className="mt-2 text-3xl font-bold text-green-600">{productCount}</p>
                </div>


            </div>
        </AdminLayout>
    );
}
