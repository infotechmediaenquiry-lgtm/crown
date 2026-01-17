import React from 'react';

// Mock data for demonstration
const siteData = {
  hero: {
    title: "Leading Provider of Medical Disposables",
    buttons: ["DISPOSABLE", "DRAPES", "OTHERS"]
  }
};

export default function Hero() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#083b63] to-[#0b4c7c] min-h-[85vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[75vh]">

            {/* LEFT - Empty column for background image positioning */}
            <div className="relative lg:h-[70vh]">
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative z-10 text-white text-left pl-4">
              <h1 className="font-extrabold leading-tight tracking-tight
               text-4xl md:text-5xl xl:text-6xl
               uppercase
               mt-2 sm:mt-0">
                LEADING<br />
                MANUFACTURER<br />
                OF HOSPITAL<br />
                DISPOSABLES
              </h1>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/disposable-section"
                  className="px-8 py-3 rounded bg-[#00bcd4] hover:bg-[#00acc1]
               transition-all duration-300
               text-base font-bold tracking-wider uppercase
               inline-block w-full sm:w-auto text-center">
                  DISPOSABLE
                </a>

                <a
                  href="/drapes-section"
                  className="px-8 py-3 rounded bg-[#424242] hover:bg-[#616161]
               transition-all duration-300
               text-base font-bold tracking-wider uppercase
               inline-block w-full sm:w-auto text-center">
                  DRAPES
                </a>

                <a
                  href="/others-section"
                  className="px-8 py-3 rounded bg-[#4caf50] hover:bg-[#66bb6a]
               transition-all duration-300
               text-base font-bold tracking-wider uppercase
               inline-block w-full sm:w-auto text-center">
                  OTHERS
                </a>
              </div>

            </div>

          </div>

          {/* Background Image - Positioned absolutely on left */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center pointer-events-none">
            <img
              src="/assests/img/Hero.png"
              alt="Hero"
              className="w-full h-auto max-h-[80vh] object-contain
                       drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>
      </section>
    </>
  );
}