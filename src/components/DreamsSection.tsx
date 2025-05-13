import React from 'react';
import { FaHome, FaPlane } from 'react-icons/fa';

const DreamsSection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-[#F8F4FF]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">
                        My Dreams for You
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-300
                                focus-within:scale-[1.02] focus-within:ring-2 focus-within:ring-[#9370DB]/50">
                        <FaHome className="text-3xl sm:text-4xl text-[#9370DB] mb-4" />
                        <h3 className="text-xl sm:text-2xl font-bold text-[#9370DB] mb-3 sm:mb-4">A Dream Home</h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            I dream of building you a beautiful home where you can relax and enjoy your golden years...
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-300
                                focus-within:scale-[1.02] focus-within:ring-2 focus-within:ring-[#9370DB]/50">
                        <FaPlane className="text-3xl sm:text-4xl text-[#9370DB] mb-4" />
                        <h3 className="text-xl sm:text-2xl font-bold text-[#9370DB] mb-3 sm:mb-4">World Travel</h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            I want to take you on adventures around the world, visiting all the places you've dreamed of seeing...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DreamsSection;