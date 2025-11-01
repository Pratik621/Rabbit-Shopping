const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Column 1 - Customer Service */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-lg">Customer Service</h4>
          <p className="text-sm mb-2">
            Be the first to know about new arrivals, special offers, and other discount information.
          </p>
          <p className="text-sm mb-4">Sign up for our newsletter today!</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-2/3 text-gray-800 border border-gray-300 focus:outline-none text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-lg">Contact Us</h4>
          <p className="text-sm">Email: support@mywebsite.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm">Address: 123 Market Street, New York, NY</p>
        </div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
