import { useState } from "react";
import { toast } from "sonner";
import ProductsGrid from "./ProductGrid"; // ✅ Make sure this path is correct

const selectedProduct = {
  id: 1,
  name: "Stylish Sneakers",
  brand: "Nike",
  material: "Leather & Mesh",
  price: 59.99,
  description:
    "These stylish sneakers are perfect for everyday wear. Made with high-quality materials, they offer both comfort and durability.",
  size: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green", "Black"],
  images: [
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/c/6/x/l-1-no-tblrnfuljacket-plaink172-tripr-original-imahgrzjhmdmvrqp.jpeg?q=70",
      alt: "Stylish Sneakers - Image 1",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/a/h/h/-original-imaguz7qczzdfygd.jpeg?q=70",
      alt: "Stylish Sneakers - Image 2",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/krntoy80/jacket/a/q/v/m-dd4731-010-nike-original-imag5ehyheqhdffu.jpeg?q=70",
      alt: "Stylish Sneakers - Image 3",
    },
  ],
};

// ✅ Fixed plural & ids
const similarProducts = [
  {
    id: 1,
    name: "Casual Shirt",
    price: 29.99,
    images: [
      { url: "https://picsum.photos/200/300?random=11", alt: "Casual Shirt" },
    ],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 49.99,
    images: [
      { url: "https://picsum.photos/200/300?random=12", alt: "Denim Jacket" },
    ],
  },
  {
    id: 3,
    name: "Leather Belt",
    price: 19.99,
    images: [
      { url: "https://picsum.photos/200/300?random=13", alt: "Leather Belt" },
    ],
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 49.99,
    images: [
      { url: "https://picsum.photos/200/300?random=12", alt: "Denim Jacket" },
    ],
  },
];

const ProductsDetails = () => {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0]?.url);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Quantity handlers
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Add to cart handler
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select size and color before adding to cart.", {
        duration: 1500,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart!", { duration: 1500 });
      setIsButtonDisabled(false);
    }, 700);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT COLUMN: Images */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <div className="w-full aspect-square overflow-hidden rounded-lg border relative">
                <img
                  key={mainImage}
                  src={mainImage}
                  alt="Main Product"
                  className="w-full h-full object-cover rounded-lg transition-opacity duration-500 opacity-100"
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="hidden md:flex flex-row space-x-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  onClick={() => setMainImage(image.url)}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border transition ${
                    mainImage === image.url
                      ? "border-blue-500 scale-105"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                />
              ))}
            </div>

            <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  onClick={() => setMainImage(image.url)}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border transition ${
                    mainImage === image.url
                      ? "border-black scale-105"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Info */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-bold mb-6">${selectedProduct.price}</p>

            {/* Sizes */}
            <div className="mb-4">
              <h2 className="font-semibold mb-2">Sizes</h2>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.size.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-1 border rounded transition ${
                      selectedSize === s
                        ? "border-black bg-gray-100"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h2 className="font-semibold mb-2">Colors</h2>
              <div className="flex flex-wrap gap-3 items-center">
                {selectedProduct.colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer hover:scale-105 transition ${
                      selectedColor === color
                        ? "ring-2 ring-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-semibold">Quantity:</h2>
              <div className="flex items-center border rounded">
                <button
                  onClick={decreaseQty}
                  className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-4 py-1 text-lg">{quantity}</span>
                <button
                  onClick={increaseQty}
                  className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <p className="text-lg font-semibold mb-4">
              Total: ${(selectedProduct.price * quantity).toFixed(2)}
            </p>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`mt-2 px-5 py-2 rounded-lg transition ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-700"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "Add to Cart"}
            </button>

            {/* Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics :</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1 font-medium">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ✅ Similar Products Section */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-6">
            You May Also Like
          </h2>
          <ProductsGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
