    export default function Footer() {
        return (
            <footer className="bg-white text-gray-700 pt-12 pb-6">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo + About */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img src="/foodmart.png" alt="FoodMart Logo" className="w-10 h-10 mr-2" />
                            <h2 className="text-2xl font-bold text-green-600">FoodMart</h2>
                        </div>
                        <p className="text-sm">
                            Fresh groceries, daily essentials & quick delivery at your doorstep. Quality you can trust!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-700">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-600">Home</a></li>
                            <li><a href="#" className="hover:text-green-600">Shop</a></li>
                            <li><a href="#" className="hover:text-green-600">Offers</a></li>
                            <li><a href="#" className="hover:text-green-600">About Us</a></li>
                            <li><a href="#" className="hover:text-green-600">Contact</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-700">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-600">FAQs</a></li>
                            <li><a href="#" className="hover:text-green-600">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:text-green-600">Returns Policy</a></li>
                            <li><a href="#" className="hover:text-green-600">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter + Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-700">Stay Connected</h3>
                        <p className="text-sm mb-2">Subscribe to get updates & exclusive offers.</p>
                        <form className="flex mb-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-500">
                                Subscribe
                            </button>
                        </form>
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 
    24h11.495v-9.294H9.691V11.41h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 
    1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 
    1.763v2.31h3.587l-.467 3.296h-3.12V24h6.116c.73 0 1.324-.593 
    1.324-1.324V1.325C24 .593 23.406 0 22.675 0z"/>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 
    1.366.062 2.633.35 3.608 1.325.975.975 1.264 
    2.242 1.326 3.608.058 1.266.07 1.645.07 
    4.85s-.012 3.584-.07 4.85c-.062 1.366-.351 
    2.633-1.326 3.608-.975.975-2.242 
    1.264-3.608 1.326-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.351-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 
    15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.351-2.633 
    1.326-3.608.975-.975 2.242-1.264 3.608-1.326C8.416 
    2.175 8.796 2.163 12 2.163zm0-2.163C8.741 
    0 8.332.013 7.052.072 5.77.131 4.672.428 3.703 
    1.397c-.97.97-1.266 2.067-1.325 
    3.349C2.013 5.668 2 6.077 2 12s.013 6.332.072 
    7.611c.059 1.282.355 2.38 1.325 
    3.349.97.97 2.067 1.266 3.349 
    1.325 1.28.059 1.689.072 7.611.072s6.332-.013 
    7.611-.072c1.282-.059 2.38-.355 
    3.349-1.325.97-.97 1.266-2.067 
    1.325-3.349.059-1.28.072-1.689.072-7.611s-.013-6.332-.072-7.611c-.059-1.282-.355-2.38-1.325-3.349-.97-.97-2.067-1.266-3.349-1.325C15.668.013 15.259 
    0 12 0zm0 5.838a6.162 6.162 0 100 12.324 
    6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 
    0 110-7.998 3.999 3.999 0 010 
    7.998zm6.406-11.845a1.44 1.44 0 11-2.88 
    0 1.44 1.44 0 012.88 0z"/>
                                </svg>
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700 transition">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 
    1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 
    1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 
    0-4.92 2.203-4.92 4.917 0 .39.045.765.127 
    1.124-4.09-.205-7.72-2.165-10.148-5.144-.424.722-.666 
    1.561-.666 2.475 0 1.71.87 3.213 2.188 
    4.096-.807-.026-1.566-.248-2.228-.616v.061c0 
    2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 
    0-.615-.03-.916-.086.631 1.953 2.445 3.377 
    4.604 3.419-1.68 1.319-3.809 2.105-6.102 
    2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 
    4.768 2.209 7.557 2.209 9.054 0 14-7.496 
    14-13.986 0-.21 0-.42-.015-.63.961-.689 
    1.8-1.56 2.46-2.548l-.047-.02z"/>
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
    2.239 5 5 5h14c2.761 0 5-2.239 
    5-5v-14c0-2.761-2.239-5-5-5zm-11 
    19h-3v-10h3v10zm-1.5-11.268c-.966 
    0-1.75-.784-1.75-1.75s.784-1.75 
    1.75-1.75 1.75.784 
    1.75 1.75-.784 1.75-1.75 
    1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.061-1.865-3.061-1.867 
    0-2.153 1.459-2.153 2.967v5.698h-3v-10h2.881v1.367h.041c.401-.757 
    1.381-1.555 2.844-1.555 3.04 0 3.604 2.002 3.604 4.605v5.583z"/>
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M19.615 3.184c-1.811-.616-9.418-.616-9.418-.616s-7.607 
    0-9.418.616c-1.164.396-2.084 
    1.244-2.52 2.389-.638 1.633-.638 5.042-.638 
    5.042s0 3.409.638 5.042c.436 1.145 1.356 
    1.993 2.52 2.389 1.811.616 9.418.616 9.418.616s7.607 
    0 9.418-.616c1.164-.396 2.084-1.244 
    2.52-2.389.638-1.633.638-5.042.638-5.042s0-3.409-.638-5.042c-.436-1.145-1.356-1.993-2.52-2.389zm-11.615 
    11.816v-8l7.334 4-7.334 4z"/>
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="border-t border-green-200 mt-8 pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} FoodMart. All rights reserved.
                </div>
            </footer>
        );
    }
