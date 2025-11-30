import { useState, useEffect } from "react";

// Placeholder images - USER WILL REPLACE THESE
const photos = [
  "/public/fav.jpg",
  "/public/best.jpg",
  "/public/billu.jpg",
  "/public/spidey.jpg",
  "/public/chomu.jpg",
  "/public/cutey.jpg",
  "/public/jaw.jpg",
  "/public/mirror.jpg",
];

export const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-24">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Title */}
      <div className="text-center mb-12 gentle-fade relative z-10">
        <h1 className="text-5xl md:text-7xl font-elegant mb-4 text-foreground">
          For the self obsessed you 😋
        </h1>
        <p className="text-lg font-body text-muted-foreground italic">
          These aren’t all the photos, but the ones I picked are my absolute favorites 💖 (Sath photo nahi hai toh abh isse hi chala lo) 
        </p>
      </div>

      {/* Main Slideshow */}
      <div className="relative w-full max-w-5xl aspect-video mb-8 gentle-fade" style={{ animationDelay: '0.2s' }}>
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-glow-ambient">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={photo}
                alt={`Memory ${idx + 1}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          ))}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 z-20 px-4 py-2 bg-card/70 backdrop-blur-md border border-primary/20 rounded-full">
            <span className="text-sm font-body">
              <span className="text-primary font-semibold">{currentIndex + 1}</span>
              <span className="text-muted-foreground mx-1">/</span>
              <span className="text-muted-foreground">{photos.length}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3 w-full max-w-5xl gentle-fade" style={{ animationDelay: '0.4s' }}>
        {photos.map((photo, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
              idx === currentIndex
                ? 'ring-2 ring-primary shadow-glow-soft-blue scale-105'
                : 'ring-1 ring-border/30 hover:ring-primary/50 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={photo} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

    </div>
  );
};
