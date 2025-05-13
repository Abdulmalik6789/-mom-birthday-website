import React, { useState, useEffect } from 'react';
import MusicControl from './components/MusicControl';
import HeroSection from './components/HeroSection';
import HerStorySection from './components/HerStorySection';
import BirthdayLettersSection from './components/BirthdayLettersSection';
import AchievementsSection from './components/AchievementsSection';
import FamilyGallery from './components/FamilyGallery';
import DreamsSection from './components/DreamsSection';
import PrayersSection from './components/PrayersSection';
import QuestionnaireSection from './components/QuestionnaireSection';
import Footer from './components/Footer';




import './App.css'

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
    <>
        <div className="min-h-screen bg-gradient-to-b from-[#E6E6FA] to-[#FFFAF0] font-['Nunito',_sans-serif]">
            <MusicControl isPlaying={isPlaying} toggleMusic={toggleMusic} />
            <HeroSection />
            <HerStorySection />
            <BirthdayLettersSection />
            <AchievementsSection />
            <FamilyGallery familyPhotos={[]} openLightbox={() => {}} />
            <DreamsSection />
            <PrayersSection />
            <QuestionnaireSection />
            <Footer />
        </div>
    </>

    );
};
export default App
