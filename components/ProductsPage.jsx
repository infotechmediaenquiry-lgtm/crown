"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Sample 20 products data
  const allProducts = [
    { id: 1, name: 'Absorbent Tray Liner', image: '/assests/img/products/absorbent-tray.jpg', category: 'Drapes Section' },
    { id: 2, name: 'C-ARM Cover', image: '/assests/img/products/carm-cover.jpg', category: 'Drapes Section' },
    { id: 3, name: 'Camera Cover', image: '/assests/img/products/camera-cover.jpg', category: 'Drapes Section' },
    { id: 4, name: 'Disposable Head Band', image: '/assests/img/products/head-band.jpg', category: 'Disposable Section' },
    { id: 5, name: 'Disposable Langot', image: '/assests/img/products/langot.jpg', category: 'Disposable Section' },
    { id: 6, name: 'CABG Pack', image: '/assests/img/products/cabg-pack.jpg', category: 'Drapes Section' },
    { id: 7, name: 'Leg U Drape', image: '/assests/img/products/leg-drape.jpg', category: 'Drapes Section' },
    { id: 8, name: 'Caesarean Drape', image: '/assests/img/products/caesarean-drape.jpg', category: 'Drapes Section' },
    { id: 9, name: 'Cling Drape', image: '/assests/img/products/cling-drape.jpg', category: 'Drapes Section' },
    { id: 10, name: 'Eye Drape', image: '/assests/img/products/eye-drape.jpg', category: 'Drapes Section' },
    { id: 11, name: 'Surgical Gown', image: '/assests/img/products/surgical-gown.jpg', category: 'Disposable Section' },
    { id: 12, name: 'Face Mask', image: '/assests/img/products/face-mask.jpg', category: 'Disposable Section' },
    { id: 13, name: 'Surgical Cap', image: '/assests/img/products/surgical-cap.jpg', category: 'Disposable Section' },
    { id: 14, name: 'Shoe Cover', image: '/assests/img/products/shoe-cover.jpg', category: 'Disposable Section' },
    { id: 15, name: 'Lap Sponge', image: '/assests/img/products/lap-sponge.jpg', category: 'Others Section' },
    { id: 16, name: 'Gauze Bandage', image: '/assests/img/products/gauze-bandage.jpg', category: 'Others Section' },
    { id: 17, name: 'Cotton Roll', image: '/assests/img/products/cotton-roll.jpg', category: 'Others Section' },
    { id: 18, name: 'Surgical Blade', image: '/assests/img/products/surgical-blade.jpg', category: 'Others Section' },
    { id: 19, name: 'Umbilical Cord Clamp', image: '/assests/img/products/cord-clamp.jpg', category: 'Others Section' },
    { id: 20, name: 'Suction Catheter', image: '/assests/img/products/suction-catheter.jpg', category: 'Others Section' }
  ];

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-600">Browse our complete range of medical disposables</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
              </div>
              
              {/* Product Info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <button className="mt-2 text-blue-600 font-semibold text-sm uppercase tracking-wide hover:text-blue-700 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === pageNumber
                    ? 'bg-blue-600 text-white shadow-lg scale-110'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        </div>

        {/* Page Info */}
        <div className="text-center mt-4 text-gray-600">
          Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, allProducts.length)} of {allProducts.length} products
        </div>
      </div>
    </div>
  );
}