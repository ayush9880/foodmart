import React from "react";

export default function First() {
    return (
        <>
            <div className="w-full min-h-screen bg-green-50 flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-8">
                {/* LEFT SIDE */}
                <div className="flex-2 bg-purple-200 rounded-lg p-5 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-md min-h-[620px]">
                    {/* Text */}
                    <div className="flex flex-col">
                        <span className="text-yellow-400 mt-[60px] text-[40px] mb-[20px] font-semibold mb-2 ">
                            100% Natural
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                            Fresh Smoothie <br /> & Summer Juice
                        </h1>
                        <p className="text-gray-600 mb-6 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.
                        </p>
                        <button className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-full hover:bg-green-700 hover:text-white transition w-fit mb-[20px]">
                            SHOP NOW
                        </button>
                    </div>

                    {/* Smoothie Bottle */}
                    <div className="flex justify-center items-center w-full px-4 py-4">
                        <img
                            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/3/11/28c25363-4565-4f25-8a3b-2b1273743210_454359_1.png"
                            alt="Smoothie Bottle"
                            className="w-32 sm:w-48 md:w-60 lg:w-72 xl:w-80 rotate-16 mt-10 object-contain"
                        />
                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className="flex-1 flex flex-col gap-8">
                    {/* Fruits & Veggies Card */}
                    <div className="flex justify-between items-center bg-red-100 rounded-lg p-6 shadow-md h-[290px] " style={{ backgroundColor: "" }}>
                        <div className="w-[500px]">
                            <p className="text-[30px] text-gray-700 mb-1">20% Off</p>
                            <h3 className="text-[40px] font-bold text-gray-700 mb-2">
                                Fruits & Vegetables
                            </h3>
                            <a href="#" className="text-gray-600 mt-[10px] text-[18px] hover:underline">
                                Shop Collection →
                            </a>
                        </div>
                        <img
                            src="http://4.bp.blogspot.com/-iCWLv2hDiXM/UM6yuDEIsQI/AAAAAAAAAHk/v2IFZwwqxUE/s1600/Fruits+and+Vegetables+(1).jpg"
                            alt="Fruits and Vegetables"
                            className="w-45 h-46 object-cover rounded-[100px] mt-[0px]"
                        />
                    </div>

                    {/* Baked Products Card */}
                    <div className="flex justify-between items-center bg-teal-200 rounded-lg p-6 shadow-md h-[290px]">
                        <div>
                            <p className="text-[30px] text-gray-700 mb-1">15% Off</p>
                            <h3 className="text-[40px] font-bold text-gray-700 mb-2">
                                Baked Products
                            </h3>
                            <a href="#" className="text-gray-600 mt-[10px] text-[18px] hover:underline">
                                Shop Collection →
                            </a>
                        </div>
                        <img
                            src="https://thumbs.dreamstime.com/b/baked-goods-28485020.jpg"
                            alt="Baked Products"
                            className="w-45 h-46 object-cover rounded-[100px]  rotate-[30deg]"
                        />
                    </div>
                </div>
            </div></>
    )
}