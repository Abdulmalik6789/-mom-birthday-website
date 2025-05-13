import React, { useState } from 'react';
import { FaHeart, FaLightbulb, FaUtensils, FaSmileBeam, FaPlane, FaStar, FaHome, FaChevronDown } from 'react-icons/fa';

const questions = [
    { question: "What's your favorite childhood memory?", icon: <FaHeart /> },
    { question: "What advice would you give your younger self?", icon: <FaLightbulb /> },
    { question: "What's your secret recipe that everyone loves?", icon: <FaUtensils /> },
    { question: "What makes you laugh the most?", icon: <FaSmileBeam /> },
    { question: "What's your dream vacation destination?", icon: <FaPlane /> },
    { question: "What's the best part about being a mom?", icon: <FaStar /> },
    { question: "What's your favorite family tradition?", icon: <FaHome /> },
];

const QuestionnaireSection: React.FC = () => {
    const [savedQuestions, setSavedQuestions] = useState<number[]>([]);
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const handleSave = (index: number, answerElement: HTMLElement | null) => {
        if (!savedQuestions.includes(index)) {
            setSavedQuestions([...savedQuestions, index]);
        }
        // Collapse the dropdown after a brief delay
        setTimeout(() => {
            setOpenQuestion(null);
            if (answerElement) {
                answerElement.style.maxHeight = '';
            }
        }, 500);
    };

    const toggleQuestion = (index: number, element: HTMLElement) => {
        // Close previously opened question if it exists and is different from current
        if (openQuestion !== null && openQuestion !== index) {
            const prevElement = document.getElementById(`question-${openQuestion}`);
            if (prevElement) {
                prevElement.style.maxHeight = '';
            }
        }

        if (openQuestion === index) {
            setOpenQuestion(null);
            element.style.maxHeight = '';
        } else {
            setOpenQuestion(index);
            element.style.maxHeight = `${element.scrollHeight}px`;
        }
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-[#F8F4FF]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">
                        Mom's Reflections
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
                    <p className="mt-4 text-gray-600 text-base sm:text-lg">Share your thoughts and memories with us, Mom!</p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between 
                                    hover:bg-[#FFF5F5] transition-colors duration-300 focus:outline-none focus:bg-[#FFF5F5]"
                                onClick={(e) => {
                                    const answer = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (answer) {
                                        toggleQuestion(index, answer);
                                    }
                                }}
                                aria-expanded={openQuestion === index}
                                aria-controls={`question-${index}`}
                            >
                                <span className="flex items-center flex-1 min-w-0">
                                    <span className="text-[#9370DB] mr-3 sm:mr-4 text-xl sm:text-2xl flex-shrink-0">
                                        {item.icon}
                                    </span>
                                    <span className="text-base sm:text-lg font-semibold text-gray-700 truncate pr-2">
                                        {item.question}
                                    </span>
                                </span>
                                <FaChevronDown 
                                    className={`text-[#9370DB] transition-transform duration-300 flex-shrink-0 
                                        ${openQuestion === index ? 'transform rotate-180' : ''}`} 
                                />
                            </button>
                            <div 
                                id={`question-${index}`}
                                className="max-h-0 overflow-hidden transition-all duration-300 bg-white"
                                role="region"
                                aria-labelledby={`question-${index}-button`}
                            >
                                <div className="p-4 sm:p-6 border-t border-[#FFE4E1]">
                                    <textarea
                                        className="w-full p-3 border border-[#E6E6FA] rounded-lg 
                                            focus:outline-none focus:border-[#9370DB] focus:ring-1 focus:ring-[#9370DB]
                                            text-gray-700 min-h-[100px] sm:min-h-[120px]
                                            placeholder:text-gray-400 resize-y"
                                        placeholder="Write your answer here..."
                                        aria-label={`Answer for: ${item.question}`}
                                    ></textarea>
                                    <button
                                        className={`mt-3 px-4 py-2 rounded-lg transition-all duration-300
                                            ${savedQuestions.includes(index)
                                                ? 'bg-[#90EE90] text-[#006400] hover:bg-[#98FB98]'
                                                : 'bg-[#9370DB] text-white hover:bg-[#9370DB]/90'
                                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9370DB]`}
                                        onClick={(e) => {
                                            const answerElement = (e.currentTarget.parentElement?.parentElement as HTMLElement) || null;
                                            handleSave(index, answerElement);
                                        }}
                                        disabled={savedQuestions.includes(index)}
                                    >
                                        {savedQuestions.includes(index) 
                                            ? '✓ Saved Successfully' 
                                            : 'Save Memory'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuestionnaireSection;