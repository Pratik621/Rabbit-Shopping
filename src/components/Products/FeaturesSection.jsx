import { HiShoppingBag } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { FaUndo } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full mb-4">
            <HiShoppingBag className="text-4xl text-black" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight mb-1">
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-gray-600 tracking-tighter text-sm">
            On all orders over $100.00
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full mb-4">
            <MdSupportAgent className="text-4xl text-black" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight mb-1">
            24/7 CUSTOMER SUPPORT
          </h4>
          <p className="text-gray-600 tracking-tighter text-sm">
            Always here to help you anytime.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full mb-4">
            <FaUndo className="text-4xl text-black" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight mb-1">
            EASY RETURNS
          </h4>
          <p className="text-gray-600 tracking-tighter text-sm">
            Hassle-free returns within 14 days.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
