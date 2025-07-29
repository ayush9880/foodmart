import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart from backend on mount
    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const res = await fetch("/api/user/cart", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const data = await res.json();
            if (data.success) {
                setCartItems(data.cart.items);
            }
        } catch (err) {
            console.error("Failed to fetch cart:", err);
        }
    };

    const handleRemove = async (itemId) => {
        try {
            const res = await fetch(`/api/user/removeFromCart/${itemId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const data = await res.json();
            if (data.success) {
                setCartItems(data.cart.items);
            }
        } catch (err) {
            console.error("Remove failed:", err);
        }
    };

    // const updateQuantity = async (itemId, type) => {
    //     try {
    //         const res = await fetch(`/api/cart/updateQuantity`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //             body: JSON.stringify({ itemId, type }), // type: "inc" or "dec"
    //         });
    //         const data = await res.json();
    //         if (data.success) {
    //             setCartItems(data.cart.items);
    //         }
    //     } catch (err) {
    //         console.error("Quantity update failed:", err);
    //     }
    // };

    // const clearCart = async () => {
    //     try {
    //         const res = await fetch(`/api/cart/clear`, {
    //             method: "DELETE",
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         });
    //         const data = await res.json();
    //         if (data.success) {
    //             setCartItems([]);
    //         }
    //     } catch (err) {
    //         console.error("Failed to clear cart:", err);
    //     }
    // };

    const getTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cartItems.map((product) => {
                            const imgUrl = product.img?.path
                                ? `/uploads/${product.img.path}`
                                : "/placeholder.jpg";

                            return (
                                <div
                                    key={product._id}
                                    className="min-w-[250px] bg-white rounded-2xl shadow-md p-4"
                                >
                                    <div className="relative mb-4">
                                        <img
                                            src={imgUrl}
                                            alt={product.name}
                                            className="w-full h-36 object-contain rounded-xl"
                                        />
                                        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow text-gray-600 hover:text-red-500">
                                            <FiHeart />
                                        </button>
                                    </div>

                                    <h3 className="font-medium text-gray-800 text-lg leading-tight">
                                        {product.name}
                                    </h3>

                                    <div className="text-xl font-bold text-gray-900 mt-2">
                                        ₹{(product.price * product.quantity).toFixed(2)}
                                    </div>

                                    <div className="flex items-center mt-3 gap-2">
                                        <button
                                            onClick={() => updateQuantity(product._id, "dec")}
                                            className="bg-gray-100 rounded-full p-1.5"
                                        >
                                            <AiOutlineMinus size={16} />
                                        </button>
                                        <span className="text-sm font-medium">{product.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(product._id, "inc")}
                                            className="bg-gray-100 rounded-full p-1.5"
                                        >
                                            <AiOutlinePlus size={16} />
                                        </button>

                                        <button
                                            onClick={() => handleRemove(product._id)}
                                            className="ml-auto px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* <div className="mt-8 text-right space-y-4">
                        <h3 className="text-xl font-bold">Total: ₹{getTotal().toFixed(2)}</h3>
                        <button
                            onClick={clearCart}
                            className="mr-4 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Clear All
                        </button>
                        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                            Proceed to Checkout
                        </button>
                    </div> */}
                </>
            )}
        </div>
    );
}
