"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { getProductsBySection, getSectionTheme } from '@/lib/productsData';

export default function OtherSectionPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  
  const sectionSlug = 'others-section';
  
  // Centralized data se products fetch karo
  const allProducts = getProductsBySection(sectionSlug);
  const theme = getSectionTheme(sectionSlug);

  // Pagination calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Other Section</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Other Section</h1>
          <p className="text-gray-600">
            Browse our complete range of surgical drapes and medical coverings
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Total Products: <span className="font-semibold">{allProducts.length}</span>
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              href={`/others-section/${product.id}`}
              className="group cursor-pointer"
            >
              {/* Product Card */}
              <div className={`bg-gradient-to-br ${theme.gradient} rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
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
                <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="block mt-2 text-blue-600 font-semibold text-sm uppercase tracking-wide group-hover:text-blue-700 transition-colors">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* No Products Message */}
        {allProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products available in this section.</p>
          </div>
        )}

        {/* Pagination - agar products 9 se zyada ho */}
        {totalPages > 1 && (
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
        )}

        {/* Page Info */}
        {allProducts.length > 0 && (
          <div className="text-center mt-4 text-gray-600">
            Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, allProducts.length)} of {allProducts.length} products
          </div>
        )}
      </div>
    </div>
  );
}