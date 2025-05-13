import React from 'react';

const letters = [
    {
        intro: "Dear Mom,",
        author: "Emm",
        message: "Happy Birthday, Mom! As your firstborn, I'm forever grateful for the love, strength, and guidance you've given me since day one. You are my first home, my greatest teacher, and my biggest blessing. I love you endlessly!",
        wish: "Happy birthday to the most amazing woman I know. I love you more than words can express.",
        closing: "With all my love,\nMiskiat",
        rotate: "-1deg",
    },
    {
        intro: "To my wonderful wife,",
        author: "John",
        message: "47 years of your beautiful presence in this world, and I'm grateful for every moment we've shared together. Your love has made our house a home and our family complete.",
        wish: "Thank you for the joy, laughter, and love you bring to our lives every day. Happy birthday, my love.",
        closing: "Forever yours,\nDad",
        rotate: "1deg",
    },
    {
        intro: "Dearest Sister,",
        author: "Sarah",
        message: "Happy birthday to one of the most amazing humans in my life🎊☺ My very own sister not by blood but by bond💕🥰 A woman with a heart of gold 💫 A mother to many☺ when it comes to taking responsibilities, you've taught me in so many languages than I thought I would know 🥰 A very doting wife💗 loving sister and caring mother🥰 May almighty Allah reward you in more ways than one🙏 May he satisfy you with long life to reap the fruit of your labor 🙏 May you never experience any lack insha Allah🙏  My Allah continue to uphold your home. Thank you for being so loving and amazing 🥰❤ Enjoy your day sissy🎂🍰 cheers to more amazing years 🥂🎊🥰",
        wish: "May Allah continue to bless and protect you always!",
        closing: "Love always,\nMum Maziyah",
        rotate: "-0.5deg",
    },    
    {
        intro: "Dear Mom,",
        author: "Ameedat",
        message: "I just want to say a big fat thank you!\nI pray that Allah gives you long life in good health\nI LOVE YOU 🤍",
        wish: "Happy birthday to an amazing mother!",
        closing: "With love,\nAmeedat",
        rotate: "0.8deg",
    },
    {
        intro: "Happy Birthday, Mum,",
        author: "Abd muiz",
        message: "Happy Birthday to the most incredible woman I've ever known, you're the sunshine that brightens every day, the calm in every storm, and the safe haven where I can always find peace. Your love, guidance, and unwavering support mean the world to me.\n\nAs you celebrate another year of life, I want to thank you for being my rock, my role model. Your selflessness, kindness, and generosity inspire me daily. Here's to many more adventures, laughter-filled moments, and memories to cherish. May this birthday be as extraordinary as you are. I love you more than words can express.",
        wish: "Happy birthday to my extraordinary mother!",
        closing: "With deepest love,\nYour son, Abd muiz",
        rotate: "-0.7deg",
    },
    {
        intro: "Happy Birthday, Mum 🎉",
        author: "Abdsamad",
        message: "Alhamdulillah for you, Mum. Thank you for your endless love, sacrifices, and support. You've been our strength and our guide, and we pray Allah rewards you with long life, good health, peace, and abundant blessings. We love you deeply, and may this new year bring you ease, barakah, and answered prayers. Happy Birthday once again.",
        wish: "We love you so much, Mum. May this new year of your life be full of ease, barakah, and answered prayers. Happy birthday once again.",
        closing: "With love,\nAbdsamad",
        rotate: "0.5deg",
    },
    {
        intro: "My Dearest Mom,",
        author: "Abdulmalik",
        message: "How do I begin to thank the woman who gave me life and taught me how to live it? Your unwavering love and support have been the foundation upon which I've built my dreams. Every sacrifice you made, every late night you spent helping with homework, every word of encouragement when I needed it most – these moments have shaped who I am today.\n\nYour strength through life's challenges has taught me resilience. Your kindness toward others has shown me compassion. Your laughter has filled our home with joy that I carry wherever I go.",
        wish: "On your 47th birthday, I want you to know that you are cherished beyond measure. May this year bring you as much happiness as you've brought to everyone around you.",
        closing: "With infinite love and gratitude,\nAbdulmalik",
        rotate: "0.7deg",
        colSpan: "md:col-span-2",
        bg: "#FFF8F8"
    },    {
        intro: "It's finally your day mom❤",
        author: "Karimat",
        message: "Happy Birthday, Mom! May your day be filled with love, laughter, and all your favorite things. May Allah bless you with long life, good health, wisdom, and joy. You will reap the fruits of your labor, never know sorrow over us, and be protected always, Insha'Allah. Cheers to your new age💕, Mamii!",
        wish: "Happy birthday once again mamii🫂♥\nCheers to your new age🪄💕",
        closing: "With love,\nKarimat",
        rotate: "-0.3deg",
    },
    {
        intro: "Dear Super Mom,",
        author: "Ameerah",
        message: "A big shoutout to an incredible woman who has grown through pain and strength—from a daughter to a super wife and now a super mom. She's not just a biological mother, but also a stepmom, aunt, cousin, niece, and an all-around supportive figure. Her sacrifices, love, and dedication have built a strong and loving family. A reminder to her: love yourself, put yourself first sometimes, and know you are deeply appreciated.",
        wish: "Happy birthday to an amazing woman who wears so many hats with grace!",
        closing: "With love and admiration,\nAmeerah",
        rotate: "0.6deg",
    },
    {
        intro: "To our beloved Mom,",
        author: "Al-Ameen",
        message: "Happy Birthday, Mom! As your last born, I'll always be your baby—but today, I just want to say thank you for your endless love, warmth, and strength. I love you so much!",
        wish: "Happy birthday to the most amazing mom in the world!",
        closing: "With lots of love,\nAl-Ameen",
        rotate: "-0.4deg",
    },    {
        intro: "Dear Aunty,",
        author: "Maziyah",
        message: "Happy Birthday, Mummy! May your day be as lovely and strong as you are. Love always, Mayizah.",
        wish: "Wishing you a wonderful birthday filled with joy!",
        closing: "With love,\nMaziyah",
        rotate: "0.3deg",
    },    {
        intro: "Dear Aunty,",
        author: "Muhammad",
        message: "Happy Birthday, dearest Aunty! Wishing you joy, health, and endless blessings. — Muhammad",
        wish: "May Allah bless you with happiness and peace!",
        closing: "With love,\nMuhammad",
        rotate: "-0.2deg",
    },
];

const BirthdayLettersSection: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Birthday Letters</h2>
                <div className="w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Messages of love from those whose lives you've touched</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {letters.map((letter, index) => (
                    <div
                        key={index}
                        className={`${
                            letter.bg ? `bg-[${letter.bg}]` : "bg-white"
                        } p-6 rounded-lg shadow-md transform rotate-[${letter.rotate}] ${
                            letter.colSpan || ""
                        }`}
                    >
                        <div className="font-['Caveat',_cursive] text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                            <p>{letter.intro}</p>
                            <p className="mt-2">{letter.message}</p>
                            <p className="mt-2">{letter.wish}</p>
                            <p className="mt-4 text-right">{letter.closing}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BirthdayLettersSection;
