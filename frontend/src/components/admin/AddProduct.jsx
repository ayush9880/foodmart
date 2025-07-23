import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminLayout";

export default function AddProduct() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        category: "",
        description: "",
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });
        if (file) {
            data.append("img", file);
        }

        try {
            const res = await fetch("/api/product/addProduct", {
                method: "POST",
                body: data,
            });
            const result = await res.json();
            if (result.success) {
                alert("Product added!");
                navigate("/admin/products");
            } else {
                alert("Error: " + result.message);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };

    return (
        <AdminLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg shadow"
                    encType="multipart/form-data"
                >
                    <h2 className="text-xl font-bold mb-4 text-center">Add Product</h2>

                    <div className="mb-3">
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-1.5 rounded text-sm"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block font-medium mb-1">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-1.5 rounded text-sm"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block font-medium mb-1">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-1.5 rounded text-sm"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block font-medium mb-1">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-1.5 rounded text-sm"
                        >
                            <option value="">Select category</option>
                            <option value="Beverages">Fruits and Vegetables</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Produce">Produce</option>
                            <option value="Frozen">Frozen</option>
                            <option value="Personal Care">Personal Care</option>
                            <option value="Household">Household</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="block font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border px-3 py-1.5 rounded text-sm"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-1">Image</label>
                        <input
                            type="file"
                            name="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
}
