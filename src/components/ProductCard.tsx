import Image from 'next/image';
import React from "react";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      price: "₹13,995",
      category: "Women's Shoes",
      image: "/product1.png", // Replace with the correct image path
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      price: "₹13,995",
      category: "Men's Shoes",
      image: "/product2.png", // Replace with the correct image path
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      price: "₹16,995",
      category: "Men's Shoes",
      image: "/product3.png", // Replace with the correct image path
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Best of Air Max
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                width={348}
                height={348}
                alt={product.name}
                className="w-full h-60 object-contain bg-white"
              />

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
