import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md w-full max-w-xs">
      {/* Wishlist */}
      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="absolute top-3 right-3 z-10"
      >
        {wishlisted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 
            2.09C13.09 3.81 14.76 3 16.5 
            3 19.58 3 22 5.42 22 8.5c0 
            3.78-3.4 6.86-8.55 11.54L12 
            21.35z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-400 hover:text-red-500 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 
            2.09C13.09 3.81 14.76 3 16.5 
            3 19.58 3 22 5.42 22 8.5c0 
            3.78-3.4 6.86-8.55 11.54L12 
            21.35z" />
          </svg>
        )}
      </button>

      {/* Image + badge */}
      <div className="relative mx-3 mt-3 h-40 overflow-hidden rounded-xl flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full"
        />
        {product.discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-green-600 px-2 text-lg font-medium text-white">
            -{product.discount}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-md font-semibold text-slate-900 mb-1">
          {product.name}
        </h5>
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <span>1 UNIT</span>
          <svg
            aria-hidden="true"
            className="ml-2 h-4 w-4 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921..." />
          </svg>
          <span className="ml-1">{product.rating}</span>
        </div>

        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-slate-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-slate-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Quantity + Add to Cart in a row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center border rounded">
            <button
              onClick={() => setQuantity(qty => (qty > 1 ? qty - 1 : 1))}
              className="px-3 py-1 text-lg font-semibold"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(qty => qty + 1)}
              className="px-3 py-1 text-lg font-semibold"
            >
              +
            </button>
          </div>

          <button className="rounded-md bg-green-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
