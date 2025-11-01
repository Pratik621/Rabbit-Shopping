import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const newArrival = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      images: [{ url: "https://picsum.photos/200/300?random=1", alt: "Stylish Jackets" }],
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      images: [{ url: "https://picsum.photos/200/300?random=2", alt: "Casual Shirts" }],
    },
    {
      id: 3,
      name: "Product 3",
      price: 49.99,
      images: [{ url: "https://picsum.photos/200/300?random=3", alt: "Denim Jeans" }],
    },
    {
      id: 4,
      name: "Product 4",
      price: 59.99,
      images: [{ url: "https://picsum.photos/200/300?random=4", alt: "Leather Boots" }],
    },
    {
      id: 5,
      name: "Product 5",
      price: 69.99,
      images: [{ url: "https://picsum.photos/200/300?random=5", alt: "Summer Dresses" }],
    },
    {
      id: 6,
      name: "Product 6",
      price: 79.99,
      images: [{ url: "https://picsum.photos/200/300?random=6", alt: "Formal Suits" }],
    },
  ];

  // Scroll handlers
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Check scroll position to enable/disable buttons
  const checkScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    checkScrollPosition(); // Initial check
    scrollElement.addEventListener("scroll", checkScrollPosition);
    return () => scrollElement.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-gray-600">Discover the latest additions to our collection.</p>

        {/* Navigation arrows */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={scrollLeft}
            disabled={isAtStart}
            className={`p-2 rounded border transition ${
              isAtStart
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            <FiChevronsLeft className="text-2xl" />
          </button>
          <button
            onClick={scrollRight}
            disabled={isAtEnd}
            className={`p-2 rounded border transition ${
              isAtEnd
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            <FiChevronsRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Horizontal scrollable container */}
      <div
        ref={scrollRef}
        className="container mx-auto flex overflow-x-scroll overflow-y-hidden space-x-6 px-4 snap-x snap-mandatory scrollbar-hide"
      >
        {newArrival.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform snap-center"
          >
            <img
              src={product.images[0].url}
              alt={product.images[0].alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-base">{product.name}</h3>
              <p className="text-gray-600 text-sm">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
