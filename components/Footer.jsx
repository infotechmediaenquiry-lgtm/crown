"use client";
import React from 'react';

export default function Footer() {
  // PDF Download Handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assests/Brochure_Crown_Lowres-2.pdf'; // Your PDF file path
    link.download = 'Crown-Healthcare-Portfolio.pdf'; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="w-full">
      {/* Blue Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">
            Crown Health Care Disposables Portfolio
          </h2>
          <button 
            onClick={handleDownload}
            className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded transition-all duration-300 whitespace-nowrap"
          >
            DOWNLOAD NOW
          </button>
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold mb-6">
              Crown Health Care Disposables :
            </h3>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>Mob. No. : +91 9152965753</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>Mob. No. : +91 8454949544</span>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 flex-wrap">
                  <span>E-mail : crownhealthcare72@yahoo.com</span>
                  <span className="hidden sm:inline">|</span>
                  <span>info@crownhealthcare.co.in</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-400 text-sm">
                Created by Infotech Media
              </p>
            </div>
          </div>

          {/* Right Column - Address & Logos */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">
              Address :
            </h3>

            <div className="flex items-start gap-3 text-gray-300">
              <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <p>
                Gala No. 209, 2nd Floor, Bldg. No. 1, Aman Paradise, Sativali Road, Vasai East, Palghar – 401208.
              </p>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="/assests/img/logo1.png" 
                  alt="Crown Healthcare Disposable" 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 text-sm text-center">
            © 2025 CrownHealthCare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}