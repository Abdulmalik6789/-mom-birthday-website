import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ClosingSection: React.FC = () => {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8F4FF] to-[#FFE4E1]/20"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <FaHeart className="text-4xl sm:text-5xl md:text-6xl text-[#9370DB] mx-auto mb-6 sm:mb-8 
                    animate-pulse" />
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9370DB] 
                    font-['Poppins',_sans-serif] mb-4 sm:mb-6">
                    Forever Grateful
                </h2>
                
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                        Mom, your love has shaped our lives in countless beautiful ways. Your strength, 
                        wisdom, and endless compassion continue to inspire us every day.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                        As you celebrate another year of life, we celebrate the incredible blessing 
                        of having you as our mother. Your presence makes our world brighter and warmer.
                    </p>
                </div>
                
                <div className="inline-block bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 
                    shadow-lg transform transition-all duration-300 hover:shadow-xl">
                    <p className="text-lg sm:text-xl md:text-2xl font-['Caveat',_cursive] text-[#9370DB]">
                        With all our love,
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 mt-2">Your loving family</p>
                </div>
            </div>
        </section>
    );
};

export default ClosingSection;