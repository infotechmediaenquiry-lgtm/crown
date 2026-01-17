"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
// OPTION 1: If productsData.js is in same folder as Navbar
// import { getAllProducts } from "./productsData";

// OPTION 2: If productsData.js is in root data folder
// import { getAllProducts } from "@/data/productsData";

// OPTION 3: If productsData.js is in utils folder
// import { getAllProducts } from "@/utils/productsData";

// OPTION 4: If productsData.js is in lib folder
import { getAllProducts } from "@/lib/productsData";

const siteData = {
  hero: {
    title: "Leading Manufacturer of Hospital Disposables",
    buttons: ["Disposable", "Drapes", "Others"],
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Disposable Section", href: "/disposable-section" },
    { label: "Drape Section", href: "/drapes-section" },
    { label: "Other Section", href: "/others-section" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  // Search products based on query
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim().length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const allProducts = getAllProducts();
    const filtered = allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(filtered);
    setShowResults(true);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = () => {
    setShowResults(false);
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-6 lg:px-10 py-4 border-b bg-white relative z-50 sticky top-0 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assests/img/logo3.png"
            alt="Logo"
            className="h-20 lg:h-24"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 text-gray-600 absolute left-1/2 -translate-x-1/2">
          {siteData.nav.map((item, i) => (
            <li
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`cursor-pointer transition-colors duration-200 font-medium pb-1 relative
                ${activeIndex === i ? "text-blue-700" : "hover:text-blue-700"}`}
            >
              <Link href={item.href}>{item.label}</Link>

              {activeIndex === i && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons - Desktop Search */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center relative" ref={searchRef}>
            <div
              className={`flex items-center transition-all duration-300 ${
                isSearchOpen ? "w-64" : "w-10"
              }`}
            >
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-700"
                  autoFocus
                />
              )}
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (isSearchOpen) {
                    setSearchQuery("");
                    setShowResults(false);
                  }
                }}
                className={`p-2 hover:bg-gray-100 transition-colors ${
                  isSearchOpen
                    ? "rounded-r-lg border border-l-0 border-gray-300"
                    : "rounded-lg"
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Desktop Search Results Dropdown */}
            {showResults && isSearchOpen && (
              <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                {searchResults.length > 0 ? (
                  <div className="p-2">
                    <div className="text-xs text-gray-500 px-3 py-2 font-semibold">
                      {searchResults.length} results found
                    </div>
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/${product.sectionSlug}/${product.id}`}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleResultClick();
                          window.location.href = `/${product.sectionSlug}/${product.id}`;
                        }}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          handleResultClick();
                          window.location.href = `/${product.sectionSlug}/${product.id}`;
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {product.category}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-sm">No products found</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Try different keywords
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-6 mb-6" ref={mobileSearchRef}>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-2 focus:outline-none rounded-l-lg"
            />
            <button className="p-2 hover:bg-gray-100 rounded-r-lg">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Search Results */}
          {showResults && searchResults.length > 0 && (
            <div className="mt-4 border border-gray-200 rounded-lg max-h-80 overflow-y-auto">
              <div className="text-xs text-gray-500 px-3 py-2 font-semibold border-b">
                {searchResults.length} results found
              </div>
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/${product.sectionSlug}/${product.id}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleResultClick();
                    window.location.href = `/${product.sectionSlug}/${product.id}`;
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    handleResultClick();
                    window.location.href = `/${product.sectionSlug}/${product.id}`;
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b last:border-b-0 transition-colors cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {product.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {showResults && searchResults.length === 0 && searchQuery.length >= 2 && (
            <div className="mt-4 p-6 text-center text-gray-500 border border-gray-200 rounded-lg">
              <Search className="w-10 h-10 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">No products found</p>
            </div>
          )}
        </div>

        {/* Mobile Nav */}
        <ul className="flex flex-col px-6 space-y-6">
          {siteData.nav.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setActiveIndex(i);
                setIsOpen(false);
              }}
              className={`text-lg font-medium border-b border-gray-200 pb-4
                ${
                  activeIndex === i
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}