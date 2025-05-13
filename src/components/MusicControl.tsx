// filepath: c:\Users\HomePC\mom birthday\birthday\src\components\MusicControl.tsx
import React, { useEffect } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

interface MusicControlProps {
    isPlaying: boolean;
    toggleMusic: () => void;
}

const MusicControl: React.FC<MusicControlProps> = ({ isPlaying, toggleMusic }) => {
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element for birthday song
        audioRef.current = new Audio('/birthday-song.mp3');
        audioRef.current.loop = true;
        
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <button
            onClick={toggleMusic}
            className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-50 
                bg-[#FFE4E1] hover:bg-[#FFE4E1]/90 active:bg-[#FFE4E1]/80
                p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl
                transform transition-all duration-300 hover:scale-110 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-[#9370DB]/50 focus:ring-offset-2
                cursor-pointer touch-manipulation"
            aria-label={`${isPlaying ? 'Pause' : 'Play'} birthday song`}
            title={`${isPlaying ? 'Pause' : 'Play'} birthday song`}
        >
            {isPlaying ? (
                <FaPauseCircle className="text-[#9370DB] text-2xl sm:text-3xl" />
            ) : (
                <FaPlayCircle className="text-[#9370DB] text-2xl sm:text-3xl" />
            )}
            <span className="sr-only">{isPlaying ? 'Pause' : 'Play'} birthday song</span>
        </button>
    );
};

export default MusicControl;