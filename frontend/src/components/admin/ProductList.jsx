import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";
import { Link, NavLink } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/product/allProduct");
      const data = await res.json();
      console.log(data);


      if (data.success) {
        setProducts(data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`/api/product/deleteProduct/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        alert("Product deleted successfully");
        fetchProducts(); // Refresh list
      } else {
        alert("Failed to delete product: " + data.message);
      }
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Error deleting product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product List</h2>
        <Link
          to="/admin/products/add"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          + Add Product
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b font-medium">Name</th>
                <th className="px-6 py-3 border-b font-medium">Price</th>
                <th className="px-6 py-3 border-b font-medium">Stock</th>
                <th className="px-6 py-3 border-b font-medium">Category</th>
                <th className="px-6 py-3 border-b font-medium">Description</th>
                <th className="px-6 py-3 border-b font-medium">Image</th>
                <th className="px-6 py-3 border-b font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-6">
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">{product.name}</td>
                    <td className="px-6 py-4 border-b">${product.price}</td>
                    <td className="px-6 py-4 border-b">{product.stock}</td>
                    <td className="px-6 py-4 border-b">{product.category}</td>
                    <td className="px-6 py-4 border-b max-w-xs truncate">
                      {product.description || "N/A"}
                    </td>
                    <td className="px-6 py-4 border-b">
                      {product.image?.path ? (
                        <img
                          src={product.image.path}
                          alt={product.name}
                          className="h-12 w-12 rounded object-cover border"
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className="px-6 py-4 border-b space-x-2">
                     { console.log(product._id)}
                      <NavLink
                        to={`/admin/products/edit/${product._id}`}
                        className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 transition"
                      >
                        Edit
                      </NavLink>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
