"use client"
import React, { useState, useEffect } from 'react';

export default function SuccessSection() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  const successMetrics = [
    { label: 'Hospital Served', percentage: 82 },
    { label: 'On Time Delivery', percentage: 96 },
    { label: 'Customer Satisfaction', percentage: 90 }
  ];

  const products = [
    { 
      title: 'LEG DRAPE', 
      image: '/assests/img/leg-o-drape.jpg'
    },
    { 
      title: 'CAESAREAN DRAPE', 
      image: '/assests/img/caesarean-drape.jpg'
    },
    { 
      title: 'EYE DRAPE', 
      image: '/assests/img/eye-drape.jpg'
    }
  ];

  const categories = ['Disposable\nSection', 'Drape\nSection', 'Others\nSection'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-[790px] lg:mt-0">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 sm:gap-3 text-orange-500 font-semibold text-sm sm:text-base lg:text-lg text-center lg:text-left">
            <span>Dig In To Our Quality Product Categories Explore Now</span>
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/>
            </svg>
          </div>

          <div className="flex gap-3 sm:gap-4 lg:gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-cyan-400 rounded-full flex items-center justify-center shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="text-black font-bold text-center text-[10px] sm:text-xs leading-tight px-2 sm:px-3 whitespace-pre-line">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-2 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="full-w grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Product Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 lg:w-[800px]">
            {products.map((product, index) => (
              <div 
                key={index}
                className="transform transition-all hover:scale-105"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover rounded-2xl border-4 shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Right Side - Success Ratio */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-10 mt-8 lg:mt-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
              <span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-500 bg-clip-text text-transparent block"
                style={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'all 0.8s ease-out'
                }}
              >
                OUR SUCCESS
              </span>
              <span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-500 bg-clip-text text-transparent block"
                style={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'all 0.8s ease-out 0.1s'
                }}
              >
                RATIO
              </span>
            </h2>

            <div className="space-y-5 sm:space-y-6 lg:space-y-7">
              {successMetrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="space-y-2"
                  style={{
                    opacity: animated ? 1 : 0,
                    transform: animated ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${0.3 + index * 0.1}s`
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold text-sm sm:text-base">
                      {metric.label}
                    </span>
                    <span className="text-blue-700 font-bold text-base sm:text-lg">
                      {metric.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 h-full rounded-full transition-all duration-[1500ms] ease-out shadow-md"
                      style={{ 
                        width: animated ? `${metric.percentage}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Google Maps Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1881.591598922655!2d72.878214!3d19.404489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af4af9a31d8f%3A0xfdd758faa847cce0!2sSativali%20Gaavdevi%20Temple!5e0!3m2!1sen!2sus!4v1768215521459!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-xl"
            title="Sativali Gaavdevi Temple Location"
          />
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-12 sm:h-16 lg:h-20" />

      
    </div>
  );
}