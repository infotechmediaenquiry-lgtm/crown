import React from "react";

export default function About() {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Crown Health Care
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Delivering quality hospital disposables and medical solutions with
            trust, innovation, and commitment.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Founder Image */}
        <div className="flex justify-center">
          <div className="w-72 h-72 bg-gray-200 rounded-xl overflow-hidden">
            <img 
              src="/assests/img/about_us.jpg" 
              alt="About Crown Health Care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Founder Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Chittaranjan Moharana
          </h2>
          <p className="text-blue-700 font-medium mb-4">
            Founder – Crown Health Care
          </p>
          <p className="text-gray-600 leading-relaxed">
            Crown Health Care was established in 2013 by our Founder & Visionary –
            <span className="font-medium text-gray-800">
              {" "}
              Niranjan Moharana
            </span>
            , with the sole mission to manufacture and supply quality hospital
            products at competitive prices, making hospital operating procedures
            smooth across India.
          </p>
        </div>
      </div>

      {/* Company Description */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed mb-6">
            Having been associated with the medical field for over 15 years, the
            leadership at Crown Health Care has gained extensive exposure in
            understanding market demands and fulfilling them in a timely and
            efficient manner.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            The founder has been one of the influential figures across multiple
            business verticals, ensuring seamless manufacturing and consistent
            quality of medical products such as hospital disposables, drape kits,
            and other essential healthcare solutions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            At Crown Health Care, we remain committed to quality, affordability,
            and reliability — empowering healthcare professionals to deliver
            better patient care every day.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Core Values
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Quality Assurance
            </h4>
            <p className="text-gray-600">
              Delivering consistently high-quality medical products that meet
              industry standards.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Affordable Pricing
            </h4>
            <p className="text-gray-600">
              Competitive pricing without compromising on product quality.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Trusted Partnership
            </h4>
            <p className="text-gray-600">
              Building long-term relationships with hospitals and healthcare
              providers across India.
            </p>
          </div>
        </div>
      </div>

      {/* Payment & Replacement Policy Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Policies
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Policy */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-blue-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800">
                  Payment Policy
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                For new customers, we supply products against advance payment or 
                post-dated cheque. Once the customer is regularly purchasing our 
                products, we provide credit facilities for payments, building a 
                trusted and flexible business relationship.
              </p>
            </div>

            {/* Replacement Policy */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-green-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800">
                  Replacement Policy
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our products undergo rigorous quality control before dispatch to 
                ensure they are defect-free. However, in the rare event of any 
                defective product, we guarantee replacement within 3 to 4 working 
                days, ensuring minimal disruption to your operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}