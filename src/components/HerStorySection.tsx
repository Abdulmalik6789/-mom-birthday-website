// filepath: c:\Users\HomePC\mom birthday\birthday\src\components\HerStorySection.tsx
import React from 'react';

const milestones = [
{ year: "1978", title: "Born in Oceanview", desc: "Welcomed into the world on a beautiful spring day" },
{ year: "1996", title: "College Graduate", desc: "Earned her degree in Fine Arts with honors" },
{ year: "1999", title: "Wedding Day", desc: "Married Dad in a beautiful ceremony by the beach" },
{ year: "2002", title: "First Child", desc: "Became a mother and discovered her greatest joy" },
{ year: "2004", title: "Second Child", desc: "Our family grew with another bundle of joy" },
{ year: "2007", title: "Third Child", desc: "Our family grew with another bundle of joy" },
{ year: "2010", title: "Fourth Child", desc: "Our family grew with another bundle of joy" },
{ year: "2013", title: "Fifth Child", desc: "Our family grew with another bundle of joy" },
{ year: "2018", title: "Traveled out of the country", desc: "To give a better life " },
// { year: "2018", title: "Community Leadership", desc: "Elected as local arts council president" },
// { year: "2020", title: "Family Milestone", desc: "Celebrated 20 years of creating a loving home" },
// { year: "2022", title: "Design School Opening", desc: "Opened her own design school to mentor others" },
// { year: "2024", title: "Global Expansion", desc: "Extended business operations internationally" }
];

const HerStorySection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Her Story</h2>
                <div className="w-16 sm:w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="prose max-w-none">                    <div className="space-y-6">
                        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                            Mom's journey began in 1978, in a small coastal town where she developed her love for Allah and everything she does. Always the creative spirit, she has always been someone that loves doing business while balancing family life with remarkable grace. Through every challenge, her strength and kindness have been our family's foundation.
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                            Her unwavering support has guided us through life's ups and downs. Whether cheering at school events or offering wisdom during difficult times, she has always been our biggest advocate and source of unconditional love. Her ability to find joy in small moments continues to inspire everyone around her.
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                            Today, we celebrate not just another year of her life, but the countless ways she has enriched ours. Her laughter, compassion, and incredible cooking have created a home filled with warmth and love that extends to everyone she meets.
                        </p>
                    </div>
                </div>
                <div className="space-y-4 sm:space-y-6">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="relative pl-12 sm:pl-16 pb-4 sm:pb-8">
                            <div className="absolute left-0 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#9370DB] text-white flex items-center justify-center z-10 text-sm sm:text-base">
                                <span className="font-bold">{milestone.year}</span>
                            </div>
                            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg">
                                <h3 className="font-bold text-lg sm:text-xl text-[#9370DB] mb-1 sm:mb-2">{milestone.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{milestone.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HerStorySection;