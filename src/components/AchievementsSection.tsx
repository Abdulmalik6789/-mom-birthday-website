import React from 'react';
import { FaGraduationCap, FaAward, FaBriefcase, FaPaintBrush, FaHeart, FaGlobe } from 'react-icons/fa';

const achievements = [
    { icon: <FaGraduationCap />, title: "Master's Degree", desc: "Completed her Master's in Design while raising children" },
    { icon: <FaAward />, title: "Community Award", desc: "Recognized for volunteer work with local children's charity" },
    { icon: <FaBriefcase />, title: "Career Success", desc: "Built a thriving business from the ground up" },
    // { icon: <FaPaintBrush />, title: "Art Exhibition", desc: "Featured artist in regional gallery showcase" },
    { icon: <FaHeart />, title: "Family Legacy", desc: "Raised kind, successful children with endless love" },
    // { icon: <FaGlobe />, title: "World Traveler", desc: "Explored 15 countries, embracing diverse cultures" },
];

const AchievementsSection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-[#F8F4FF]">
            <div className="text-center mb-12 sm:mb-16 max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Achievements</h2>
                <div className="w-16 sm:w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">Celebrating the incredible accomplishments that make Mom so special</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {achievements.map((achievement, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-md p-6 sm:p-8 transform transition-all duration-300 
                            hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg focus-within:ring-2 
                            focus-within:ring-[#9370DB]/50 cursor-pointer"
                        tabIndex={0}
                        role="article"
                        aria-labelledby={`achievement-title-${index}`}
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FFE4E1] flex items-center justify-center 
                            mx-auto mb-4 text-[#9370DB] text-xl sm:text-2xl">
                            {achievement.icon}
                        </div>
                        <h3 
                            id={`achievement-title-${index}`}
                            className="text-lg sm:text-xl font-bold text-center text-[#9370DB] mb-2"
                        >
                            {achievement.title}
                        </h3>
                        <p className="text-gray-600 text-center text-sm sm:text-base">{achievement.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AchievementsSection;