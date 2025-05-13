import React from 'react';
import mom1 from '../assets/mom1.jpg';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <img
                        src={mom1}
                        alt="Mother with family"
                        className="w-full h-full object-cover object-center transition-transform duration-700 scale-100 hover:scale-105"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 
                        sm:bg-gradient-to-r sm:from-[#9370DB]/70 sm:via-black/30 sm:to-black/50"></div>
                </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl mx-auto 
                transform transition-all duration-700 ease-out">
                <h1 className="text-white font-bold mb-6 font-['Poppins',_sans-serif] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                    leading-tight tracking-tight">
                    Happy 47th Birthday, Mom ❤️
                </h1>
                <p className="text-white font-light drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]
                    text-lg sm:text-xl md:text-2xl lg:text-3xl 
                    max-w-3xl mx-auto
                    opacity-90">
                    You are the heart of our family
                </p>
            </div>

            {/* Decorative elements for larger screens */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent 
                pointer-events-none hidden sm:block"></div>
        </section>
    );
};

export default HeroSection;
