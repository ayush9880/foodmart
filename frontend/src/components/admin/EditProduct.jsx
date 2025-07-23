import { useEffect, useState } from "react";
import { FiCloudLightning } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product with id:", id);
        const res = await fetch(`/api/product/getproduct/${id}`);
        const data = await res.json();
        console.log(data)
        if (data.success) {
          setFormData({
            name: data.data.name || "",
            price: data.data.price || "",
            stock: data.data.stock || "",
            category: data.data.category || "",
            description: data.data.description || "",
            image: null, // file input is always empty
          });
        } else {
          alert("Failed to fetch product");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("price", formData.price);
      form.append("stock", formData.stock);
      form.append("category", formData.category);
      form.append("description", formData.description);
      if (formData.image) {
        form.append("img", formData.image);
      }

      const res = await fetch(`/api/product/updateProduct/${id}`, {
        method: "PUT",
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        alert("Product updated successfully");
        navigate("/admin/products");
      } else {
        alert("Failed to update product");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating product");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Stock</label>
          <input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
