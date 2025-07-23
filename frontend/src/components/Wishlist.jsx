import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, setWishlist } from "./redux/wishlistSlice";
import { FiHeart } from "react-icons/fi";

export default function Wishlist() {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        dispatch(setWishlist(storedWishlist));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const handleRemove = (id) => {
        dispatch(removeFromWishlist(id));
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Your Wishlist</h2>

            {wishlistItems.length === 0 ? (
                <p className="text-gray-600">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[250px] bg-white rounded-2xl shadow-md p-4"
                        >
                            <div className="relative mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-36 object-contain rounded-xl"
                                />
                                <button
                                    onClick={() => handleRemove(product.id)}
                                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow text-red-500 hover:text-gray-600"
                                >
                                    <FiHeart />
                                </button>
                            </div>

                            <h3 className="font-medium text-gray-800 text-lg leading-tight">
                                {product.name}
                            </h3>

                            <div className="text-sm text-gray-500 mt-1">
                                Saved for later
                            </div>

                            <div className="text-xl font-bold text-gray-900 mt-2">
                                ₹{product.price.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
