import React, { useState, useEffect } from "react";

export default function TrendingProducts() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product/allProduct");
        const data = await res.json();
        if (data.success) {
          setProducts(data.data);
          const initialQuantities = {};
          data.data.forEach((p) => {
            initialQuantities[p._id] = 1;
          });
          setQuantities(initialQuantities);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleAddToCart = async (product) => {
    const qty = quantities[product._id] || 1;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to add items to your cart.");
        return;
      }

      // Make sure you ALWAYS send the correct image path!
      const imgPath = product.image?.path
        ? product.image.path
        : typeof product.image === "string"
          ? product.image
          : "placeholder.jpg";

      const res = await fetch("/api/user/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          price: product.price,
          quantity: qty,
          img: { path: imgPath }, // ✅ Wrap in object if your backend expects that!
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert(`✅ Added ${product.name} (Qty: ${qty}) to cart!`);
      } else {
        console.error(data);
        alert("❌ Failed to add to cart: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while adding to cart.");
    }
  };


  return (
    <div className="px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Trending Products</h2>
        {visibleCount < products.length && (
          <button
            onClick={handleViewMore}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            View More
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-6">
        {products.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          products.slice(0, visibleCount).map((product) => {
            const imgUrl = product.image?.path
              ? `/uploads/${product.image.path}`
              : product.image
                ? `/uploads/${product.image.replace(/\\/g, "/")}`
                : "/placeholder.jpg";

            return (
              <div
                key={product._id}
                className="w-[278px] rounded-lg overflow-hidden shadow-lg bg-white p-4"
              >
                <div className="relative">
                  <img className="w-full h-48 object-cover rounded-md"
                    src={product.image.path}
                    alt={product.name}
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -30%
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-1">
                    <span className="text-yellow-500 text-sm font-semibold">
                      4.5
                    </span>
                    <svg
                      className="w-4 h-4 text-yellow-500 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">
                    ₹{product.price?.toFixed(2)}
                  </p>
                </div>

                <div className="mt-4 flex items-center">
                  <button
                    onClick={() => decreaseQuantity(product._id)}
                    className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l"
                  >
                    -
                  </button>
                  <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
                    {quantities[product._id] || 1}
                  </span>
                  <button
                    onClick={() => increaseQuantity(product._id)}
                    className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
