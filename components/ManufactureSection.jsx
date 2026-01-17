import React from 'react';

export default function ManufactureSection() {
  return (
    <div className="relative h-[50vh] min-h-screen" style={{ backgroundColor: '#B7B3B2' }}>
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#5B9BD5' }}>
              Know What We Manufacture
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Crown Health Care Disposables is one of the leading manufacturer & exporter of hospital 
              disposables such as (Disposable Apron, Bouffant Cap, Face Mask, Hand Towel, Isolation Gown, 
              Surgeon Gown, Shoe cover etc.) & Drapes such as (Leg U Drape, Leg O Drape, Cesarean Drape, Cling 
              Drape, Eye Drape, Hip U Drape etc.) along with some top of the line products such as (Camera 
              Cover, C-Arm Cover, Sterilization wrapping sheet etc.)
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">To Learn More</span>
              <a 
                className="px-8 py-3 text-white font-semibold rounded hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#5B9BD5' }}
                href="/about"
              >
                CLICK HERE
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Doctor Image */}
        <div className="relative h-[50vh] min-h-screen">
          <img 
            src="/assests/img/doctor-bg.jpg" 
            alt="Doctor" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}