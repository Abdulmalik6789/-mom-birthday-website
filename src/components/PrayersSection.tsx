import React from 'react';
import { FaPrayingHands, FaHeart, FaDove, FaStar } from 'react-icons/fa';

const PrayersSection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 relative">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://readdy.ai/api/search-image?query=Soft%20ethereal%20background%20with%20gentle%20floating%20candles%20and%20delicate%20flower%20petals%2C%20dreamy%20atmosphere%2C%20muted%20pastel%20colors%2C%20spiritual%20and%20peaceful%20ambiance%2C%20high%20key%20lighting&width=1440&height=800&seq=8&orientation=landscape"
                    alt="Prayer background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">
                        Prayers for Mom
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 md:p-10 text-center">
                    <FaPrayingHands className="text-3xl sm:text-4xl text-[#9370DB] mb-4 sm:mb-6 mx-auto" />
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 font-['Caveat',_cursive]">
                        May each sunrise bring you renewed strength and joy.<br />
                        May your heart always be filled with peace and contentment.<br />
                        May your smile continue to light up our world.<br />
                        May good health and happiness be your constant companions.<br />
                        May God's love surround you always and forever.
                    </p>
                    <div className="flex justify-center space-x-4 sm:space-x-6">
                        <FaHeart className="text-xl sm:text-2xl text-[#FFB6C1] transform hover:scale-110 transition-transform" />
                        <FaDove className="text-xl sm:text-2xl text-[#9370DB] transform hover:scale-110 transition-transform" />
                        <FaStar className="text-xl sm:text-2xl text-[#FFD700] transform hover:scale-110 transition-transform" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrayersSection;