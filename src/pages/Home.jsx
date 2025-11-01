import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrival from "../components/Products/NewArrival";
import ProductsDetails from "../components/Products/ProductsDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";

const PlaceholderProducts = [
  {
    id: 5,
    name: "Casual Shirt",
    price: 29.99,
    images: [
      { url: "https://picsum.photos/200/300?random=14", alt: "Casual Shirt" },
    ],
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: 49.99,
    images: [
      { url: "https://picsum.photos/200/300?random=15", alt: "Denim Jacket" },
    ],
  },
  {
    id: 7,
    name: "Leather Belt",
    price: 19.99,
    images: [
      { url: "https://picsum.photos/200/300?random=16", alt: "Leather Belt" },
    ],
  },
  {
    id: 8,
    name: "Winter Hoodie",
    price: 59.99,
    images: [
      { url: "https://picsum.photos/200/300?random=17", alt: "Winter Hoodie" },
    ],
  },
    {
    id: 5,
    name: "Casual Shirt",
    price: 29.99,
    images: [
      { url: "https://picsum.photos/200/300?random=14", alt: "Casual Shirt" },
    ],
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: 49.99,
    images: [
      { url: "https://picsum.photos/200/300?random=15", alt: "Denim Jacket" },
    ],
  },
  {
    id: 7,
    name: "Leather Belt",
    price: 19.99,
    images: [
      { url: "https://picsum.photos/200/300?random=16", alt: "Leather Belt" },
    ],
  },
  {
    id: 8,
    name: "Winter Hoodie",
    price: 59.99,
    images: [
      { url: "https://picsum.photos/200/300?random=17", alt: "Winter Hoodie" },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrival />

      {/* Best Seller Section */}
      <h2 className="text-3xl font-bold text-center my-10">Best Seller</h2>
      <ProductsDetails />

      {/* Top Wears for Women */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={PlaceholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
