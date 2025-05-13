import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#9370DB] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-['Poppins',_sans-serif] mb-4">
                    Made with ❤️ for Mom's 47th Birthday
                </p>
                <p className="text-sm sm:text-base text-white/90">May 2, 2025</p>
            </div>
        </footer>
    );
};

export default Footer;