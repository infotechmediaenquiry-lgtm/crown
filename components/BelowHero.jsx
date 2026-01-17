import React from 'react';
import { ShoppingCart, Headphones, Award, Gem } from 'lucide-react';

export default function BelowHero() {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative">
                        <img
                            src="/assests/img/nursestock.png"
                            alt="Healthcare Professionals"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: '#5B9BD5' }}>
                            15 Years Of Services To Hospitals
                        </h1>

                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex gap-4 items-start sm:flex-row flex-col">
                                <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
                                    <ShoppingCart className="w-12 h-12" style={{ color: '#5B9BD5' }} />
                                </div>

                                <div>
                                    <p className="text-gray-600 leading-relaxed italic text-center sm:text-left">
                                        Exporting Drapes & Disposables of all types used for over 15 years across India.
                                    </p>
                                </div>

                                <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto sm:ml-8">
                                    <Headphones className="w-12 h-12" style={{ color: '#5B9BD5' }} />
                                </div>

                                <div>
                                    <p className="text-gray-600 leading-relaxed text-center sm:text-left">
                                        Crown Health Care Disposables has always produced quality products which is un-matched & unrivaled
                                    </p>
                                </div>
                            </div>


                            {/* Feature 2 */}
                            <div className="flex gap-4 items-start sm:flex-row flex-col">
                                <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
                                    <Award className="w-12 h-12" style={{ color: '#5B9BD5' }} />
                                </div>

                                <div>
                                    <p className="text-gray-600 leading-relaxed italic text-center sm:text-left">
                                        Backed with well equipped infrastructural facilities for the distribution
                                    </p>
                                </div>

                                <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto sm:ml-8">
                                    <Gem className="w-12 h-12" style={{ color: '#5B9BD5' }} />
                                </div>

                                <div>
                                    <p className="text-gray-600 leading-relaxed text-center sm:text-left">
                                        Experienced Staff & 24/7 Email support to ensure faster resolution to your queries
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}