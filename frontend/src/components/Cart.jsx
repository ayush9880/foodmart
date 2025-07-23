import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, setCart } from "./redux/cartSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await fetch("/api/cart/getCart", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                const data = await res.json();
                if (data.success) {
                    dispatch(setCart(data.cart.items));
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchCart();
    }, [dispatch]);


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
    const handleRemove = async (itemId) => {
        try {
            const res = await fetch(`/api/cart/removeFromCart/${itemId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();
            if (data.success) {
                dispatch(setCart(data.cart.items)); // ✅ sync Redux
            } else {
                alert("Failed to remove item");
            }
        } catch (err) {
            console.error(err);
        }
    };


    const getTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cartItems.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[250px] bg-white rounded-2xl shadow-md p-4"
                        >
                            <div className="relative mb-4">
                                <img
                                    src={product.image.path}
                                    alt="#"
                                    className="w-full h-36 object-contain rounded-xl"
                                />
                                <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow text-gray-600 hover:text-red-500">
                                    <FiHeart />
                                </button>
                            </div>

                            <h3 className="font-medium text-gray-800 text-lg leading-tight">
                                {product.name}
                            </h3>

                            <div className="text-sm text-gray-500 mt-1">
                                Qty: {product.quantity}
                            </div>

                            <div className="text-xl font-bold text-gray-900 mt-2">
                                ₹{(product.price * product.quantity).toFixed(2)}
                            </div>

                            <div className="flex items-center mt-3 gap-2">
                                <button className="bg-gray-100 rounded-full p-1.5">
                                    <AiOutlineMinus size={16} />
                                </button>
                                <span className="text-sm font-medium">{product.quantity}</span>
                                <button className="bg-gray-100 rounded-full p-1.5">
                                    <AiOutlinePlus size={16} />
                                </button>
                                <button
                                    onClick={() => handleRemove(product.id)}
                                    className="ml-auto px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <div className="mt-8 text-right">
                    <h3 className="text-xl font-bold">Total: ₹{getTotal().toFixed(2)}</h3>
                    <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
