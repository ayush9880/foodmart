import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import First from "./landingpages/First";
import Second from "./landingpages/Category";
import NewlyArrived from "./landingpages/NewArriver";
import TrandingProducts from "./landingpages/Tranding";
import FifthPage from "./landingpages/FifthPage";
import JustArrived from "./landingpages/JustArriver";
import MostPopular from "./landingpages/MostPopular";
import TrandingSearches from "./landingpages/TrandingSearches";
import Blogs from "./landingpages/Blogs";

export default function LandingPage() {
    return (
        <section>
            <First />
            <Second />
            <NewlyArrived />
            <TrandingProducts />
            <FifthPage />





            {/* sixth section.....................................  */}
            <h2 className="text-3xl mt-8 mx-6 font-bold text-gray-800">Best Selling Products </h2>
            <div className='max-w-9xl mx-auto px-4 py-8 flex flex-row flex-wrap items-start gap-12'>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://natadecocojuice.com/wp-content/uploads/2024/05/Nata-de-coco-peach-juice-drink-1024x1024.jpg"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
                                        14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
                                        11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Lakme sun expert Spf 50 </h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://m.media-amazon.com/images/I/817DiG1jhtL._SL1500_.jpg"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
                                        14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
                                        11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Cetaphil Gentle facewash</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://www.perfumeuk.co.uk/user/products/large/prada_perfume_women_paradoxe_eau_de_parfum_edp_90ml.jpg"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
                                        14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
                                        11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://www.health.com/thmb/qDMbXdoM-jwu8RkFk1LpuQ7yhK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Biotin-Collagen-The-Best-Shampoo-For-Hair-Growth-Products-2000-aba2e1de73fb446db6cf7a4312d6cf51.jpg"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
                                        14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
                                        11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://m.media-amazon.com/images/I/71lcDy4P80L._SL1500_.jpg"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
                                        14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
                                        11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://lh3.googleusercontent.com/A-dGheF-T_vVOFg2fZVxHKw_qGMdmVgSKVOaEtPGa1_uxpfRLUEzNcvO75Gk8R-5k_OF52KYzvSA_vW4gnRApshKHK1ix4RF0sj20w=w1200-l75"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
                                        14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
                                        11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://m.media-amazon.com/images/I/714AjbZTcnL.jpg"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
                                        14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
                                        11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://static.vecteezy.com/system/resources/previews/022/430/939/original/strawberry-cut-out-red-strawberry-on-transparent-background-png.png"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%

                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
           14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
           11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://themewagon.github.io/FoodMart/images/thumb-bananas.png"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
           14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
           11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

                        {/* Product Image with Discount and Favorite */}
                        <div className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src="https://themewagon.github.io/FoodMart/images/thumb-biscuits.png"
                                alt="Sunstar Fresh Melon Juice"
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                -30%
                            </div>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
                                <svg
                                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
           14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
           11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
                            <div className="flex items-center mb-1">
                                <span className="text-yellow-500 text-sm font-semibold">4.5</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">$18.00</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-4 flex items-center">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
                                -
                            </button>
                            <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
                                +
                            </button>
                            <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {/* seventh section.................................  */}


            <div className="w-full bg-blue-100">
                <div
                    className="bg-blue-100 py-16 md:py-24 rounded-[40px] bg-no-repeat"
                    style={{
                        backgroundImage: "url('images/bg-leaves-img-pattern.png')",
                    }}
                >
                    <div className="container mx-auto px-2 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                            {/* LEFT TEXT */}
                            <div className="md:w-1/2 p-5">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    Get <span className="text-orange-400">25% Discount</span><br /> on your first <br /> purchase
                                </h2>
                                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Dictumst amet,
                                    metus, sit massa posuere maecenas. <br /> At tellus ut nunc amet vel egestas.
                                </p>
                            </div>

                            {/* RIGHT FORM */}
                            <div className="md:w-2/5 p-5  bg-gray-100 rounded-2xl shadow-lg">
                                <form className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-base font-medium mb-1"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            className="w-full px-5 py-4 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-base font-medium mb-1"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="abc@mail.com"
                                            className="w-full px-5 py-4 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="subscribe"
                                            className="h-5 w-5 text-primary"
                                        />
                                        <label htmlFor="subscribe" className="text-base">
                                            Subscribe to the newsletter
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full py-4 px-6 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MostPopular />
            <JustArrived />
            <Blogs/>
            <TrandingSearches/>



        </section>
    );
}
