import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full flex items-center justify-center bg-white">
      
      {/* Left Image */}
      <div className="hidden md:flex w-1/4 justify-center">
        <Image
          src="/assests/img/about-us-1.png"
          alt="About Us"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="w-full md:w-2/4 bg-[#0b4f7c] text-white px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          The Man Behind The Success Of Our Company
        </h2>

        <p className="text-sm leading-7 mb-4">
          Crown Health Care was established in 2013 by our Founder & Visionary –
          <span className="font-semibold"> Niranjan Moharana </span>
          with the sole mission to manufacture and supply quality products at
          competitive prices making hospital operations smooth across India.
        </p>

        <p className="text-sm leading-7 mb-6">
          With over 15 years of experience in the medical field, he has played a
          key role in ensuring seamless manufacturing of hospital disposables,
          drapes, kits and more.
        </p>

        <a
          href="/about"
          className="inline-block bg-cyan-400 hover:bg-cyan-500 transition px-6 py-3 text-sm font-semibold tracking-wide"
        >
          CLICK HERE
        </a>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex w-1/4 justify-center">
        <Image
          src="/assests/img/about-us-1.png"
          alt="About Us"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

    </section>
  );
}
