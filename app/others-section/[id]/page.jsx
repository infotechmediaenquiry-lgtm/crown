"use client"
import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, getRelatedProducts, getSectionTheme } from '@/lib/productsData';

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  
  const product = getProductById(productId);

  // Check if product exists and matches the section
  if (!product) {
    notFound();
  }

  const theme = getSectionTheme(product.sectionSlug);
  const relatedProducts = getRelatedProducts(productId, product.sectionSlug, 4);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          productName: product.name
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your inquiry has been sent successfully.' });
        setContactForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  // Function to render description with line breaks
  const renderDescription = () => {
    // Split by <br> tags and filter out empty strings
    const lines = product.description.split('<br>').filter(line => line.trim());
    
    return (
      <ul className="space-y-2">
        {lines.map((line, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={`text-${theme.primary}-600 font-medium mt-1 flex-shrink-0`}>•</span>
            <span className="text-gray-700">{line.trim()}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className={`${theme.hover} transition-colors`}>Home</Link>
            <span>›</span>
            <Link href={`/${product.sectionSlug}`} className={`${theme.hover} transition-colors`}>
              {product.category}
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Product Image */}
          <div className={`bg-gradient-to-br ${theme.gradient} rounded-3xl p-8 shadow-2xl`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-contain"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-5xl font-black text-gray-900 mb-6">{product.name}</h1>

            {/* Category Badge */}
            <div className="mb-8">
              <span className={`inline-block bg-${theme.primary}-100 text-${theme.primary}-800 px-4 py-2 rounded-full font-semibold`}>
                {product.category}
              </span>
            </div>

            {/* Description with line breaks */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
              <div className="text-lg leading-relaxed">
                {renderDescription()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link 
                href={`/${product.sectionSlug}`}
                className={`inline-flex items-center gap-2 px-6 py-3 ${theme.button} text-white rounded-lg transition-all font-semibold`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Back to Products
              </Link>

              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t pt-12">
          <div className="mb-8">
            <h2 className={`text-3xl font-bold text-gray-900 pb-3 border-b-4 border-${theme.primary}-600 inline-block`}>
              Product Inquiry
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interested in this product?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fill out the form and we'll get back to you with detailed information about <span className="font-semibold text-gray-900">{product.name}</span>. Our team is ready to assist you with pricing, specifications, and availability.
              </p>
              
              <div className={`bg-${theme.primary}-50 border-l-4 border-${theme.primary}-500 p-4 rounded-r-lg`}>
                <div className="flex items-start">
                  <svg className={`w-6 h-6 text-${theme.primary}-600 mt-0.5 mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className={`font-semibold text-${theme.primary}-900 mb-1`}>Quick Response</h4>
                    <p className={`text-${theme.primary}-800 text-sm`}>We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg border ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border-green-500 text-green-800' 
                      : 'bg-red-50 border-red-500 text-red-800'
                  }`}>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        {submitStatus.type === 'success' ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        )}
                      </svg>
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${theme.ring} focus:border-transparent outline-none transition-all disabled:bg-gray-100`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${theme.ring} focus:border-transparent outline-none transition-all disabled:bg-gray-100`}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone (Optional) */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${theme.ring} focus:border-transparent outline-none transition-all disabled:bg-gray-100`}
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows="5"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${theme.ring} focus:border-transparent outline-none transition-all disabled:bg-gray-100`}
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${theme.button} disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none uppercase tracking-wide flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/${relatedProduct.sectionSlug}/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className={`bg-gradient-to-br ${theme.gradient} rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <h3 className={`text-base font-bold text-gray-900 ${theme.hover} transition-colors uppercase text-sm`}>
                        {relatedProduct.name}
                      </h3>
                      <span className={`block mt-2 text-${theme.primary}-600 font-semibold text-sm uppercase tracking-wide hover:text-${theme.primary}-700 transition-colors`}>
                        View Details
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}