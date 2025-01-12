import Image from "next/image";
import React from "react";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      color: "1 Colour",
      price: "₹10,795.00",
      image: "/product1.png", // Replace with the correct image path
      isNew: true,
    },
    {
      id: 2,
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      color: "1 Colour",
      price: "₹4,995.00",
      image: "/product2.png", // Replace with the correct image path
      isNew: true,
    },
    {
      id: 3,
      name: "Nike Air Force 1 PLT.AF.FORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹8,695.00",
      image: "/product3.png", // Replace with the correct image path
      isNew: true,
    },
    {
        id: 4,
        name: "Nike Air Force 1 PLT.AF.FORM",
        category: "Women's Shoes",
        color: "1 Colour",
        price: "₹8,695.00",
        image: "/product4.png", // Replace with the correct image path
        isNew: true,
      },
      {
        id: 5,
        name: "Nike Air Force 1 PLT.AF.FORM",
        category: "Women's Shoes",
        color: "1 Colour",
        price: "₹8,695.00",
        image: "/product5.png", // Replace with the correct image path
        isNew: true,
      },
      {
        id: 6,
        name: "Nike standard issue",
        category: "Women basketball jersey",
        color: "1 Colour",
        price: "₹8,695.00",
        image: "/product7.png", // Replace with the correct image path
        isNew: true,
      },
      {
        id: 7,
        name: "Nike DUNK low retro SE",
        category: "Women's Shoes",
        color: "1 Colour",
        price: "₹8,695.00",
        image: "/product8.png", // Replace with the correct image path
        isNew: true,
      },
      {
        id: 8,
        name:  "Nik-Dir-FIT UV Hyverse",
        category: "Men's short-selevees graphic fitness top",
        color: "1 Colour",
        price: "₹8,695.00",
        image: "/product88.png", // Replace with the correct image path
        isNew: true,
      },
      {
        id: 9,
        name: "Nike Air Force 1 PLT.AF.FORM",
        category: "Women's Shoes",
        color: "1 Colour",
        price: "₹8,695.00",
        image: "/product9.png", // Replace with the correct image path
        isNew: true,
      },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="bg-gray-50"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                {product.isNew && (
                  <span className="text-xs uppercase text-orange-600 font-bold mb-1 block">
                    Just In
                  </span>
                )}
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-sm text-gray-600">{product.color}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">
                  MRP : {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
