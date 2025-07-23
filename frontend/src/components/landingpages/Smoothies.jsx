// import React from "react";

// export default function Smoothies() {
//     return (
//         <>
//             <h2 className="text-3xl mt-8 mx-6 font-bold text-gray-800">Smoothies</h2>
//             <div className='max-w-9xl mx-auto px-4 py-8 flex flex-row flex-wrap items-start gap-6'>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="https://ktagr.com/public/uploads/products/zeeba-classic-basmati-rice-plastic.webp"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Lakme sun expert Spf 50 </h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/178e46177b0df9204acd773b12c34cd0"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Cetaphil Gentle facewash</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="https://www.kroger.com/product/images/large/front/0074504200201?banner=harristeeter"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="	https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="	https://cdn-icons-png.flaticon.com/512/590/590685.png"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="https://themewagon.github.io/FoodMart/images/thumb-bananas.png"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">

//                         {/* Product Image with Discount and Favorite */}
//                         <div className="relative">
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src="https://themewagon.github.io/FoodMart/images/thumb-biscuits.png"
//                                 alt="Sunstar Fresh Melon Juice"
//                             />
//                             <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                 -30%
//                             </div>
//                             <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-300 hover:shadow-lg">
//                                 <svg
//                                     className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//            2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
//            14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
//            11.54L12 21.35z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Product Info */}
//                         <div className="mt-4">
//                             <h3 className="font-bold text-lg text-gray-800 mb-1">Sunstar Fresh Melon Juice</h3>
//                             <div className="flex items-center mb-1">
//                                 <span className="text-yellow-500 text-sm font-semibold">4.5</span>
//                                 <svg
//                                     className="w-4 h-4 text-yellow-500 ml-1"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
//                                 </svg>
//                             </div>
//                             <p className="text-gray-700 font-medium">$18.00</p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="mt-4 flex items-center">
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
//                                 -
//                             </button>
//                             <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">1</span>
//                             <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
//                                 +
//                             </button>
//                             <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//             </div></>
//     )
// }