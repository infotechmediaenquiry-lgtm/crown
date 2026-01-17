import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";

import BelowHero from "@/components/BelowHero";
import ManufactureSection from "@/components/ManufactureSection";
import AboutSection from "@/components/AboutSection";
import HospitableSection from "@/components/HospitableSection";
import SuccessSection from '@/components/SuccessSection';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<div className="relative">

				<div className="sticky top-0 z-0 h-screen">
					<Hero />
				</div>

				<div className="relative z-10 bg-white">
					<BelowHero />
					<ManufactureSection />
				</div>
			</div>

			{/* ABOUT SECTION */}
			<section className="relative h-[80vh] w-full">
				{/* Background Image */}
				<Image
					src="/assests/img/Home-page-3.jpg"
					alt="Background"
					fill
					priority
					className="object-cover"
				/>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/40 z-10"></div>

				{/* Content */}
				<div className="relative z-20 top-20">
					<AboutSection />
				</div>
			</section>

			{/* HOSPITABLE SECTION */}
			<section className="relative h-[80vh] w-full">
				{/* <Image
					src="/assests/img/Home-page-3.jpg"
					alt="Hospital"
					fill
					className="object-cover"
				/> */}

				<div className="absolute inset-0 bg-black/40 z-10"></div>

				<div className="relative z-20">
					<HospitableSection />
				</div>

				
			</section>
			<SuccessSection/>
		</>
	);
}
