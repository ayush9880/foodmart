import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const products = [
  {
    id: 1,
    name: "Lemon Facewash",
    image: "https://tse2.mm.bing.net/th/id/OIP.Jq_tszWcEHliVNpMbr6yOQHaHa?pid=Api&P=0&h=220",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
  },
  {
    id: 2,
    name: "fresh Orange",
    image: "https://static.vecteezy.com/system/resources/previews/027/143/688/large_2x/fresh-single-orange-fruit-isolated-on-transparent-background-png.png",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
  },
  {
    id: 3,
    name: "Fresh chocolate pastry",
    image: "https://zaykarecipes.com/wp-content/uploads/2023/04/best-chocolate-pastry.jpg",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
  },
  {
    id: 4,
    name: "Destiny gils perfume",
    image: "https://fimgs.net/mdimg/perfume/social.110651.jpg",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
  },
  {
    id: 5,
    name: "Beardo perfume ",
    image: "https://m.media-amazon.com/images/I/619uYh6-rhL.jpg",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
  },
  { 
    id: 6,
    name: "Fresh Bananas",
    image: "/thumb-bananas.png",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
  },
];

const MostPopular = () => {
  return (
    <div className="px-6 py-10 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Most Popular Brands</h2>
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

export default MostPopular;