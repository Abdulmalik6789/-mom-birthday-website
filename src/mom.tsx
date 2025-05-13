import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [isPlaying, setIsPlaying] = useState(false);
const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
useEffect(() => {
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
setAudioElement(audio);
return () => {
if (audioElement) {
audioElement.pause();
}
};
}, []);
const toggleMusic = () => {
if (audioElement) {
if (isPlaying) {
audioElement.pause();
} else {
audioElement.play();
}
setIsPlaying(!isPlaying);
}
};
return (
<div className="min-h-screen bg-gradient-to-b from-[#E6E6FA] to-[#FFFAF0] font-['Nunito',_sans-serif]">
{/* Music Control */}
<button
onClick={toggleMusic}
className="fixed bottom-5 right-5 z-50 bg-[#FFE4E1] p-3 rounded-full shadow-lg cursor-pointer !rounded-button whitespace-nowrap"
aria-label="Toggle Music"
>
<i className={`fas ${isPlaying ? 'fa-pause' : 'fa-music'} text-[#9370DB]`}></i>
</button>
{/* Hero Section */}
<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src="https://readdy.ai/api/search-image?query=A%20warm%20family%20portrait%20of%20a%20mother%20surrounded%20by%20her%20loving%20family%2C%20soft%20natural%20lighting%2C%20gentle%20smiles%2C%20emotional%20connection%2C%20blurred%20background%20with%20soft%20bokeh%20effect%2C%20warm%20tones%20of%20cream%20and%20gold%2C%20professional%20photography%2C%20high%20resolution%2C%20heartwarming%20scene&width=1440&height=864&seq=1&orientation=landscape"
alt="Mother with family"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-[#9370DB]/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl">
<h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-['Poppins',_sans-serif] drop-shadow-lg">
Happy 47th Birthday, Mom ❤️
</h1>
<p className="text-xl md:text-2xl text-white font-light drop-shadow-md">
You are the heart of our family
</p>
</div>
</section>
{/* Her Story Section */}
<section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Her Story</h2>
<div className="w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="prose max-w-none">
<p className="text-lg leading-relaxed text-gray-700">
Mom's journey began in 1978, in a small coastal town where she developed her love for the ocean and art. Always the creative spirit, she pursued her passion for design while balancing family life with remarkable grace. Through every challenge, her strength and kindness have been our family's foundation.
</p>
<p className="text-lg leading-relaxed text-gray-700 mt-4">
Her unwavering support has guided us through life's ups and downs. Whether cheering at school events or offering wisdom during difficult times, she has always been our biggest advocate and source of unconditional love. Her ability to find joy in small moments continues to inspire everyone around her.
</p>
<p className="text-lg leading-relaxed text-gray-700 mt-4">
Today, we celebrate not just another year of her life, but the countless ways she has enriched ours. Her laughter, compassion, and incredible cooking have created a home filled with warmth and love that extends to everyone she meets.
</p>
</div>
<div className="space-y-6">
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#FFE4E1] ml-6"></div>
{[
{ year: "1978", title: "Born in Oceanview", desc: "Welcomed into the world on a beautiful spring day" },
{ year: "1996", title: "College Graduate", desc: "Earned her degree in Fine Arts with honors" },
{ year: "1999", title: "Wedding Day", desc: "Married Dad in a beautiful ceremony by the beach" },
{ year: "2001", title: "First Child", desc: "Became a mother and discovered her greatest joy" },
{ year: "2005", title: "Second Child", desc: "Our family grew with another bundle of joy" },
{ year: "2008", title: "Art Gallery Exhibition", desc: "First solo art exhibition showcasing her paintings" },
{ year: "2010", title: "Started Business", desc: "Launched her successful interior design company" },
{ year: "2013", title: "International Recognition", desc: "Won Best Interior Designer Award" },
{ year: "2015", title: "Published First Book", desc: "Released her book on modern home design" },
{ year: "2018", title: "Community Leadership", desc: "Elected as local arts council president" },
{ year: "2020", title: "Family Milestone", desc: "Celebrated 20 years of creating a loving home" },
{ year: "2022", title: "Design School Opening", desc: "Opened her own design school to mentor others" },
{ year: "2024", title: "Global Expansion", desc: "Extended business operations internationally" }
].map((milestone, index) => (
<div key={index} className="relative pl-16 pb-8">
<div className="absolute left-0 w-12 h-12 rounded-full bg-[#9370DB] text-white flex items-center justify-center z-10">
<span className="font-bold">{milestone.year}</span>
</div>
<div className="bg-white p-5 rounded-lg shadow-md">
<h3 className="font-bold text-xl text-[#9370DB]">{milestone.title}</h3>
<p className="text-gray-600">{milestone.desc}</p>
</div>
</div>
))}
</div>
</div>
</div>
</section>
{/* Achievements Section */}
<section className="py-20 px-6 md:px-12 bg-[#F8F4FF]">
<div className="text-center mb-16 max-w-7xl mx-auto">
<h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Achievements</h2>
<div className="w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
<p className="mt-4 text-gray-600 max-w-2xl mx-auto">Celebrating the incredible accomplishments that make Mom so special</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
{[
{ icon: "fa-graduation-cap", title: "Master's Degree", desc: "Completed her Master's in Design while raising children" },
{ icon: "fa-award", title: "Community Award", desc: "Recognized for volunteer work with local children's charity" },
{ icon: "fa-briefcase", title: "Career Success", desc: "Built a thriving business from the ground up" },
{ icon: "fa-paint-brush", title: "Art Exhibition", desc: "Featured artist in regional gallery showcase" },
{ icon: "fa-heart", title: "Family Legacy", desc: "Raised kind, successful children with endless love" },
{ icon: "fa-globe", title: "World Traveler", desc: "Explored 15 countries, embracing diverse cultures" }
].map((achievement, index) => (
<div key={index} className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer !rounded-button whitespace-nowrap">
<div className="w-16 h-16 rounded-full bg-[#FFE4E1] flex items-center justify-center mx-auto mb-4">
<i className={`fas ${achievement.icon} text-2xl text-[#9370DB]`}></i>
</div>
<h3 className="text-xl font-bold text-center text-[#9370DB] mb-2">{achievement.title}</h3>
<p className="text-gray-600 text-center">{achievement.desc}</p>
</div>
))}
</div>
</section>
{/* Birthday Letters Section */}
<section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Birthday Letters</h2>
<div className="w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
<p className="mt-4 text-gray-600 max-w-2xl mx-auto">Messages of love from those whose lives you've touched</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[-1deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>Dear Mom,</p>
<p className="mt-2">
You've always been my role model and best friend. Your strength, kindness, and wisdom guide me every day. Thank you for always believing in me, even when I didn't believe in myself.
</p>
<p className="mt-2">
Happy birthday to the most amazing woman I know. I love you more than words can express.
</p>
<p className="mt-4 text-right">With all my love,<br />Emma</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[1deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>To my wonderful wife,</p>
<p className="mt-2">
47 years of your beautiful presence in this world, and I'm grateful for every moment we've shared together. Your love has made our house a home and our family complete.
</p>
<p className="mt-2">
Thank you for the joy, laughter, and love you bring to our lives every day. Happy birthday, my love.
</p>
<p className="mt-4 text-right">Forever yours,<br />John</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[-0.5deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>Dearest Sister,</p>
<p className="mt-2">
From building forts as kids to navigating adulthood together, you've always been my rock. Your strength as a mother inspires me daily, and I'm so proud of the amazing woman you've become.
</p>
<p className="mt-2">
Wishing you all the happiness you deserve on your special day.
</p>
<p className="mt-4 text-right">Love always,<br />Sarah</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[0.8deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>Dear Mom,</p>
<p className="mt-2">
Your design classes changed my life and career path. You're not just a mentor, but a true inspiration to all your students. Thank you for sharing your knowledge and passion with us.
</p>
<p className="mt-2">
Happy birthday to an amazing teacher and role model!
</p>
<p className="mt-4 text-right">Gratefully,<br />Lisa (Your Student)</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[-0.7deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>To my cherished friend,</p>
<p className="mt-2">
30 years of friendship, and you still amaze me with your creativity and kindness. Your home has been a sanctuary for so many of us through the years.
</p>
<p className="mt-2">
Happy birthday to a truly special soul!
</p>
<p className="mt-4 text-right">Love,<br />Patricia</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[0.5deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>Dear Auntie,</p>
<p className="mt-2">
You've always been like a second mother to me. Your advice and support through the years have meant more than you know. Your success inspires us all.
</p>
<p className="mt-2">
Wishing you the happiest of birthdays!
</p>
<p className="mt-4 text-right">With love,<br />Nicole</p>
</div>
</div>
<div className="bg-[#FFF8F8] p-6 rounded-lg shadow-md transform rotate-[0.7deg] md:col-span-2">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>My Dearest Mom,</p>
<p className="mt-2">
How do I begin to thank the woman who gave me life and taught me how to live it? Your unwavering love and support have been the foundation upon which I've built my dreams. Every sacrifice you made, every late night you spent helping with homework, every word of encouragement when I needed it most – these moments have shaped who I am today.
</p>
<p className="mt-2">
Your strength through life's challenges has taught me resilience. Your kindness toward others has shown me compassion. Your laughter has filled our home with joy that I carry wherever I go.
</p>
<p className="mt-2">
On your 47th birthday, I want you to know that you are cherished beyond measure. May this year bring you as much happiness as you've brought to everyone around you.
</p>
<p className="mt-4 text-right">With infinite love and gratitude,<br />Your child</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[-0.3deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>To my favorite person,</p>
<p className="mt-2">
Grandma always said you were born with a light inside you that brightens every room. After all these years of friendship, I can confirm she was absolutely right.
</p>
<p className="mt-2">
Happy birthday to my dearest friend. Here's to many more years of adventures together!
</p>
<p className="mt-4 text-right">Cheers!<br />Michelle</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[0.6deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>Dear Business Partner,</p>
<p className="mt-2">
Working alongside you has been the greatest privilege. Your vision and leadership have transformed not just our company, but the entire industry. You make success look effortless.
</p>
<p className="mt-2">
Happy birthday to an incredible entrepreneur and friend!
</p>
<p className="mt-4 text-right">Best wishes,<br />Robert</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[-0.4deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>To our beloved Mom,</p>
<p className="mt-2">
Your grandchildren adore you beyond measure. The way you make each of them feel special and loved is truly magical. Thank you for being such an amazing grandmother.
</p>
<p className="mt-2">
Happy birthday from all of us!
</p>
<p className="mt-4 text-right">Love,<br />The Grandkids</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[0.3deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>Dear Community Leader,</p>
<p className="mt-2">
Your contributions to our local arts council have transformed our community. Your passion for nurturing young artists and creating spaces for creativity has left an indelible mark.
</p>
<p className="mt-2">
Happy birthday to an inspiring leader!
</p>
<p className="mt-4 text-right">Warmly,<br />The Arts Council Team</p>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-md transform rotate-[-0.2deg]">
<div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700">
<p>To my mentor,</p>
<p className="mt-2">
Your guidance in the design world has been invaluable. The way you balance creativity with business acumen continues to inspire everyone in the industry.
</p>
<p className="mt-2">
Wishing you a wonderful birthday!
</p>
<p className="mt-4 text-right">With admiration,<br />James</p>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-[#9370DB] text-white py-8 text-center">
<p className="text-lg">Made with ❤️ for Mom's 47th Birthday</p>
<p className="text-sm mt-2">May 2, 2025</p>
</footer>
</div>
);
};
export default App
