import React from 'react';
import mom2 from '../assets/mom2.jpg';
import mom3 from '../assets/mom3.jpg';
import mom4 from '../assets/mom4.jpg';
import mom5 from '../assets/mom5.jpg';
import mom7 from  '../assets/mom7.jpg';
import mom8 from   '../assets/mom8.jpg';
 

interface Photo {
  src: string;
  caption: string;
}

interface FamilyGalleryProps {
  familyPhotos: Photo[];
  openLightbox: (src: string) => void;
}

const FamilyGallery: React.FC<FamilyGalleryProps> = ({ familyPhotos, openLightbox }) => {
  // Placeholder familyPhotos array
  const placeholderPhotos: Photo[] = [
    {
      src: mom2,
      caption: "",
    },
    {
      src: mom3,
      caption: "",
    },
    {
      src: mom4,
      caption: "",
    },
    {
      src: mom5,
      caption: "",
    },
    {
      src: mom7,
      caption: "",
    },
    {
      src: mom8,
      caption: "",
    },
  ];


  const photosToDisplay = familyPhotos.length > 0 ? familyPhotos : placeholderPhotos;

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9370DB] font-['Poppins',_sans-serif] mb-2">Mom's Gallery</h2>
        <div className="w-16 sm:w-24 h-1 bg-[#FFE4E1] mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Cherished moments captured through the years</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {photosToDisplay.map((photo, index) => (
          <div
            key={index}
            className="group relative aspect-[4/5] rounded-lg shadow-lg overflow-hidden 
                      transform transition-all duration-300 hover:scale-[1.02] focus-within:scale-[1.02]
                      focus-within:ring-2 focus-within:ring-[#9370DB]"
            onClick={() => openLightbox(photo.src)}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(photo.src)}
            tabIndex={0}
            role="button"
            aria-label={`View ${photo.caption}`}
          >
            <img 
              src={photo.src} 
              alt={photo.caption} 
              className="w-full h-full object-cover transition-transform duration-700 
                        group-hover:scale-110 group-focus:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                          opacity-0 group-hover:opacity-100 group-focus:opacity-100 
                          transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform 
                            translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 
                            transition-transform duration-300">
                <p className="text-base sm:text-lg font-semibold drop-shadow-lg">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FamilyGallery;