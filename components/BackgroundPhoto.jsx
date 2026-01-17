import React from 'react';

export default function BackgroundPhoto() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Doctor Image - Right Side */}
      <div className="fixed right-0 w-1/2 h-screen z-0" style={{ top: '100vh' }}>
        <img 
          src="/assests/img/doctor-bg.jpg" 
          alt="Doctor" 
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}