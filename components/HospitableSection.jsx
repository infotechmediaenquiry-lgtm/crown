import Image from "next/image";

export default function HospitableSection() {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* TOP LEFT – TEXT */}
        <div className="bg-[#0b4f7c] text-white flex flex-col justify-center px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Hospitable Disposables
          </h2>

          <p className="text-sm leading-7 mb-8">
            Hospital Disposables are basically one time “use and throw” clothing
            used by medical experts, doctors and hospital staff. These products
            help avoid cross contamination and keep infection out. Crown Health
            Care manufactures disposables using non-woven fabrics imported from
            renowned companies.
          </p>

          <div className="flex items-center justify-center gap-3 text-sm">
            <span>EXPLORE OUR</span>
            <a href="disposable-section" className="bg-cyan-400 text-white px-4 py-2 font-semibold tracking-wider">
              DISPOSABLE
            </a>
            <span>SECTION</span>
          </div>
        </div>

        {/* TOP RIGHT – IMAGE */}
        <div className="relative h-[350px] md:h-auto">
          <Image
            src="/assests/img/surgical_gown_front.png"
            alt="Hospitable Disposables"
            fill
            className="object-cover"
          />
        </div>

        {/* BOTTOM LEFT – IMAGE */}
        <div className="relative h-[350px] md:h-auto">
          <Image
            src="/assests/img/surgical-drapes.png"
            alt="Hospitable Drapes"
            fill
            className="object-cover"
          />
        </div>

        {/* BOTTOM RIGHT – TEXT */}
        <div className="bg-[#0b4f7c] text-white flex flex-col justify-center px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Hospitable Drapes
          </h2>

          <p className="text-sm leading-7 mb-8">
            Hospital Drapes are made from non-woven, fluid-repellent fabrics used
            during surgical procedures. These drapes are supplied duly sterilized
            and prevent bacterial migration, ensuring complete safety during
            surgery.
          </p>

          <div className="flex items-center justify-center gap-3 text-sm">
            <span>EXPLORE OUR</span>
            <a href="drapes-section" className="bg-cyan-400 text-white px-4 py-2 font-semibold tracking-wider">
              DRAPES
            </a>
            <span>SECTION</span>
          </div>
        </div>

      </div>
    </section>
  );
}
