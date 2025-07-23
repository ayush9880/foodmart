import React from "react";

export default function Blogs() {
    return (
        <section className="py-8 px-4 bg-blue-100">
            <h2 className="text-4xl font-bold mb-6 text-green-700">
                Our Recent Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-orange-400">
                    <img
                        src="https://themewagon.github.io/FoodMart/images/post-thumb-1.jpg"
                        alt="Fruits"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-4">
                        <div className="text-green-600 text-sm mb-2">
                            <span className="mr-3">📅 22 AUG 2021</span>
                            <span>📁 Tips & Tricks</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-orange-700">
                            Top 10 casual look ideas to dress up your kids
                        </h3>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipi elit.
                            Aliquet eleifend viverra enim tincidunt donec quam.
                            A in arcu, hendrerit neque dolor morbi...
                        </p>
                    </div>
                </article>

                <article className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-orange-400">
                    <img
                        src="https://themewagon.github.io/FoodMart/images/post-thumb-2.jpg"
                        alt="Cashew Butter"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-4">
                        <div className="text-green-600 text-sm mb-2">
                            <span className="mr-3">📅 25 AUG 2021</span>
                            <span>📁 Trending</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-orange-700">
                            Latest trends of wearing street wears supremely
                        </h3>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipi elit.
                            Aliquet eleifend viverra enim tincidunt donec quam.
                            A in arcu, hendrerit neque dolor morbi...
                        </p>
                    </div>
                </article>

                <article className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-orange-400">
                    <img
                        src="https://themewagon.github.io/FoodMart/images/post-thumb-3.jpg"
                        alt="Broccoli"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-4">
                        <div className="text-green-600 text-sm mb-2">
                            <span className="mr-3">📅 28 AUG 2021</span>
                            <span>📁 Inspiration</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-orange-700">
                            10 Different Types of comfortable clothes ideas for women
                        </h3>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipi elit.
                            Aliquet eleifend viverra enim tincidunt donec quam.
                            A in arcu, hendrerit neque dolor morbi...
                        </p>
                    </div>
                </article>
            </div>
            <div className="text-right mt-6">
                <a
                    href="/all-articles"
                    className="text-orange-600 hover:text-black hover:underline text-base font-bold"
                >
                    Read All Articles ➔
                </a>
            </div>
        </section>
    );
}
