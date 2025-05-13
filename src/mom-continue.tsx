// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [isPlaying, setIsPlaying] = useState(false);
const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
const openLightbox = (imageSrc: string) => {
setSelectedImage(imageSrc);
};
const closeLightbox = () => {
setSelectedImage(null);
};
const familyPhotos = [
{
src: "https://readdy.ai/api/search-image?query=A%20heartwarming%20family%20moment%20captured%20during%20a%20sunset%20picnic%20in%20a%20blooming%20garden%2C%20soft%20natural%20lighting%2C%20genuine%20smiles%2C%20candid%20interaction%20between%20mother%20and%20children%2C%20professional%20photography%20style%2C%20warm%20color%20palette&width=800&height=600&seq=2&orientation=landscape",
caption: "Summer Picnic 2024"
},
{
src: "https://readdy.ai/api/search-image?query=Mother%20and%20children%20baking%20together%20in%20a%20bright%20modern%20kitchen%2C%20flour%20dusted%20counters%2C%20joyful%20laughter%2C%20natural%20window%20lighting%2C%20lifestyle%20photography%2C%20warm%20inviting%20atmosphere&width=800&height=600&seq=3&orientation=landscape",
caption: "Baking Memories"
},
{
src: "https://readdy.ai/api/search-image?query=Family%20beach%20vacation%20scene%20with%20mother%20and%20children%20playing%20in%20the%20waves%2C%20golden%20hour%20lighting%2C%20ocean%20backdrop%2C%20candid%20moment%20of%20joy%2C%20professional%20beach%20photography&width=800&height=600&seq=4&orientation=landscape",
caption: "Beach Vacation"
},
{
src: "https://readdy.ai/api/search-image?query=Cozy%20family%20movie%20night%20scene%20with%20mother%20and%20children%20on%20a%20plush%20sofa%2C%20soft%20lamp%20lighting%2C%20blankets%20and%20pillows%2C%20intimate%20family%20moment%2C%20lifestyle%20photography&width=800&height=600&seq=5&orientation=landscape",
caption: "Movie Night"
},
{
src: "https://readdy.ai/api/search-image?query=Mother%20gardening%20with%20children%20in%20a%20beautiful%20backyard%2C%20spring%20flowers%20blooming%2C%20natural%20sunlight%20filtering%20through%20trees%2C%20candid%20teaching%20moment%2C%20lifestyle%20photography&width=800&height=600&seq=6&orientation=landscape",
caption: "Garden Time"
},
{
src: "https://readdy.ai/api/search-image?query=Family%20hiking%20adventure%20in%20autumn%20forest%2C%20mother%20leading%20children%20on%20nature%20trail%2C%20fall%20colors%2C%20dramatic%20landscape%2C%20outdoor%20lifestyle%20photography&width=800&height=600&seq=7&orientation=landscape",
caption: "Nature Walk"
}
];
return (
<div className="min-h-screen bg-gradient-to-b from-[#E6E6FA] to-[#FFFAF0] font-['Nunito',_sans-serif]">
{/* Previous sections remain unchanged */}
{/* ... Copy all previous sections here ... */}
{/* Photo Gallery Section */}
<section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Family Gallery</h2>
<div className="w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
<p className="mt-4 text-gray-600 max-w-2xl mx-auto">Cherished moments captured through the years</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{familyPhotos.map((photo, index) => (
<div
key={index}
className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
onClick={() => openLightbox(photo.src)}
>
<img
src={photo.src}
alt={photo.caption}
className="w-full h-64 object-cover"
/>
<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/70 to-transparent">
<p className="text-lg font-semibold">{photo.caption}</p>
</div>
</div>
))}
</div>
</section>
{/* Dreams Section */}
<section className="py-20 px-6 md:px-12 bg-[#F8F4FF]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">My Dreams for You</h2>
<div className="w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
<i className="fas fa-home text-4xl text-[#9370DB] mb-4"></i>
<h3 className="text-2xl font-bold text-[#9370DB] mb-4">A Dream Home</h3>
<p className="text-gray-700 leading-relaxed">
I dream of building you a beautiful home where you can relax and enjoy your golden years. A place with a garden where you can tend to your flowers, a spacious kitchen for your cooking adventures, and a cozy reading nook by the window.
</p>
</div>
<div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
<i className="fas fa-plane text-4xl text-[#9370DB] mb-4"></i>
<h3 className="text-2xl font-bold text-[#9370DB] mb-4">World Travel</h3>
<p className="text-gray-700 leading-relaxed">
I want to take you on adventures around the world, visiting all the places you've dreamed of seeing. From the lavender fields of Provence to the serene beaches of Bali, we'll create unforgettable memories together.
</p>
</div>
</div>
</div>
</section>
{/* Prayers Section */}
<section className="py-20 px-6 md:px-12 relative">
<div className="absolute inset-0 z-0">
<img
src="https://readdy.ai/api/search-image?query=Soft%20ethereal%20background%20with%20gentle%20floating%20candles%20and%20delicate%20flower%20petals%2C%20dreamy%20atmosphere%2C%20muted%20pastel%20colors%2C%20spiritual%20and%20peaceful%20ambiance%2C%20high%20key%20lighting&width=1440&height=800&seq=8&orientation=landscape"
alt="Prayer background"
className="w-full h-full object-cover opacity-20"
/>
</div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Prayers for Mom</h2>
<div className="w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
</div>
<div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 text-center">
<i className="fas fa-pray text-4xl text-[#9370DB] mb-6"></i>
<p className="text-gray-700 text-lg leading-relaxed mb-6 font-['Caveat',_cursive]">
May each sunrise bring you renewed strength and joy.<br/>
May your heart always be filled with peace and contentment.<br/>
May your smile continue to light up our world.<br/>
May good health and happiness be your constant companions.<br/>
May God's love surround you always and forever.
</p>
<div className="flex justify-center space-x-4">
<i className="fas fa-heart text-[#FFB6C1]"></i>
<i className="fas fa-dove text-[#9370DB]"></i>
<i className="fas fa-star text-[#FFD700]"></i>
</div>
</div>
</div>
</section>
{/* Lightbox */}
{selectedImage && (
<div
className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
onClick={closeLightbox}
>
<button
className="absolute top-4 right-4 text-white text-4xl cursor-pointer !rounded-button whitespace-nowrap"
onClick={closeLightbox}
>
<i className="fas fa-times"></i>
</button>
<img
src={selectedImage}
alt="Enlarged view"
className="max-w-full max-h-[90vh] object-contain"
/>
</div>
)}
{/* Music Control */}
<button
onClick={toggleMusic}
className="fixed bottom-5 right-5 z-50 bg-[#FFE4E1] p-3 rounded-full shadow-lg cursor-pointer !rounded-button whitespace-nowrap"
aria-label="Toggle Music"
>
<i className={`fas ${isPlaying ? 'fa-pause' : 'fa-music'} text-[#9370DB]`}></i>
</button>
{/* Questionnaire Section */}
<section className="py-20 px-6 md:px-12 bg-[#F8F4FF]">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Mom's Reflections</h2>
<div className="w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
<p className="mt-4 text-gray-600">Share your thoughts and memories with us, Mom!</p>
</div>
<div className="space-y-4">
{[
{ question: "What's your favorite childhood memory?", icon: "fa-heart" },
{ question: "What advice would you give your younger self?", icon: "fa-lightbulb" },
{ question: "What's your secret recipe that everyone loves?", icon: "fa-utensils" },
{ question: "What makes you laugh the most?", icon: "fa-smile-beam" },
{ question: "What's your dream vacation destination?", icon: "fa-plane" },
{ question: "What's the best part about being a mom?", icon: "fa-star" },
{ question: "What's your favorite family tradition?", icon: "fa-home" },
].map((item, index) => (
<div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
<button
className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#FFF5F5] transition-colors duration-300 !rounded-button whitespace-nowrap"
onClick={(e) => {
const answer = e.currentTarget.nextElementSibling;
if (answer) {
(answer as HTMLElement).style.maxHeight = (answer as HTMLElement).style.maxHeight ? '' : `${(answer as HTMLElement).scrollHeight}px`;
}
}}
>
<span className="flex items-center">
<i className={`fas ${item.icon} text-[#9370DB] mr-4`}></i>
<span className="text-lg font-semibold text-gray-700">{item.question}</span>
</span>
<i className="fas fa-chevron-down text-[#9370DB] transition-transform duration-300"></i>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 bg-white">
<div className="p-6 border-t border-[#FFE4E1]">
<textarea
className="w-full p-3 border border-[#E6E6FA] rounded-lg focus:outline-none focus:border-[#9370DB] text-gray-700 min-h-[100px]"
placeholder="Write your answer here..."
></textarea>
<button className="mt-3 px-4 py-2 bg-[#9370DB] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300 !rounded-button whitespace-nowrap">
Save Memory
</button>
</div>
</div>
</div>
))}
</div>
</div>
</section>
{/* Closing Section */}
<section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#F8F4FF] to-[#FFE4E1]">
<div className="max-w-4xl mx-auto text-center">
<div className="mb-12">
<h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-6">With All Our Love</h2>
<p className="text-xl text-gray-700 leading-relaxed">
Thank you for being the most amazing mom in the world. Your love, strength, and wisdom guide us every day. We're so blessed to have you in our lives.
</p>
</div>
<div className="bg-white rounded-lg shadow-lg p-8 mb-12">
<div className="max-w-2xl mx-auto">
<h3 className="text-2xl font-bold text-[#9370DB] mb-6">Leave a Video Message</h3>
<div className="relative">
<input
type="file"
accept="video/*"
className="hidden"
id="videoUpload"
/>
<label
htmlFor="videoUpload"
className="block w-full p-12 border-2 border-dashed border-[#9370DB] rounded-lg cursor-pointer hover:bg-[#F8F4FF] transition-colors duration-300"
>
<div className="text-center">
<i className="fas fa-video text-4xl text-[#9370DB] mb-4"></i>
<p className="text-gray-600">Click to upload a video message</p>
<p className="text-sm text-gray-500 mt-2">Maximum size: 100MB</p>
</div>
</label>
</div>
</div>
</div>
<div className="text-center">
<p className="text-3xl font-['Caveat',_cursive] text-[#9370DB] mb-4">Happy Birthday, Mom!</p>
<p className="text-lg text-gray-600">We love you to the moon and back ❤️</p>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-[#9370DB] text-white py-12 text-center">
<div className="max-w-4xl mx-auto px-6">
<p className="text-lg mb-6">Made with ❤️ for Mom's 47th Birthday</p>
<div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
<div className="mb-4">
<label htmlFor="signature" className="block text-sm mb-2">Sign your heartfelt message (min 20 characters)</label>
<input 
type="text" 
id="signature" 
className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
placeholder="Enter your name and a short message..."
minLength={20}
onChange={(e) => {
const input = e.target;
if (input.value.length < 20) {
input.setCustomValidity('Please enter at least 20 characters');
} else {
input.setCustomValidity('');
}
}}
/>
</div>
<button 
className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors duration-300 !rounded-button whitespace-nowrap"
onClick={(e) => {
const input = document.getElementById('signature') as HTMLInputElement;
if (input && input.value.length >= 20) {
const signatureDisplay = document.getElementById('signatureDisplay');
if (signatureDisplay) {
signatureDisplay.textContent = input.value;
input.value = '';
}
}
}}
>
Sign Message
</button>
<div id="signatureDisplay" className="mt-4 font-['Caveat',_cursive] text-xl"></div>
</div>
<p className="text-sm mt-6">May 2, 2025</p>
</div>
</footer>
</div>
);
};
export default App
