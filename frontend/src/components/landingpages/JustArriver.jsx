import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const products = [
    {
        id: 1,
        name: "Sunstar Fresh Melon Juice",
        image: "https://themewagon.github.io/FoodMart/images/post-thumb-2.jpg",
        price: 18.0,
        rating: 4.5,
        unit: "1 UNIT",
    },
    {
        id: 2,
        name: "Sunstar Fresh Melon Juice",
        image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoketchup.png",
        price: 18.0,
        rating: 4.5,
        unit: "1 UNIT",
    },
    {
        id: 3,
        name: "Sunstar Fresh Melon Juice",
        image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoes.png",
        price: 18.0,
        rating: 4.5,
        unit: "1 UNIT",
    },
    {
        id: 4,
        name: "Sunstar Fresh Melon Juice",
        image: "https://static3.tcdn.com.br/img/img_prod/803374/choco_soy_biscuit_tradicional_un_30g_589_1_26fd984483c757eeb5d1829fbd717452.jpg",
        price: 18.0,
        rating: 4.5,
        unit: "1 UNIT",
    },
    {
        id: 5,
        name: "Sunstar Fresh Melon Juice",
        image: "/thumb-tomatoketchup.png",
        price: 18.0,
        rating: 4.5,
        unit: "1 UNIT",
    },
    {
        id: 6,
        name: "Sunstar Fresh Melon Juice",
        image: "/thumb-bananas.png",
        price: 18.0,
        rating: 4.5,
        unit: "1 UNIT",
    },
];

const JustArrived = () => {
    return (
        <div className="px-6 py-10 h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold">Just arrived</h2>
                <div className="flex items-center gap-2">
                    <a href="#" className="text-sm font-semibold text-gray-700">
                        View All Categories →
                    </a>
                    <button className="bg-gray-200 rounded-full p-2 text-xl">&lt;</button>
                    <button className="bg-gray-200 rounded-full p-2 text-xl">&gt;</button>
                </div>
            </div>

            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                {products.map((product) => (
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
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow text-gray-600 hover:text-red-500">
                                <FiHeart />
                            </button>
                        </div>
                        <h3 className="font-medium text-gray-800 text-lg leading-tight">
                            {product.name}
                        </h3>
                        <div className="text-sm text-gray-500 mt-1">
                            {product.unit}
                            <span className="ml-2 text-yellow-500">★ {product.rating}</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900 mt-2">
                            ${product.price.toFixed(2)}
                        </div>

                        {/* Quantity & Cart */}
                        <div className="flex items-center mt-3 gap-2">
                            <button className="bg-gray-100 rounded-full p-1.5">
                                <AiOutlineMinus size={16} />
                            </button>
                            <span className="text-sm font-medium">1</span>
                            <button className="bg-gray-100 rounded-full p-1.5">
                                <AiOutlinePlus size={16} />
                            </button>
                            <button className="ml-auto px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JustArrived;